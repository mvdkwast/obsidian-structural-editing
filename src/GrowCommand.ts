import { Ast, AstNode, AstRange } from './Ast';
import { AstPosMath } from './AstPos';
import { MarkdownASTBuilder, Mdast } from './Mdast';
import { SimpleText } from './SimpleText';

export class GrowCommand {
    static growSelection(markdown: string, selection: AstRange): AstRange {
        const tree = MarkdownASTBuilder.parse(markdown);
        console.log('tree', tree);

        const result = Ast.findNodeWithRange(tree, selection);
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
                nodeWithSelection = Mdast.findAncestorWithLargerRange(nodeWithSelection, result.ancestors);
            }

            console.log(`filling node of type ${nodeWithSelection.type}`);

            return {
                start: nodeWithSelection.position.start!,
                end: nodeWithSelection.position.end!,
            };
        }
    }

    private static selectInParagraph(markdown: string, parentParagraph: AstNode, range: AstRange): AstRange {
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
            start: AstPosMath.toOneBased(AstPosMath.minus(range.start, paragraphRange.start)),
            end: AstPosMath.toOneBased(AstPosMath.minus(range.end, paragraphRange.start)),
        };
        console.log('mapped selection:', mappedSelection);

        // find node in range
        const { node: nodeWithSelection, ancestors } = Ast.findNodeWithRange(tree, mappedSelection);
        console.log('antlr result node', nodeWithSelection);
        console.log('ancestors', ancestors);

        // if we don't fill it grow to fill it
        // else select parent
        let textNode: AstNode = nodeWithSelection;
        if (Ast.fillsNode(nodeWithSelection, mappedSelection)) {
            console.log('selection already fills the node, growing !');
            textNode = Mdast.findAncestorWithLargerRange(nodeWithSelection, ancestors);
        }

        console.log('selecting', textNode);
        console.log(`selecting text ${textNode.text}`);

        console.log('new selection start', textNode.position.start);
        console.log('new selection end', textNode.position.end);

        const remappedSelection: AstRange = {
            start: {
                line: paragraphRange.start.line - 1 + textNode.position.start!.line,
                column: paragraphRange.start.column - 1 + textNode.position.start!.column,
            },
            end: {
                line: paragraphRange.start.line - 1 + textNode.position.end!.line,
                column: paragraphRange.start.column - 1 + textNode.position.end!.column + 1,
            },
        };

        console.log('mapped selection start', remappedSelection.start);
        console.log('mapped selection end', remappedSelection.end);
        return remappedSelection;
    }
}
