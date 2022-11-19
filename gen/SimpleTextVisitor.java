// Generated from //wsl$/Ubuntu/home/stilgar/prj/obsidian-grow\SimpleText.g4 by ANTLR 4.10.1
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link SimpleText}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface SimpleTextVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link SimpleText#paragraph}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParagraph(SimpleText.ParagraphContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(SimpleText.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#math}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMath(SimpleText.MathContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSentence(SimpleText.SentenceContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#sentenceWithPunctuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSentenceWithPunctuation(SimpleText.SentenceWithPunctuationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#sentenceWithOptionalPunctuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSentenceWithOptionalPunctuation(SimpleText.SentenceWithOptionalPunctuationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#proposition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProposition(SimpleText.PropositionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#propositionWithPunctuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropositionWithPunctuation(SimpleText.PropositionWithPunctuationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#propositionWithOptionalPunctuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropositionWithOptionalPunctuation(SimpleText.PropositionWithOptionalPunctuationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(SimpleText.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#word}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWord(SimpleText.WordContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#endPunctuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEndPunctuation(SimpleText.EndPunctuationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleText#midPunctuation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMidPunctuation(SimpleText.MidPunctuationContext ctx);
}