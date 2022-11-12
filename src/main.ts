import { Editor, EditorPosition, MarkdownView, Plugin } from 'obsidian';
import { Point } from './Ast';
import { GrowCommand } from './GrowCommand';
import { Pos } from './Pos';

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
                const selection = Pos.order(Pos.fromEditorPosition(head), Pos.fromEditorPosition(anchor));
                console.log('selection start', selection.start);
                console.log('selection end', selection.end);

                const newSelection = GrowCommand.growSelection(view.data, selection);
                editor.setSelection(this.toEditorPosition(newSelection.start), this.toEditorPosition(newSelection.end));
            },
        });
    }

    toEditorPosition(pos: Point): EditorPosition {
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
