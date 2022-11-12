import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
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
import { SimpleTextLexer } from './grammar/SimpleTextLexer';
import { SimpleTextVisitor } from './grammar/SimpleTextVisitor';

export type Position = {
    line: number;
    column: number;
};

export type Node = {
    type: string;
    start?: Position;
    end?: Position;
    text?: string;
    children?: Node[];
};

class BuildASTVisitor extends AbstractParseTreeVisitor<Node> implements SimpleTextVisitor<Node> {
    defaultResult() {
        return {
            type: 'default',
        };
    }

    visitParagraph(ctx: ParagraphContext): Node {
        return this.processGroup(ctx, 'paragraph');
    }

    visitSentence(ctx: SentenceContext): Node {
        return this.processGroup(ctx, 'sentence');
    }

    visitProposition(ctx: PropositionContext): Node {
        return this.processGroup(ctx, 'proposition');
    }

    visitExpression(ctx: ExpressionContext): Node {
        return this.processGroup(ctx, 'expression');
    }

    processGroup(ctx: ParserRuleContext, type: string) {
        const children = ctx.children?.map((child) => this.visit(child));
        return this.createNode(ctx, type, children ?? []);
    }

    visitWord(ctx: WordContext): Node {
        return this.processTerminal(ctx, 'word');
    }

    visitEndPunctuation(ctx: EndPunctuationContext): Node {
        return this.processTerminal(ctx, 'punctuation');
    }

    visitMidPunctuation(ctx: MidPunctuationContext): Node {
        return this.processTerminal(ctx, 'mid-punctuation');
    }

    processTerminal(ctx: ParserRuleContext, type: string): Node {
        return {
            type: type,
            start: {
                line: ctx.start.line,
                column: ctx.start.charPositionInLine + 1,
            },
            end: {
                line: ctx.start.line,
                column: ctx.start.charPositionInLine + ctx.text.length,
            },
            text: ctx.text,
            children: [],
        };
    }

    createNode(ctx: ParserRuleContext, type: string, children: Node[]) {
        const endToken = ctx.stop ?? ctx.start;
        return {
            type,
            start: { line: ctx.start.line, column: 1 + ctx.start.charPositionInLine },
            end: { line: endToken.line, column: endToken.charPositionInLine },
            text: ctx.text,
            children,
        };
    }
}

function fixupAst(node: Node) {
    // FIXME - deuglify
    node.children?.forEach((child) => fixupAst(child));
    const lastChild = node.children ? node.children[node.children.length - 1] : undefined;
    node.end = lastChild?.end ?? node.end;
}

export namespace SimpleText {
    /** Parse a Markdown text and return an AST */
    export function parse(text: string): Node {
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
