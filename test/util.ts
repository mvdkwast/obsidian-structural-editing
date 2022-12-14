import { AstPos, AstRange } from '../src/Ast';
import CustomMatcherResult = jest.CustomMatcherResult;

const insert = (text: string, pos: number, insert: string) => text.slice(0, pos) + insert + text.slice(pos);

export namespace TestUtil {
    /** Format a position as "1:4" */
    export function formatPosition(position?: AstPos) {
        return position ? `${position.line}:${position.column}` : '';
    }

    /** Format a Range as "1:4-10:29" */
    export function formatRange(range: { start?: AstPos; end?: AstPos }) {
        return `${formatPosition(range.start)}-${formatPosition(range.end)}`;
    }

    /** Parse a string in the format "1:4-10:29" into a Range */
    export function parsePos(pos: string): AstPos {
        const [line, column] = pos.split(':');
        return {
            line: parseInt(line),
            column: parseInt(column),
        };
    }

    /** Parse a string in the format "1:4-10:29" into a Range */
    export function parseRange(range: string): AstRange {
        const parts = range.split(/[:-]/).map((v) => parseInt(v));
        if (parts.length !== 4) {
            throw Error(`invalid range: ${range}`);
        }

        return {
            start: {
                line: parts[0],
                column: parts[1],
            },
            end: {
                line: parts[2],
                column: parts[3],
            },
        };
    }

    /** return selection identified by markers in a text, eg "my |text|" */
    export function getSelection(text: string, marker: string = '|'): AstRange | undefined {
        const left = text.indexOf(marker);
        if (left < 0) {
            return undefined;
        }
        const right = text.indexOf(marker, left + 1);

        let line = 0;
        let col = 0;
        for (let i = 0; i < left; ++i) {
            if (text[i] == '\n') {
                line++;
                col = 0;
            } else {
                ++col;
            }
        }

        const posLeft = {
            line: line + 1,
            column: col + 1,
        };

        let posRight;

        if (right >= 0) {
            col--; // compensate for first cursor
            for (let i = left; i < right; ++i) {
                if (text[i] == '\n') {
                    line++;
                    col = 0;
                } else {
                    ++col;
                }
            }

            posRight = {
                line: line + 1,
                column: col + 1,
            };
        }

        return {
            start: posLeft,
            end: posRight ? posRight : posLeft,
        };
    }

    export function stripSelection(text: string, marker: string = '|'): string {
        // @ts-ignore replaceAll is es2021 and supported
        return text.replaceAll(marker, '');
    }

    export function renderSelection(text: string, selection: AstRange, marker: string = '|'): string {
        if (!selection.start) {
            return text;
        }

        const lines = text.split('\n');

        const startLineIndex = selection.start.line - 1;
        lines[startLineIndex] = insert(lines[startLineIndex], selection.start.column - 1, marker);

        if (selection.end) {
            // FIXME - assumes start and end are ordered
            const column =
                selection.start.line === selection.end.line
                    ? selection.end.column // -1 + 1 (because of previous cursor)
                    : selection.end.column - 1;
            const endLineIndex = selection.end.line - 1;
            lines[endLineIndex] = insert(lines[endLineIndex], column, marker);
        }

        return lines.join('\n');
    }
}

declare global {
    // eslint-disable-next-line no-unused-vars
    namespace jest {
        // eslint-disable-next-line no-unused-vars
        interface Matchers<R> {
            // eslint-disable-next-line no-unused-vars
            toMatchRange: (expected: string) => CustomMatcherResult;
        }
    }
}

expect.extend({
    toMatchRange(received: AstRange, range?: string): CustomMatcherResult {
        if (range === undefined) {
            return received
                ? {
                      pass: false,
                      message: () => 'Expected start to be undefined',
                  }
                : {
                      pass: true,
                      message: () => 'Ranges are both undefined',
                  };
        } else if (TestUtil.formatRange(received) !== range) {
            return {
                pass: false,
                message: () => `Range differ: got "${TestUtil.formatRange(received)}", expected "${range}"`,
            };
        } else {
            return {
                pass: true,
                message: () => 'Ranges are identical',
            };
        }
    },
});
