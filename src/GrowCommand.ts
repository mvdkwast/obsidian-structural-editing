import { Ast, AstNode, AstRange } from './Ast';
import { AstPosMath } from './AstPos';
import { MarkdownASTBuilder, Mdast } from './Mdast';
import { SimpleTextAst } from './SimpleTextAst';

type SelectInParagraphResult = {
    status: 'SUB_RANGE' | 'PARENT_RANGE';
    range?: AstRange;
};

/**
 * Grow selection. Keep this class agnostic of Obsidian / Code Mirror
 */
export class GrowCommand {
    static growSelection(markdown: string, selection: AstRange): AstRange {
        const tree = MarkdownASTBuilder.parse(markdown);
        // console.log('tree', tree);

        const result = Ast.findNodeWithRange(tree, selection);
        let nodeWithSelection = result.node;

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

                nodeWithSelection = Mdast.findAncestorWithLargerRange(parentParagraph, result.ancestors);

                return {
                    start: nodeWithSelection.position.start!,
                    end: nodeWithSelection.position.end!,
                };
            }
        } else {
            // Node is something a more structural part of the Markdown document
            if (Ast.fillsNode(nodeWithSelection, selection) && nodeWithSelection.parent) {
                nodeWithSelection = Mdast.findAncestorWithLargerRange(nodeWithSelection, result.ancestors);
            }

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

        const text = markdown.substring(paragraphRange.start!.offset!, paragraphRange.end!.offset!);
        const tree: AstNode = SimpleTextAst.parse(text);

        // translate selection into paragraph coordinates (make selection relative to text)
        const mappedSelection = {
            start: AstPosMath.toOneBased(AstPosMath.minus(range.start, paragraphRange.start)),
            end: AstPosMath.toOneBased(AstPosMath.minus(range.end, paragraphRange.start)),
        };

        if (Ast.fillsNode(tree, mappedSelection)) {
            return {
                status: 'PARENT_RANGE',
            };
        }

        // find node in range
        const { node: nodeWithSelection, ancestors } = Ast.findNodeWithRange(tree, mappedSelection);

        // if we don't fill it grow to fill it
        // else select parent
        let textNode: AstNode = nodeWithSelection;
        if (Ast.fillsNode(nodeWithSelection, mappedSelection)) {
            textNode = Mdast.findAncestorWithLargerRange(nodeWithSelection, ancestors);
        }

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

        return {
            status: 'SUB_RANGE',
            range: remappedSelection,
        };
    }
}
