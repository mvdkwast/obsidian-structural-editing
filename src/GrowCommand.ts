import { Antlr } from './Antlr';
import { MarkdownASTBuilder, Mdast, MdastNode } from './Mdast';
import { Pos, Range } from './Pos';
import { SimpleText, Node as SimpleTextNode } from './SimpleText';

export class GrowCommand {
    static growSelection(markdown: string, selection: Range): Range {
        const tree = MarkdownASTBuilder.parse(markdown);
        console.log('tree', tree.root);

        const result = tree.findNodeWithRange(selection);
        let nodeWithSelection = result.node;
        console.log(result.ancestors.map((a) => a.type));

        const parentParagraph = Mdast.findParentParagraph(result.ancestors);
        if (parentParagraph && !Mdast.fillsNode(parentParagraph, selection)) {
            const remappedSelection = this.selectInParagraph(markdown, parentParagraph, selection);
            return {
                start: remappedSelection.start,
                end: remappedSelection.end,
            };
        } else {
            // If node is an unfilled paragraph or paragraph content (text, emphasis, ...)
            if (Mdast.fillsNode(nodeWithSelection, selection) && nodeWithSelection.parent) {
                console.log('node is filled, selecting parent');
                nodeWithSelection = nodeWithSelection.parent;
            }

            console.log(`filling node of type ${nodeWithSelection.type}`);

            return {
                start: Pos.fromPoint(nodeWithSelection.position!.start),
                end: Pos.fromPoint(nodeWithSelection.position!.end),
            };
        }
    }

    private static selectInParagraph(
        markdown: string,
        parentParagraph: MdastNode,
        range: { start: Pos; end: Pos },
    ): Range {
        // in document coordinates
        const paragraphRange = {
            start: parentParagraph.position!.start,
            end: parentParagraph.position!.end,
        };

        console.log('==================== Using sub-parser ==================== ');
        console.log('paragraph start', paragraphRange.start);
        console.log('paragraph end', paragraphRange.end);

        const text = markdown.substring(paragraphRange.start.offset!, paragraphRange.end!.offset);
        console.log(text);

        const tree: SimpleTextNode = SimpleText.parse(text);
        console.log(tree);

        // translate selection into paragraph coordinates (make selection relative to text)
        const mappedSelection = {
            start: range.start.minus(Pos.fromPoint(paragraphRange.start)),
            end: range.end.minus(Pos.fromPoint(paragraphRange.start)),
        };
        mappedSelection.start.line++;
        mappedSelection.end.line++;
        mappedSelection.start.column++;
        mappedSelection.end.column++;

        console.log('mapped selection:', mappedSelection);

        // find node in range
        const { node: nodeWithSelection, ancestors } = Antlr.findNodeWithRange(tree, mappedSelection);
        console.log('antlr result node', nodeWithSelection);
        console.log('ancestors', ancestors);

        // if we don't fill it grow to fill it
        // else select parent
        let textNode: SimpleTextNode = nodeWithSelection;
        if (Antlr.fillsNode(nodeWithSelection, range)) {
            console.log('selection already fills the node, growing !');
            textNode = ancestors[ancestors.length - 1];
        }

        console.log('selecting', textNode);
        console.log(`selecting text ${textNode.text}`);

        console.log('new selection start', textNode.start);
        console.log('new selection end', textNode.end);

        const remappedSelection = {
            start: new Pos(
                paragraphRange.start.line - 1 + textNode.start!.line,
                paragraphRange.start.column - 1 + textNode.start!.column,
            ),
            end: new Pos(
                paragraphRange.start.line - 1 + textNode.end!.line,
                paragraphRange.start.column - 1 + textNode.end!.column + 1,
            ),
        };

        console.log('mapped selection start', remappedSelection.start);
        console.log('mapped selection end', remappedSelection.end);
        return remappedSelection;
    }
}
