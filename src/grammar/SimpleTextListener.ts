// Generated from SimpleText.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParagraphContext } from "./SimpleTextParser";
import { SentenceContext } from "./SimpleTextParser";
import { PropositionContext } from "./SimpleTextParser";
import { MidPunctuationContext } from "./SimpleTextParser";
import { EndPunctuationContext } from "./SimpleTextParser";
import { WordContext } from "./SimpleTextParser";
import { ExpressionContext } from "./SimpleTextParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleTextParser`.
 */
export interface SimpleTextListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SimpleTextParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterParagraph?: (ctx: ParagraphContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitParagraph?: (ctx: ParagraphContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.sentence`.
	 * @param ctx the parse tree
	 */
	enterSentence?: (ctx: SentenceContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.sentence`.
	 * @param ctx the parse tree
	 */
	exitSentence?: (ctx: SentenceContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.proposition`.
	 * @param ctx the parse tree
	 */
	enterProposition?: (ctx: PropositionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.proposition`.
	 * @param ctx the parse tree
	 */
	exitProposition?: (ctx: PropositionContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.midPunctuation`.
	 * @param ctx the parse tree
	 */
	enterMidPunctuation?: (ctx: MidPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.midPunctuation`.
	 * @param ctx the parse tree
	 */
	exitMidPunctuation?: (ctx: MidPunctuationContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.endPunctuation`.
	 * @param ctx the parse tree
	 */
	enterEndPunctuation?: (ctx: EndPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.endPunctuation`.
	 * @param ctx the parse tree
	 */
	exitEndPunctuation?: (ctx: EndPunctuationContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

