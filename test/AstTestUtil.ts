import { diff } from 'jest-diff';
import { AstNode } from '../src/Ast';
import { TestUtil } from './util';
import CustomMatcherResult = jest.CustomMatcherResult;
import parseRange = TestUtil.parseRange;

export function assertTreeMatches(
    tree: AstNode,
    expected: AstNode,
    options: { verifyPositions: boolean } = { verifyPositions: true },
) {
    try {
        expect(tree.type).toBe(expected.type);

        if (options.verifyPositions) {
            expect(tree.position.start).toMatchObject(expected.position.start!);
            expect(tree.position.end).toMatchObject(expected.position.end!);
        }

        if (['word', 'punctuation'].includes(tree.type)) {
            expect(tree.text).toBe(expected.text);
        }

        expect(tree.children).not.toBeNull();
        if (expected.children?.length) {
            expect(tree.children).toHaveLength(expected.children!.length);
            for (let i = 0; i < expected.children?.length; ++i) {
                assertTreeMatches(tree.children![i], expected.children![i], options);
            }
        } else {
            // mdast removes the children field
            expect(!tree.children || !tree.children.length).toBeTruthy();
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

// thanks @WyrdNexus, @bennettmcelwee and @sturmenta !
// https://gist.github.com/bennettmcelwee/06f0cadd6a41847f848b4bd2a351b6bc
function stringify(obj: any, depth = 1) {
    // recursion limited by depth arg
    if (!obj || typeof obj !== 'object') return JSON.stringify(obj, null, 2);

    let curDepthResult = '"<?>"'; // too deep
    if (depth > 0) {
        curDepthResult = Object.keys(obj)
            .map((key) => {
                let val = stringify(obj[key], depth - 1);
                if (val === undefined) val = 'null';
                return `"${key}": ${val}`;
            })
            .join(', ');
        curDepthResult = `{${curDepthResult}}`;
    }

    return JSON.stringify(JSON.parse(curDepthResult), null, 2);
}

export function treeMatcher(
    tree: AstNode,
    expected: AstNode,
    options: { verifyPositions: boolean },
): CustomMatcherResult {
    try {
        assertTreeMatches(tree, expected, options);
    } catch (err) {
        if ('nodes' in (err as object)) {
            // @ts-ignore
            err.message += diff(
                // @ts-ignore
                stringify(err.nodes[0], 3),
                // @ts-ignore
                stringify(err.nodes[1], 3),
            );
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

export function node(type: string, range: string, children: AstNode[], text?: string): AstNode {
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

/* eslint-disable */
export const nodeBuilder =
    (name: string) =>
        (range: string, ...children: AstNode[]) =>
            node(name, range, children);

/* eslint-disable */
export const terminalBuilder =
    (name: string) =>
        (range: string, text: string) =>
            node(name, range, [], text);