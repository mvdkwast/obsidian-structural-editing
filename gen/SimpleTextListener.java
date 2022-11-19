// Generated from //wsl$/Ubuntu/home/stilgar/prj/obsidian-grow\SimpleText.g4 by ANTLR 4.10.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleText}.
 */
public interface SimpleTextListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleText#paragraph}.
	 * @param ctx the parse tree
	 */
	void enterParagraph(SimpleText.ParagraphContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#paragraph}.
	 * @param ctx the parse tree
	 */
	void exitParagraph(SimpleText.ParagraphContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(SimpleText.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(SimpleText.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#math}.
	 * @param ctx the parse tree
	 */
	void enterMath(SimpleText.MathContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#math}.
	 * @param ctx the parse tree
	 */
	void exitMath(SimpleText.MathContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#sentence}.
	 * @param ctx the parse tree
	 */
	void enterSentence(SimpleText.SentenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#sentence}.
	 * @param ctx the parse tree
	 */
	void exitSentence(SimpleText.SentenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#sentenceWithPunctuation}.
	 * @param ctx the parse tree
	 */
	void enterSentenceWithPunctuation(SimpleText.SentenceWithPunctuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#sentenceWithPunctuation}.
	 * @param ctx the parse tree
	 */
	void exitSentenceWithPunctuation(SimpleText.SentenceWithPunctuationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#sentenceWithOptionalPunctuation}.
	 * @param ctx the parse tree
	 */
	void enterSentenceWithOptionalPunctuation(SimpleText.SentenceWithOptionalPunctuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#sentenceWithOptionalPunctuation}.
	 * @param ctx the parse tree
	 */
	void exitSentenceWithOptionalPunctuation(SimpleText.SentenceWithOptionalPunctuationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#proposition}.
	 * @param ctx the parse tree
	 */
	void enterProposition(SimpleText.PropositionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#proposition}.
	 * @param ctx the parse tree
	 */
	void exitProposition(SimpleText.PropositionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#propositionWithPunctuation}.
	 * @param ctx the parse tree
	 */
	void enterPropositionWithPunctuation(SimpleText.PropositionWithPunctuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#propositionWithPunctuation}.
	 * @param ctx the parse tree
	 */
	void exitPropositionWithPunctuation(SimpleText.PropositionWithPunctuationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#propositionWithOptionalPunctuation}.
	 * @param ctx the parse tree
	 */
	void enterPropositionWithOptionalPunctuation(SimpleText.PropositionWithOptionalPunctuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#propositionWithOptionalPunctuation}.
	 * @param ctx the parse tree
	 */
	void exitPropositionWithOptionalPunctuation(SimpleText.PropositionWithOptionalPunctuationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(SimpleText.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(SimpleText.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#word}.
	 * @param ctx the parse tree
	 */
	void enterWord(SimpleText.WordContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#word}.
	 * @param ctx the parse tree
	 */
	void exitWord(SimpleText.WordContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#endPunctuation}.
	 * @param ctx the parse tree
	 */
	void enterEndPunctuation(SimpleText.EndPunctuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#endPunctuation}.
	 * @param ctx the parse tree
	 */
	void exitEndPunctuation(SimpleText.EndPunctuationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleText#midPunctuation}.
	 * @param ctx the parse tree
	 */
	void enterMidPunctuation(SimpleText.MidPunctuationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleText#midPunctuation}.
	 * @param ctx the parse tree
	 */
	void exitMidPunctuation(SimpleText.MidPunctuationContext ctx);
}