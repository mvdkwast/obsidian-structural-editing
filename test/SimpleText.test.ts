import { Range } from '../src/Pos';
import type { Node } from '../src/SimpleText';
import { SimpleText } from '../src/SimpleText';
import { TestUtil } from './util';
import parseRange = TestUtil.parseRange;
import CustomMatcherResult = jest.CustomMatcherResult;

function assertTreeMatches(
    tree: Node,
    expected: Node,
    options: { verifyPositions: boolean } = { verifyPositions: true },
) {
    try {
        expect(tree.type).toBe(expected.type);

        if (options.verifyPositions) {
            expect(tree.start).toEqual(expected.start);
            expect(tree.end).toEqual(expected.end);
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
        // @ts-ignore
        err.nodes = [tree, expected];
        throw err;
    }
}

function treeMatcher(tree: Node, expected: Node, options: { verifyPositions: boolean }): CustomMatcherResult {
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
            toMatchTree: (expected: Node) => CustomMatcherResult;
            // eslint-disable-next-line no-unused-vars
            toMatchTreeIgnoringPositions: (expected: Node) => CustomMatcherResult;
        }
    }
}

expect.extend({
    toMatchTree(tree: Node, expected: Node): CustomMatcherResult {
        return treeMatcher(tree, expected, { verifyPositions: true });
    },

    toMatchTreeIgnoringPositions(tree: Node, expected: Node): CustomMatcherResult {
        return treeMatcher(tree, expected, { verifyPositions: false });
    },
});

function node(type: string, range: string, children: Node[], text?: string): Node {
    const { start, end } = parseRange(range);

    return {
        type,
        start,
        end,
        children,
        text,
    };
}

const buildBuilder =
    (name: string) =>
    (range: string, ...children: Node[]) =>
        node(name, range, children);
const paragraph = buildBuilder('paragraph');
const sentence = buildBuilder('sentence');
const proposition = buildBuilder('proposition');

const word = (range: string, text?: string) => node('word', range, [], text);
const punctuation = (range: string, text?: string) => node('punctuation', range, [], text);

describe('SimpleText', () => {
    /* eslint-disable */
    const cases: Array<[string, string, Node]> = [
        [
            'simple validation',
            'First. Second',
            paragraph('',
                sentence('',
                    proposition('',
                        word('', 'First')
                    ),
                    punctuation('', '.')
                ),
                sentence('',
                    proposition('',
                        word('', 'Second'))
                )
            ),
        ]
    ];

    test.each(cases)('SimpleTestAST: %p', (name, markdown, expected) => {
        const tree = SimpleText.parse(markdown);
        expect(tree).toMatchTreeIgnoringPositions(expected);
    });
});
