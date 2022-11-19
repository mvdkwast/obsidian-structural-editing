// Generated from SimpleTextParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParagraphContext } from "./SimpleTextParser";
import { BlockContext } from "./SimpleTextParser";
import { SentenceContext } from "./SimpleTextParser";
import { SentenceWithPunctuationContext } from "./SimpleTextParser";
import { SentenceWithOptionalPunctuationContext } from "./SimpleTextParser";
import { PropositionContext } from "./SimpleTextParser";
import { PropositionWithPunctuationContext } from "./SimpleTextParser";
import { PropositionWithOptionalPunctuationContext } from "./SimpleTextParser";
import { ExpressionContext } from "./SimpleTextParser";
import { WordContext } from "./SimpleTextParser";
import { MathContext } from "./SimpleTextParser";
import { EndPunctuationContext } from "./SimpleTextParser";
import { MidPunctuationContext } from "./SimpleTextParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleTextParser`.
 */
export interface SimpleTextParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `SimpleTextParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

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
	 * Enter a parse tree produced by `SimpleTextParser.sentenceWithPunctuation`.
	 * @param ctx the parse tree
	 */
	enterSentenceWithPunctuation?: (ctx: SentenceWithPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.sentenceWithPunctuation`.
	 * @param ctx the parse tree
	 */
	exitSentenceWithPunctuation?: (ctx: SentenceWithPunctuationContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.sentenceWithOptionalPunctuation`.
	 * @param ctx the parse tree
	 */
	enterSentenceWithOptionalPunctuation?: (ctx: SentenceWithOptionalPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.sentenceWithOptionalPunctuation`.
	 * @param ctx the parse tree
	 */
	exitSentenceWithOptionalPunctuation?: (ctx: SentenceWithOptionalPunctuationContext) => void;

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
	 * Enter a parse tree produced by `SimpleTextParser.propositionWithPunctuation`.
	 * @param ctx the parse tree
	 */
	enterPropositionWithPunctuation?: (ctx: PropositionWithPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.propositionWithPunctuation`.
	 * @param ctx the parse tree
	 */
	exitPropositionWithPunctuation?: (ctx: PropositionWithPunctuationContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleTextParser.propositionWithOptionalPunctuation`.
	 * @param ctx the parse tree
	 */
	enterPropositionWithOptionalPunctuation?: (ctx: PropositionWithOptionalPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.propositionWithOptionalPunctuation`.
	 * @param ctx the parse tree
	 */
	exitPropositionWithOptionalPunctuation?: (ctx: PropositionWithOptionalPunctuationContext) => void;

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
	 * Enter a parse tree produced by `SimpleTextParser.math`.
	 * @param ctx the parse tree
	 */
	enterMath?: (ctx: MathContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.math`.
	 * @param ctx the parse tree
	 */
	exitMath?: (ctx: MathContext) => void;

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
	 * Enter a parse tree produced by `SimpleTextParser.midPunctuation`.
	 * @param ctx the parse tree
	 */
	enterMidPunctuation?: (ctx: MidPunctuationContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleTextParser.midPunctuation`.
	 * @param ctx the parse tree
	 */
	exitMidPunctuation?: (ctx: MidPunctuationContext) => void;
}

