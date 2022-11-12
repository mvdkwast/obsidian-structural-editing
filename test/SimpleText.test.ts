import type { AstNode } from '../src/Ast';
import { SimpleText } from '../src/SimpleText';
import { TestUtil } from './util';
import CustomMatcherResult = jest.CustomMatcherResult;
import parseRange = TestUtil.parseRange;

function assertTreeMatches(
    tree: AstNode,
    expected: AstNode,
    options: { verifyPositions: boolean } = { verifyPositions: true },
) {
    try {
        expect(tree.type).toBe(expected.type);

        if (options.verifyPositions) {
            expect(tree.position.start).toEqual(expected.position.start);
            expect(tree.position.end).toEqual(expected.position.end);
        }

        if (['word', 'punctuation'].includes(tree.type)) {
            expect(tree.text).toBe(expected.text);
        }

        expect(tree.children).not.toBeNull();
        expect(tree.children).toHaveLength(expected.children!.length);
        for (let i = 0; i < tree.children!.length; ++i) {
            assertTreeMatches(tree.children![i], expected.children![i], options);
        }
    } catch (err) {
        // @ts-expect-error
        if (!('nodes' in err)) {
            // @ts-expect-error
            err.nodes = [tree, expected];
        }
        throw err;
    }
}

function treeMatcher(tree: AstNode, expected: AstNode, options: { verifyPositions: boolean }): CustomMatcherResult {
    try {
        assertTreeMatches(tree, expected, options);
    } catch (err) {
        if ('nodes' in (err as object)) {
            // @ts-ignore
            err.message +=
                '\n\nnode:' +
                // @ts-ignore
                JSON.stringify(err.nodes[0], null, 2) +
                '\n\nexpected:' +
                // @ts-ignore
                JSON.stringify(err.nodes[1], null, 2);
        }
        throw err;
    }

    return {
        pass: true,
        message: () => 'Trees are identical',
    };
}

declare global {
    // eslint-disable-next-line no-unused-vars
    namespace jest {
        // eslint-disable-next-line no-unused-vars
        interface Matchers<R> {
            // eslint-disable-next-line no-unused-vars
            toMatchTree: (expected: AstNode) => CustomMatcherResult;
            // eslint-disable-next-line no-unused-vars
            toMatchTreeIgnoringPositions: (expected: AstNode) => CustomMatcherResult;
        }
    }
}

expect.extend({
    toMatchTree(tree: AstNode, expected: AstNode): CustomMatcherResult {
        return treeMatcher(tree, expected, { verifyPositions: true });
    },

    toMatchTreeIgnoringPositions(tree: AstNode, expected: AstNode): CustomMatcherResult {
        return treeMatcher(tree, expected, { verifyPositions: false });
    },
});

function node(type: string, range: string, children: AstNode[], text?: string): AstNode {
    const { start, end } = parseRange(range);

    return {
        type,
        position: {
            start,
            end,
        },
        children,
        text,
    };
}

const buildBuilder =
    (name: string) =>
        (range: string, ...children: AstNode[]) =>
            node(name, range, children);
const paragraph = buildBuilder('paragraph');
const sentence = buildBuilder('sentence');
const proposition = buildBuilder('proposition');

const word = (range: string, text?: string) => node('word', range, [], text);
const punctuation = (range: string, text?: string) => node('punctuation', range, [], text);

describe('Validate SimpleText AST structure', () => {
    /* eslint-disable */
    const cases: Array<[string, string, AstNode]> = [
        [
            '2 sentences',
            'First. Second',
            paragraph(
                '',
                sentence(
                    '',
                    proposition(
                        '',
                        word('', 'First'),
                    ),
                    punctuation('', '.'),
                ),
                sentence(
                    '',
                    proposition(
                        '',
                        word('', 'Second')),
                ),
            ),
        ],
        [
            'word gap',
            'aaa bbb',
            paragraph(
                '1:1-1:7',
                sentence(
                    '1:1-1:7',
                    proposition(
                        '1:1-1:7',
                        word('1:1-1:3', 'aaa'),
                        word('1:5-1:7', 'bbb'),
                    ),
                ),
            ),
        ],
    ];

    test.each(cases)('SimpleTestAST: %p', (name, markdown, expected) => {
        const tree = SimpleText.parse(markdown);
        expect(tree).toMatchTreeIgnoringPositions(expected);
    });
});

describe('Validate SimpleText AST structure with positions', () => {
    /* eslint-disable */
    const cases: Array<[string, string, AstNode]> = [
        [
            'word gap',
            'aaa bbb',
            paragraph(
                '1:1-1:7',
                sentence(
                    '1:1-1:7',
                    proposition(
                        '1:1-1:7',
                        word('1:1-1:3', 'aaa'),
                        word('1:5-1:7', 'bbb'),
                    ),
                ),
            ),
        ],
        [
            'line gap',
            'aaa.\nbbb',
            paragraph(
                '1:1-2:3',
                sentence(
                    `1:1-1:4`,
                    proposition(
                        `1:1-1:3`,
                        word(`1:1-1:3`, 'aaa'),
                    ),
                    punctuation('1:4-1:4', '.')
                ),
                sentence(
                    '2:1-2:3',
                    proposition(
                        '2:1-2:3',
                        word('2:1-2:3', 'bbb'),
                    ),
                ),
            ),
        ],
    ];

    test.each(cases)('SimpleTestAST: %p', (name, markdown, expected) => {
        const tree = SimpleText.parse(markdown);
        expect(tree).toMatchTree(expected);
    });
});
