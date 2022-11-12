// Generated from SimpleText.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParagraphContext } from "./SimpleTextParser";
import { SentenceContext } from "./SimpleTextParser";
import { PropositionContext } from "./SimpleTextParser";
import { MidPunctuationContext } from "./SimpleTextParser";
import { EndPunctuationContext } from "./SimpleTextParser";
import { WordContext } from "./SimpleTextParser";
import { ExpressionContext } from "./SimpleTextParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleTextParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimpleTextVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SimpleTextParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParagraph?: (ctx: ParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleTextParser.sentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence?: (ctx: SentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleTextParser.proposition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProposition?: (ctx: PropositionContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleTextParser.midPunctuation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMidPunctuation?: (ctx: MidPunctuationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleTextParser.endPunctuation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndPunctuation?: (ctx: EndPunctuationContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleTextParser.word`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWord?: (ctx: WordContext) => Result;

	/**
	 * Visit a parse tree produced by `SimpleTextParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

