import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AstNode } from './Ast';
import { SimpleTextLex } from './grammar/SimpleTextLex';
import {
    BlockContext,
    EndPunctuationContext,
    ExpressionContext,
    MathContext,
    MidPunctuationContext,
    ParagraphContext,
    PropositionContext,
    PropositionWithOptionalPunctuationContext,
    PropositionWithPunctuationContext,
    SentenceContext,
    SentenceWithOptionalPunctuationContext,
    SentenceWithPunctuationContext,
    SimpleTextParser,
    WordContext,
} from './grammar/SimpleTextParser';
import { SimpleTextParserVisitor } from './grammar/SimpleTextParserVisitor';

class BuildASTVisitor extends AbstractParseTreeVisitor<AstNode> implements SimpleTextParserVisitor<AstNode> {
    defaultResult() {
        return {
            type: 'default',
            position: {},
        };
    }

    visitParagraph(ctx: ParagraphContext): AstNode {
        return this.processGroup(ctx, 'paragraph');
    }

    visitBlock(ctx: BlockContext): AstNode {
        return this.processGroup(ctx, 'block');
    }

    visitSentence(ctx: SentenceContext): AstNode {
        return this.processGroup(ctx, 'sentence');
    }

    visitSentenceWithOptionalPunctuation(ctx: SentenceWithOptionalPunctuationContext): AstNode {
        return this.processGroup(ctx, 'sentence-and-punctuation');
    }

    visitSentenceWithPunctuation(ctx: SentenceWithPunctuationContext): AstNode {
        return this.processGroup(ctx, 'sentence-and-punctuation');
    }

    visitProposition(ctx: PropositionContext): AstNode {
        return this.processGroup(ctx, 'proposition');
    }

    visitPropositionWithOptionalPunctuation(ctx: PropositionWithOptionalPunctuationContext): AstNode {
        return this.processGroup(ctx, 'proposition-and-punctuation');
    }

    visitPropositionWithPunctuation(ctx: PropositionWithPunctuationContext): AstNode {
        return this.processGroup(ctx, 'proposition-and-punctuation');
    }

    visitExpression(ctx: ExpressionContext): AstNode {
        return this.processGroup(ctx, 'expression');
    }

    visitMath(ctx: MathContext): AstNode {
        const body = ctx.text.slice(1, ctx.text.length - 1);

        return this.createNode(ctx, 'math-container', [
            {
                type: 'terminal',
                position: {
                    start: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine },
                    end: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine },
                },
                text: '$',
                children: [],
            },
            {
                type: 'math',
                position: {
                    start: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine + 1 },
                    end: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine + body.length },
                },
                text: body,
                children: [],
            },
            {
                type: 'terminal',
                position: {
                    start: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine + body.length + 1 },
                    end: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine + body.length + 1 },
                },
                text: '$',
                children: [],
            },

        ]);
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

    visitTerminal(node: TerminalNode): AstNode {
        return {
            type: 'terminal',
            position: {
                start: {
                    line: node.symbol.line,
                    column: node.symbol.charPositionInLine + 1,
                },
                end: {
                    line: node.symbol.line,
                    column: node.symbol.charPositionInLine + node.text.length,
                },
            },
            text: node.text,
            children: [],
        };
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

function recursivelyFixNodeLength(node: AstNode) {
    node.children?.forEach((child) => recursivelyFixNodeLength(child));

    // Force parent end-position to match that of the last child
    const lastChild = node.children ? node.children[node.children.length - 1] : undefined;
    node.position.end = lastChild?.position.end ?? node.position.end;
}

export namespace SimpleTextAst {
    /** Parse a Markdown text and return an AST */
    export function parse(text: string): AstNode {
        // Create the lexer and parser
        const inputStream = new ANTLRInputStream(text);
        const lexer = new SimpleTextLex(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new SimpleTextParser(tokenStream);

        // let the ANTLR generated parser parse
        const tree = parser.paragraph();

        // construct an AST
        const builder = new BuildASTVisitor();
        const ast = builder.visit(tree);

        // remove EOF
        if (ast.children) {
            const lastChild = ast.children[ast.children?.length - 1];
            if (lastChild && lastChild.type === 'terminal' && lastChild.text === '<EOF>') {
                ast.children.length = ast.children.length - 1;
            }
        }

        recursivelyFixNodeLength(ast);

        return ast;
    }
}
