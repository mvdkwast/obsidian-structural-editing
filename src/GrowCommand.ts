import { Ast, AstNode, AstRange } from './Ast';
import { MarkdownASTBuilder, Mdast } from './Mdast';
import { Pos, Range } from './Pos';
import { SimpleText } from './SimpleText';

export class GrowCommand {
    static growSelection(markdown: string, selection: Range): Range {
        const tree = MarkdownASTBuilder.parse(markdown);
        console.log('tree', tree.root);

        const result = tree.findNodeWithRange(selection);
        let nodeWithSelection = result.node;
        console.log(result.ancestors.map((a) => a.type));

        const parentParagraph = Mdast.findParentParagraph([...result.ancestors, nodeWithSelection]);
        if (parentParagraph && !Ast.fillsNode(parentParagraph, selection)) {
            // Node is an unfilled paragraph or paragraph content (text, emphasis, ...)
            return this.selectInParagraph(markdown, parentParagraph, selection);
        } else {
            // Node is something a more structural part of the Markdown document
            if (Ast.fillsNode(nodeWithSelection, selection) && nodeWithSelection.parent) {
                console.log('node is filled, selecting parent');
                nodeWithSelection = nodeWithSelection.parent;
            }

            console.log(`filling node of type ${nodeWithSelection.type}`);

            return {
                start: Pos.fromPoint(nodeWithSelection.position.start!),
                end: Pos.fromPoint(nodeWithSelection.position.end!),
            };
        }
    }

    private static selectInParagraph(
        markdown: string,
        parentParagraph: AstNode,
        range: { start: Pos; end: Pos },
    ): Range {
        // in document coordinates
        const paragraphRange: AstRange = {
            start: parentParagraph.position!.start!,
            end: parentParagraph.position!.end!,
        };

        console.log('==================== Using sub-parser ==================== ');
        console.log('paragraph start', paragraphRange.start);
        console.log('paragraph end', paragraphRange.end);

        const text = markdown.substring(paragraphRange.start!.offset!, paragraphRange.end!.offset!);
        console.log(text);

        const tree: AstNode = SimpleText.parse(text);
        console.log(tree);

        // translate selection into paragraph coordinates (make selection relative to text)
        const mappedSelection = {
            start: range.start.minus(Pos.fromPoint(paragraphRange.start!)),
            end: range.end.minus(Pos.fromPoint(paragraphRange.start!)),
        };
        mappedSelection.start.line++;
        mappedSelection.end.line++;
        mappedSelection.start.column++;
        mappedSelection.end.column++;

        console.log('mapped selection:', mappedSelection);

        // find node in range
        const { node: nodeWithSelection, ancestors } = Ast.findNodeWithRange(tree, mappedSelection);
        console.log('antlr result node', nodeWithSelection);
        console.log('ancestors', ancestors);

        // if we don't fill it grow to fill it
        // else select parent
        let textNode: AstNode = nodeWithSelection;
        if (Ast.fillsNode(nodeWithSelection, range)) {
            console.log('selection already fills the node, growing !');
            textNode = ancestors[ancestors.length - 1];
        }

        console.log('selecting', textNode);
        console.log(`selecting text ${textNode.text}`);

        console.log('new selection start', textNode.position.start);
        console.log('new selection end', textNode.position.end);

        const remappedSelection = {
            start: new Pos(
                paragraphRange.start.line - 1 + textNode.position.start!.line,
                paragraphRange.start.column - 1 + textNode.position.start!.column,
            ),
            end: new Pos(
                paragraphRange.start.line - 1 + textNode.position.end!.line,
                paragraphRange.start.column - 1 + textNode.position.end!.column + 1,
            ),
        };

        console.log('mapped selection start', remappedSelection.start);
        console.log('mapped selection end', remappedSelection.end);
        return remappedSelection;
    }
}
