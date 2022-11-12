import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AstNode } from './Ast';
import { SimpleTextLexer } from './grammar/SimpleTextLexer';
import {
    EndPunctuationContext,
    ExpressionContext,
    MidPunctuationContext,
    ParagraphContext,
    PropositionContext,
    SentenceContext,
    SimpleTextParser,
    WordContext,
} from './grammar/SimpleTextParser';
import { SimpleTextVisitor } from './grammar/SimpleTextVisitor';

class BuildASTVisitor extends AbstractParseTreeVisitor<AstNode> implements SimpleTextVisitor<AstNode> {
    defaultResult() {
        return {
            type: 'default',
            position: {},
        };
    }

    visitParagraph(ctx: ParagraphContext): AstNode {
        return this.processGroup(ctx, 'paragraph');
    }

    visitSentence(ctx: SentenceContext): AstNode {
        return this.processGroup(ctx, 'sentence');
    }

    visitProposition(ctx: PropositionContext): AstNode {
        return this.processGroup(ctx, 'proposition');
    }

    visitExpression(ctx: ExpressionContext): AstNode {
        return this.processGroup(ctx, 'expression');
    }

    processGroup(ctx: ParserRuleContext, type: string) {
        const children = ctx.children?.map((child) => this.visit(child));
        return this.createNode(ctx, type, children ?? []);
    }

    visitWord(ctx: WordContext): AstNode {
        return this.processTerminal(ctx, 'word');
    }

    visitEndPunctuation(ctx: EndPunctuationContext): AstNode {
        return this.processTerminal(ctx, 'punctuation');
    }

    visitMidPunctuation(ctx: MidPunctuationContext): AstNode {
        return this.processTerminal(ctx, 'mid-punctuation');
    }

    processTerminal(ctx: ParserRuleContext, type: string): AstNode {
        return {
            type: type,
            position: {
                start: {
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine + 1,
                },
                end: {
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine + ctx.text.length,
                },
            },
            text: ctx.text,
            children: [],
        };
    }

    createNode(ctx: ParserRuleContext, type: string, children: AstNode[]): AstNode {
        const endToken = ctx.stop ?? ctx.start;
        return {
            type,
            position: {
                start: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine },
                end: { line: endToken.line, column: endToken.charPositionInLine },
            },
            text: ctx.text,
            children,
        };
    }
}

function fixupAst(node: AstNode) {
    // FIXME - deuglify

    node.children?.forEach((child) => fixupAst(child));

    // Force parent end-position to match that of the last child
    const lastChild = node.children ? node.children[node.children.length - 1] : undefined;
    node.position.end = lastChild?.position.end ?? node.position.end;
}

export namespace SimpleText {
    /** Parse a Markdown text and return an AST */
    export function parse(text: string): AstNode {
        // Create the lexer and parser
        const inputStream = new ANTLRInputStream(text);
        const lexer = new SimpleTextLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new SimpleTextParser(tokenStream);

        // let the ANTLR generated parser parse
        const tree = parser.paragraph();

        // construct an AST
        const builder = new BuildASTVisitor();
        const ast = builder.visit(tree);

        fixupAst(ast);

        return ast;
    }
}
