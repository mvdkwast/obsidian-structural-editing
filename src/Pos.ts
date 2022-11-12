type Point = {
    line: number;
    column: number;
    offset?: number | undefined;
};

type EditorPosition = {
    line: number;
    ch: number;
};

export type Range = {
    start: Pos;
    end: Pos;
};

export class Pos {
    line: number;
    column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    static fromEditorPosition(pos: EditorPosition): Pos {
        return new Pos(pos.line + 1, pos.ch + 1);
    }

    toEditorPosition(): EditorPosition {
        return {
            line: this.line - 1,
            ch: this.column - 1,
        };
    }

    static fromPoint(pos: Point): Pos {
        return new Pos(pos.line, pos.column);
    }

    compareTo(other: Pos): number {
        if (this.line < other.line) {
            return -1;
        }
        if (this.line > other.line) {
            return 1;
        }
        if (this.column < other.column) {
            return -1;
        }
        if (this.column > other.column) {
            return 1;
        }
        return 0;
    }

    equals(other: Pos): boolean {
        return this.compareTo(other) === 0;
    }

    inRange(start: Pos, end: Pos): boolean {
        return this.compareTo(start) >= 0 && this.compareTo(end) <= 0;
    }

    static order(a: Pos, b: Pos): Range {
        if (a.compareTo(b) <= 0) {
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

    minus(other: Pos): Pos {
        return new Pos(this.line - other.line, this.column - other.column);
    }

    plus(other: Pos): Pos {
        return new Pos(this.line + other.line, this.column - other.column);
    }
}
