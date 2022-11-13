import { Editor, EditorPosition, EditorSelection, MarkdownView, Plugin } from 'obsidian';
import { AstPos } from './Ast';
import { AstPosMath } from './AstPos';
import { GrowCommand } from './GrowCommand';
import { SelectionHistory } from './SelectionHistory';

type StructuralEditSettings = {
    /** If set svg are converted to bitmap */
    convertSvgToBitmap: boolean;
};

const DEFAULT_SETTINGS: StructuralEditSettings = {
    convertSvgToBitmap: true,
};

// 1-based

export default class StructuralEditPlugin extends Plugin {
    settings?: StructuralEditSettings;

    async onload() {
        await this.loadSettings();

        this.addCommand({
            id: 'grow-selection',
            name: 'Grow selection',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const { head, anchor } = editor.listSelections()[0];
                const selection = AstPosMath.order(
                    AstPosMath.fromEditorPosition(head),
                    AstPosMath.fromEditorPosition(anchor),
                );
                console.log('selection start', selection.start);
                console.log('selection end', selection.end);

                const newSelection = GrowCommand.growSelection(view.data, selection);
                const obsidianSelection: EditorSelection = {
                    head: this.toEditorPosition(newSelection.start),
                    anchor: this.toEditorPosition(newSelection.end),
                };

                editor.setSelection(obsidianSelection.anchor, obsidianSelection.head);

                // work-around: since we don't know how to handle a selection that changed, reset history
                // if we start from no select (cursor only). This means that shrink doesn't work as intended if something
                // was selected manually before the first grow
                if (AstPosMath.equals(selection.start, selection.end)) {
                    SelectionHistory.clear(view.file.path);
                    SelectionHistory.pushSelection(view.file.path, { head, anchor });
                }

                // FIXME - don't push if selection unchanged (already everything selected)
                SelectionHistory.pushSelection(view.file.path, obsidianSelection);
            },
        });

        this.addCommand({
            id: 'shrink-selection',
            name: 'Shrink selection',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const { head, anchor } = editor.listSelections()[0];

                let historicalSelection = SelectionHistory.popSelection(view.file.path);
                if (
                    historicalSelection &&
                    historicalSelection.head.line == head.line &&
                    historicalSelection.head.ch == head.ch &&
                    historicalSelection.anchor.line == anchor.line &&
                    historicalSelection.anchor.ch === anchor.ch
                ) {
                    historicalSelection = SelectionHistory.popSelection(view.file.path);
                }

                if (historicalSelection) {
                    editor.setSelection(historicalSelection.anchor, historicalSelection.head);
                } else {
                    // TODO: shrink to "cursor", ie. head in Obsidian's case - this is when something was selected
                    //       manually and we call shrink
                }
            },
        });
    }

    toEditorPosition(pos: AstPos): EditorPosition {
        return {
            line: pos.line - 1,
            ch: pos.column - 1,
        };
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}
