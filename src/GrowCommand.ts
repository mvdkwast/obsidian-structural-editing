import { Ast, AstNode, AstRange } from './Ast';
import { AstPosMath } from './AstPos';
import { MarkdownASTBuilder, Mdast } from './Mdast';
import { SimpleText } from './SimpleText';

type SelectInParagraphResult = {
    status: 'SUB_RANGE' | 'PARENT_RANGE';
    range?: AstRange;
};

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
            const subParserResult = this.selectInParagraph(markdown, parentParagraph, selection);
            if (subParserResult.status === 'SUB_RANGE') {
                return subParserResult.range!;
            } /* if (subParserResult.status === 'PARENT_RANGE') */ else {
                // This happens if the parent parser cannot detect that the entire node has been selected : for instance
                // if the token has trailing space and all the non-space characters are selected the node should be
                // considered as selected by the sub-parser, but the parent parser doesn't look inside the block.

                // FIXME - deduplicate
                console.log('node is filled, selecting parent');
                nodeWithSelection = Mdast.findAncestorWithLargerRange(parentParagraph, result.ancestors);

                console.log(`filling node of type ${nodeWithSelection.type}`);

                return {
                    start: nodeWithSelection.position.start!,
                    end: nodeWithSelection.position.end!,
                };
            }
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

    private static selectInParagraph(
        markdown: string,
        parentParagraph: AstNode,
        range: AstRange,
    ): SelectInParagraphResult {
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

        if (Ast.fillsNode(tree, mappedSelection)) {
            return {
                status: 'PARENT_RANGE',
            };
        }

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

        return {
            status: 'SUB_RANGE',
            range: remappedSelection,
        };
    }
}
