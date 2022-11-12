/*
 * Adapter types to duck-type across mdast and SimpleText and operations on generified AST
 */

import { Pos, Range } from './Pos';

export type Point = {
    line: number;
    column: number;
    offset?: number;
};

export type AstRange = {
    start: Point;
    end: Point;
};

export type AstNode = {
    type: string;
    position: {
        start?: Point;
        end?: Point;
    };
    text?: string;
    children?: AstNode[];
    parent?: AstNode;
};

export namespace Ast {
    export function inNode(node: AstNode, pos: Pos) {
        if (node.position.start?.line === undefined || node.position.end?.line === undefined) {
            return false;
        }

        // FIXME - get rid of mdast points here
        return pos.inRange(Pos.fromPoint(node.position.start as Point), Pos.fromPoint(node.position.end as Point));
    }

    export function fillsNode(node: AstNode, { start, end }: Range): boolean {
        if (node.position.start?.line === undefined || node.position.end?.line === undefined) {
            return false;
        }

        return (
            Pos.fromPoint(node.position.start as Point).compareTo(start) === 0 &&
            Pos.fromPoint(node.position.end as Point).compareTo(end) === 0
        );
    }

    export function findNodeWithRange(root: AstNode, selection: Range): { node: AstNode; ancestors: AstNode[] } {
        let currentParent: AstNode = root;

        const nodeStack: AstNode[] = [];

        // eslint-disable-next-line no-constant-condition
        while (true) {
            console.log('trying node', currentParent);
            nodeStack.push(currentParent);

            // FIXME: we also need to check whether we are in a "gap", ie. between two  nodes. In that case consider
            //        we are in the first node. Do the same for the markdown version. This avoids selecting "up" too fast
            // const child: SimpleTextNode | undefined = currentParent.children?.find(
            //     (node) => this.inNode(node, selection.start) && this.inNode(node, selection.end),
            // );

            let child: AstNode | undefined = undefined;
            const children: AstNode[] =
                currentParent.children?.filter((child) => !!child.position.start && !!child.position.end) ?? [];

            for (let i = 0; i < children.length ?? 0; ++i) {
                const node = children[i];
                const end = i >= children.length - 1 ? node.position.end : children[i + 1].position.start;

                if (
                    selection.start.inRange(Pos.fromPoint(node.position.start as Point), Pos.fromPoint(end as Point)) &&
                    selection.end.inRange(Pos.fromPoint(node.position.start as Point), Pos.fromPoint(end as Point))
                ) {
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

        // move up to the highest node that has the same range as the last node
        // const lastNode = nodeStack[nodeStack.length - 1];
        // let sameNodeIndex;
        // for (sameNodeIndex = nodeStack.length - 2; sameNodeIndex >= 0; --sameNodeIndex) {
        //     const parentNode = nodeStack[sameNodeIndex];
        //     if (
        //         Pos.fromPoint(parentNode.position.start as Point).equals(
        //             Pos.fromPoint(lastNode.position.start as Point),
        //         ) &&
        //         Pos.fromPoint(parentNode.position.end as Point).equals(Pos.fromPoint(lastNode.position.end as Point))
        //     ) {
        //         //
        //     } else {
        //         break;
        //     }
        // }

        // return {
        //     node: nodeStack[sameNodeIndex + 1],
        //     ancestors: nodeStack.slice(0, Math.max(0, sameNodeIndex + 1)),
        // };
    }
}
