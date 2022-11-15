import { Text } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { EditorPosition } from 'obsidian';

export class CodeMirrorUtil {
    static toSelection(
        editorView: EditorView,
        anchor: EditorPosition,
        head: EditorPosition,
    ): { anchor: number; head: number } {
        const doc = editorView.state.doc;

        const anchorPos = this.toPos(doc, anchor);
        const headPos = head ? this.toPos(doc, head) : anchorPos;

        return {
            anchor: anchorPos,
            head: headPos,
        };
    }

    static toPos(text: Text, pos: EditorPosition) {
        if (pos.line < 0) {
            return 0;
        }
        const n = pos.line + 1;
        if (n > text.lines) {
            return text.length;
        }
        const i = text.line(n);
        return isFinite(pos.ch) ? (pos.ch < 0 ? i.from + Math.max(0, i.length + pos.ch) : i.from + pos.ch) : i.to;
    }
}
