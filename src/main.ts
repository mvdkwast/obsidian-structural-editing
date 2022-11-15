import { EditorView } from '@codemirror/view';

import { Editor, EditorSelection, MarkdownView, Plugin } from 'obsidian';
import { AstPosMath } from './AstPos';
import { GrowTransactions } from './cm/GrowTransactions';
import { GrowCommand } from './GrowCommand';

type StructuralEditSettings = {
    /** If set svg are converted to bitmap */
    convertSvgToBitmap: boolean;
};

const DEFAULT_SETTINGS: StructuralEditSettings = {
    convertSvgToBitmap: true,
};

export default class StructuralEditPlugin extends Plugin {
    settings?: StructuralEditSettings;

    async onload() {
        await this.loadSettings();

        this.registerEditorExtension(GrowTransactions.extensions());

        this.addCommand({
            id: 'grow-selection',
            name: 'Grow selection',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const initialSelection = editor.listSelections()[0];
                const range = AstPosMath.order(
                    AstPosMath.fromEditorPosition(initialSelection.head),
                    AstPosMath.fromEditorPosition(initialSelection.anchor),
                );

                const newRange = GrowCommand.growSelection(view.data, range);

                const newSelection: EditorSelection = {
                    head: AstPosMath.toEditorPosition(newRange.start),
                    anchor: AstPosMath.toEditorPosition(newRange.end),
                };

                // FIXME - don't push if selection unchanged (already everything selected) to avoid duplicates

                // @ts-expect-error, not typed
                const editorView = view.editor.cm as EditorView;
                GrowTransactions.dispatchGrow(editorView, initialSelection, newSelection);
            },
        });

        this.addCommand({
            id: 'shrink-selection',
            name: 'Shrink selection',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                // @ts-expect-error, not typed
                const editorView = view.editor.cm as EditorView;

                if (!GrowTransactions.dispatchShrink(editorView)) {
                    // TODO: shrink to "cursor", ie. head in Obsidian's case - this is when something was selected
                    //       manually and we call shrink
                    console.log('shrink without grow not implemented');
                }
            },
        });
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}
