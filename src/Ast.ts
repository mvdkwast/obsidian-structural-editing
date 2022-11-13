/*
 * Adapter types to duck-type across mdast and SimpleText and operations on generified AST
 */

import { AstPosMath } from './AstPos';

export type AstPos = {
    line: number;
    column: number;
    offset?: number;
};

export type AstRange = {
    start: AstPos;
    end: AstPos;
};

export type AstNode = {
    type: string;
    position: {
        start?: AstPos;
        end?: AstPos;
    };
    text?: string;
    children?: AstNode[];
    parent?: AstNode;
};

export namespace Ast {
    export function inNode(node: AstNode, pos: AstPos) {
        if (node.position.start?.line === undefined || node.position.end?.line === undefined) {
            return false;
        }

        return AstPosMath.inInclusiveRange(pos, { start: node.position.start, end: node.position.end });
    }

    export function fillsNode(node: AstNode, selection: AstRange): boolean {
        if (node.position.start?.line === undefined || node.position.end?.line === undefined) {
            return false;
        }

        return AstPosMath.covers(selection, { start: node.position.start!, end: node.position.end! });
    }

    export function findNodeWithRange(root: AstNode, selection: AstRange): { node: AstNode; ancestors: AstNode[] } {
        let currentParent: AstNode = root;
        const nodeStack: AstNode[] = [];

        selection = {
            start: AstPosMath.compareTo(selection.start, root.position.end!) > 0 ? root.position.end! : selection.start,
            end: AstPosMath.compareTo(selection.end, root.position.end!) > 0 ? root.position.end! : selection.end,
        };

        // eslint-disable-next-line no-constant-condition
        while (true) {
            console.log('trying node', currentParent);
            nodeStack.push(currentParent);

            // we consider the space after a token to be part of the token regarding selection

            let child: AstNode | undefined = undefined;
            const children: AstNode[] =
                currentParent.children?.filter((child) => !!child.position.start && !!child.position.end) ?? [];

            for (let i = 0; i < children.length ?? 0; ++i) {
                const node = children[i];
                const end = i >= children.length - 1 ? node.position.end : children[i + 1].position.start;

                const startInToken = AstPosMath.inInclusiveRange(selection.start, {
                    start: node.position.start!,
                    end: end!,
                });

                // The space between tokens is considered part of the first token. The token's end matches the next
                // token's start, (which has to be excluded), unless it's the last token, then include its own end.
                const endInToken =
                    i >= children.length - 1
                        ? AstPosMath.inInclusiveRange(selection.end, { start: node.position.start!, end: end! })
                        : AstPosMath.inRangeExcludingEnd(selection.end, { start: node.position.start!, end: end! });

                if (startInToken && endInToken) {
                    child = node;
                    break;
                }
            }

            if (!child) {
                console.log('no matching child');
                break;
            }

            if (child.children && child.children.length > 0) {
                console.log('child with children');
                currentParent = child;
            } else {
                console.log('child with no children');
                nodeStack.push(child);
                break;
            }
        }

        return {
            node: { ...nodeStack[nodeStack.length - 1], parent: nodeStack[Math.max(0, nodeStack.length - 2)] },
            ancestors: nodeStack,
        };
    }
}
