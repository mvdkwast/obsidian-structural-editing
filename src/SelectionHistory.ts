import { EditorSelection } from 'obsidian';

export class SelectionHistory {
    static readonly history: Map<string, EditorSelection[]> = new Map();

    static pushSelection(file: string, selection: EditorSelection) {
        const selections = this.history.get(file);
        if (!selections) {
            this.history.set(file, [selection]);
        } else {
            selections.push(selection);
        }
    }

    static popSelection(file: string): EditorSelection | undefined {
        const selections = this.history.get(file);
        if (!selections) {
            return undefined;
        }

        return selections.pop();
    }

    static clear(file: string) {
        const selections = this.history.get(file);
        if (selections) {
            selections.length = 0;
        }
    }
}
