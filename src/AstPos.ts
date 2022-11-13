import { AstPos, AstRange } from './Ast';

type EditorPosition = {
    line: number;
    ch: number;
};

export class AstPosMath {
    // FIXME - move this out
    static fromEditorPosition(pos: EditorPosition): AstPos {
        return {
            line: pos.line + 1,
            column: pos.ch + 1,
        };
    }

    static toEditorPosition(pos: AstPos): EditorPosition {
        return {
            line: pos.line - 1,
            ch: pos.column - 1,
        };
    }

    static toOneBased(pos: AstPos) {
        return {
            line: pos.line + 1,
            column: pos.column + 1,
        };
    }

    static compareTo(pos: AstPos, other: AstPos): -1 | 0 | 1 {
        if (pos.line < other.line) {
            return -1;
        }
        if (pos.line > other.line) {
            return 1;
        }
        if (pos.column < other.column) {
            return -1;
        }
        if (pos.column > other.column) {
            return 1;
        }
        return 0;
    }

    static equals(pos: AstPos, other: AstPos): boolean {
        return this.compareTo(pos, other) === 0;
    }

    /** pos is in range, including start and end positions from range */
    static inInclusiveRange(pos: AstPos, range: AstRange): boolean {
        return this.compareTo(pos, range.start) >= 0 && this.compareTo(pos, range.end) <= 0;
    }

    /** pos is in range, including start and excluding end */
    static inRangeExcludingEnd(pos: AstPos, range: AstRange): boolean {
        return this.compareTo(pos, range.start) >= 0 && this.compareTo(pos, range.end) < 0;
    }

    /** source range covers target range */
    static covers(sourceRange: AstRange, targetRange: AstRange): boolean {
        return (
            this.compareTo(sourceRange.start, targetRange.start) <= 0 &&
            this.compareTo(sourceRange.end, targetRange.end) >= 0
        );
    }

    /** return an ordered range */
    static order(a: AstPos, b: AstPos): AstRange {
        if (this.compareTo(a, b) <= 0) {
            return {
                start: a,
                end: b,
            };
        } else {
            return {
                start: b,
                end: a,
            };
        }
    }

    static minus(pos: AstPos, other: AstPos): AstPos {
        return {
            line: pos.line - other.line,
            column: pos.column - other.column,
        };
    }

    static plus(pos: AstPos, other: AstPos): AstPos {
        return {
            line: pos.line + other.line,
            column: pos.column - other.column,
        };
    }
}
