import { EditorState, StateEffect, StateField, Transaction } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { EditorSelection } from 'obsidian';
import { CodeMirrorUtil } from '../CodeMirrorUtil';

export type GrowState = {
    lastCommand: 'GROW' | 'SHRINK';
    selections: EditorSelection[];
};

const growEffect = StateEffect.define<EditorSelection>();
const undoGrowEffect = StateEffect.define();
const resetGrowEffect = StateEffect.define();

const selectionChangedTransactionFilter = EditorState.transactionFilter.of((transaction) => {
    if (transaction.selection && !transaction.effects.some((e) => e.is(growEffect))) {
        return [transaction, { effects: [resetGrowEffect.of(null)] }];
    }
    return transaction;
});

const growField = StateField.define<GrowState>({
    create(state: EditorState): GrowState {
        return {
            lastCommand: 'SHRINK',
            selections: [],
        };
    },
    update(oldState: GrowState, transaction: Transaction): GrowState {
        for (const effect of transaction.effects) {
            if (effect.is(growEffect)) {
                return {
                    lastCommand: 'GROW',
                    selections: [...oldState.selections, effect.value],
                };
            }

            if (effect.is(resetGrowEffect)) {
                return {
                    lastCommand: 'SHRINK',
                    selections: [],
                };
            }

            if (effect.is(undoGrowEffect)) {
                return {
                    lastCommand: 'SHRINK',
                    selections: oldState.selections.slice(
                        0,
                        oldState.selections.length - (oldState.lastCommand === 'SHRINK' ? 1 : 2),
                    ),
                };
            }
        }

        return oldState;
    },
});

export class GrowTransactions {
    static extensions() {
        return [selectionChangedTransactionFilter, growField];
    }

    static dispatchGrow(editorView: EditorView, initialSelection: EditorSelection, newSelection: EditorSelection) {
        const growState = editorView.state.field(growField);

        // Store initial cursor position / selection before we start growing, so we can move back to there
        // if we shrink
        if (growState.lastCommand === 'SHRINK') {
            editorView.dispatch({
                effects: [growEffect.of(initialSelection)],
            });
        }

        const codeMirrorSelection = CodeMirrorUtil.toSelection(editorView, newSelection.anchor, newSelection.head);

        // FIXME - we should store the codeMirrorSelection here
        editorView.dispatch({
            selection: codeMirrorSelection,
            effects: [growEffect.of(newSelection)],
        });
    }

    /** Try to shrink from history. Return false if grow history is empty */
    static dispatchShrink(editorView: EditorView): boolean {
        const growState = editorView.state.field(growField);

        const entriesNeeded = growState.lastCommand === 'GROW' ? 2 : 1;
        if (growState.selections.length >= entriesNeeded) {
            const entry = growState.selections[growState.selections.length - entriesNeeded];
            const codeMirrorSelection = CodeMirrorUtil.toSelection(editorView, entry!.anchor, entry!.head);

            editorView.dispatch({
                selection: codeMirrorSelection,
                effects: [undoGrowEffect.of(null)],
            });

            return true;
        }

        return false;
    }
}
