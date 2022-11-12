import { Point } from 'mdast-util-from-markdown/lib';
import { Pos, Range } from './Pos';
import { Node as SimpleTextNode } from './SimpleText';

export class Antlr {
    static inNode(node: SimpleTextNode, pos: Pos) {
        if (node.start?.line === undefined || node.end?.line === undefined) {
            return false;
        }

        // FIXME - get rid of mdast points here
        return pos.inRange(Pos.fromPoint(node.start as Point), Pos.fromPoint(node.end as Point));
    }

    static fillsNode(node: SimpleTextNode, { start, end }: Range): boolean {
        if (node.start?.line === undefined || node.end?.line === undefined) {
            return false;
        }

        return (
            Pos.fromPoint(node.start as Point).compareTo(start) === 0 &&
            Pos.fromPoint(node.end as Point).compareTo(end) === 0
        );
    }

    static findNodeWithRange(
        root: SimpleTextNode,
        selection: Range,
    ): { node: SimpleTextNode; ancestors: SimpleTextNode[] } {
        let currentParent: SimpleTextNode = root;

        const nodeStack: SimpleTextNode[] = [];

        // eslint-disable-next-line no-constant-condition
        while (true) {
            console.log('trying node', currentParent);
            nodeStack.push(currentParent);

            // FIXME: we also need to check whether we are in a "gap", ie. between two  nodes. In that case consider
            //        we are in the first node. Do the same for the markdown version. This avoids selecting "up" too fast
            // const child: SimpleTextNode | undefined = currentParent.children?.find(
            //     (node) => this.inNode(node, selection.start) && this.inNode(node, selection.end),
            // );

            let child: SimpleTextNode | undefined = undefined;
            const children: SimpleTextNode[] =
                currentParent.children?.filter((child) => !!child.start && !!child.end) ?? [];

            for (let i = 0; i < children.length ?? 0; ++i) {
                const node = children[i];
                const end = i >= children.length - 1 ? node.end : children[i + 1].start;

                if (
                    selection.start.inRange(Pos.fromPoint(node.start as Point), Pos.fromPoint(end as Point)) &&
                    selection.end.inRange(Pos.fromPoint(node.start as Point), Pos.fromPoint(end as Point))
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

        // move up to the highest node that has the same range as the last node
        const lastNode = nodeStack[nodeStack.length - 1];
        let sameNodeIndex;
        for (sameNodeIndex = nodeStack.length - 2; sameNodeIndex >= 0; --sameNodeIndex) {
            const parentNode = nodeStack[sameNodeIndex];
            if (
                Pos.fromPoint(parentNode.start as Point).equals(Pos.fromPoint(lastNode.start as Point)) &&
                Pos.fromPoint(parentNode.end as Point).equals(Pos.fromPoint(lastNode.end as Point))
            ) {
                //
            } else {
                break;
            }
        }

        return {
            node: nodeStack[sameNodeIndex + 1],
            ancestors: nodeStack.slice(0, Math.max(0, sameNodeIndex + 1)),
        };
    }
}
