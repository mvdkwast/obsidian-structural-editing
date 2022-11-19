// Generated from //wsl$/Ubuntu/home/stilgar/prj/obsidian-grow\SimpleText.g4 by ANTLR 4.10.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SimpleText extends Parser {
	static { RuntimeMetaData.checkVersion("4.10.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DOLLAR=1, Math=2, MathEnd=3, QUOT=4, DQUOT=5, BACKTICK=6, LPAREN=7, RPAREN=8, 
		LACCOL=9, RACCOL=10, LBRACK=11, RBRACK=12, LT=13, Url=14, GT=15, Word=16, 
		Smiley=17, DOT=18, QMARK=19, EMARK=20, ELLIPS=21, COLON=22, COMMA=23, 
		SEMICOLON=24;
	public static final int
		RULE_paragraph = 0, RULE_block = 1, RULE_math = 2, RULE_sentence = 3, 
		RULE_sentenceWithPunctuation = 4, RULE_sentenceWithOptionalPunctuation = 5, 
		RULE_proposition = 6, RULE_propositionWithPunctuation = 7, RULE_propositionWithOptionalPunctuation = 8, 
		RULE_expression = 9, RULE_word = 10, RULE_endPunctuation = 11, RULE_midPunctuation = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"paragraph", "block", "math", "sentence", "sentenceWithPunctuation", 
			"sentenceWithOptionalPunctuation", "proposition", "propositionWithPunctuation", 
			"propositionWithOptionalPunctuation", "expression", "word", "endPunctuation", 
			"midPunctuation"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DOLLAR", "Math", "MathEnd", "QUOT", "DQUOT", "BACKTICK", "LPAREN", 
			"RPAREN", "LACCOL", "RACCOL", "LBRACK", "RBRACK", "LT", "Url", "GT", 
			"Word", "Smiley", "DOT", "QMARK", "EMARK", "ELLIPS", "COLON", "COMMA", 
			"SEMICOLON"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SimpleText.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SimpleText(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ParagraphContext extends ParserRuleContext {
		public SentenceWithOptionalPunctuationContext sentenceWithOptionalPunctuation() {
			return getRuleContext(SentenceWithOptionalPunctuationContext.class,0);
		}
		public TerminalNode EOF() { return getToken(SimpleText.EOF, 0); }
		public List<SentenceWithPunctuationContext> sentenceWithPunctuation() {
			return getRuleContexts(SentenceWithPunctuationContext.class);
		}
		public SentenceWithPunctuationContext sentenceWithPunctuation(int i) {
			return getRuleContext(SentenceWithPunctuationContext.class,i);
		}
		public ParagraphContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraph; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterParagraph(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitParagraph(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitParagraph(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParagraphContext paragraph() throws RecognitionException {
		ParagraphContext _localctx = new ParagraphContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_paragraph);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(26);
					sentenceWithPunctuation();
					}
					} 
				}
				setState(31);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(32);
			sentenceWithOptionalPunctuation();
			setState(33);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public SentenceWithOptionalPunctuationContext sentenceWithOptionalPunctuation() {
			return getRuleContext(SentenceWithOptionalPunctuationContext.class,0);
		}
		public List<SentenceWithPunctuationContext> sentenceWithPunctuation() {
			return getRuleContexts(SentenceWithPunctuationContext.class);
		}
		public SentenceWithPunctuationContext sentenceWithPunctuation(int i) {
			return getRuleContext(SentenceWithPunctuationContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(35);
					sentenceWithPunctuation();
					}
					} 
				}
				setState(40);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			setState(41);
			sentenceWithOptionalPunctuation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathContext extends ParserRuleContext {
		public List<TerminalNode> DOLLAR() { return getTokens(SimpleText.DOLLAR); }
		public TerminalNode DOLLAR(int i) {
			return getToken(SimpleText.DOLLAR, i);
		}
		public TerminalNode MathEnd() { return getToken(SimpleText.MathEnd, 0); }
		public List<TerminalNode> Math() { return getTokens(SimpleText.Math); }
		public TerminalNode Math(int i) {
			return getToken(SimpleText.Math, i);
		}
		public MathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterMath(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitMath(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitMath(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MathContext math() throws RecognitionException {
		MathContext _localctx = new MathContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_math);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(DOLLAR);
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Math) {
				{
				{
				setState(44);
				match(Math);
				}
				}
				setState(49);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(50);
			match(MathEnd);
			setState(51);
			match(DOLLAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SentenceContext extends ParserRuleContext {
		public PropositionWithOptionalPunctuationContext propositionWithOptionalPunctuation() {
			return getRuleContext(PropositionWithOptionalPunctuationContext.class,0);
		}
		public List<PropositionWithPunctuationContext> propositionWithPunctuation() {
			return getRuleContexts(PropositionWithPunctuationContext.class);
		}
		public PropositionWithPunctuationContext propositionWithPunctuation(int i) {
			return getRuleContext(PropositionWithPunctuationContext.class,i);
		}
		public SentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterSentence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitSentence(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitSentence(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SentenceContext sentence() throws RecognitionException {
		SentenceContext _localctx = new SentenceContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sentence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(53);
					propositionWithPunctuation();
					}
					} 
				}
				setState(58);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(59);
			propositionWithOptionalPunctuation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SentenceWithPunctuationContext extends ParserRuleContext {
		public SentenceContext sentence() {
			return getRuleContext(SentenceContext.class,0);
		}
		public EndPunctuationContext endPunctuation() {
			return getRuleContext(EndPunctuationContext.class,0);
		}
		public SentenceWithPunctuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentenceWithPunctuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterSentenceWithPunctuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitSentenceWithPunctuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitSentenceWithPunctuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SentenceWithPunctuationContext sentenceWithPunctuation() throws RecognitionException {
		SentenceWithPunctuationContext _localctx = new SentenceWithPunctuationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sentenceWithPunctuation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			sentence();
			setState(62);
			endPunctuation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SentenceWithOptionalPunctuationContext extends ParserRuleContext {
		public SentenceContext sentence() {
			return getRuleContext(SentenceContext.class,0);
		}
		public EndPunctuationContext endPunctuation() {
			return getRuleContext(EndPunctuationContext.class,0);
		}
		public SentenceWithOptionalPunctuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentenceWithOptionalPunctuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterSentenceWithOptionalPunctuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitSentenceWithOptionalPunctuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitSentenceWithOptionalPunctuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SentenceWithOptionalPunctuationContext sentenceWithOptionalPunctuation() throws RecognitionException {
		SentenceWithOptionalPunctuationContext _localctx = new SentenceWithOptionalPunctuationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sentenceWithOptionalPunctuation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			sentence();
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DOT) | (1L << QMARK) | (1L << EMARK) | (1L << ELLIPS))) != 0)) {
				{
				setState(65);
				endPunctuation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropositionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PropositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_proposition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterProposition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitProposition(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitProposition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropositionContext proposition() throws RecognitionException {
		PropositionContext _localctx = new PropositionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_proposition);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(69); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(68);
					expression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(71); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropositionWithPunctuationContext extends ParserRuleContext {
		public PropositionContext proposition() {
			return getRuleContext(PropositionContext.class,0);
		}
		public MidPunctuationContext midPunctuation() {
			return getRuleContext(MidPunctuationContext.class,0);
		}
		public PropositionWithPunctuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propositionWithPunctuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterPropositionWithPunctuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitPropositionWithPunctuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitPropositionWithPunctuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropositionWithPunctuationContext propositionWithPunctuation() throws RecognitionException {
		PropositionWithPunctuationContext _localctx = new PropositionWithPunctuationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_propositionWithPunctuation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			proposition();
			setState(74);
			midPunctuation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropositionWithOptionalPunctuationContext extends ParserRuleContext {
		public PropositionContext proposition() {
			return getRuleContext(PropositionContext.class,0);
		}
		public MidPunctuationContext midPunctuation() {
			return getRuleContext(MidPunctuationContext.class,0);
		}
		public PropositionWithOptionalPunctuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propositionWithOptionalPunctuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterPropositionWithOptionalPunctuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitPropositionWithOptionalPunctuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitPropositionWithOptionalPunctuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropositionWithOptionalPunctuationContext propositionWithOptionalPunctuation() throws RecognitionException {
		PropositionWithOptionalPunctuationContext _localctx = new PropositionWithOptionalPunctuationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_propositionWithOptionalPunctuation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			proposition();
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << COMMA) | (1L << SEMICOLON))) != 0)) {
				{
				setState(77);
				midPunctuation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public List<TerminalNode> QUOT() { return getTokens(SimpleText.QUOT); }
		public TerminalNode QUOT(int i) {
			return getToken(SimpleText.QUOT, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<TerminalNode> DQUOT() { return getTokens(SimpleText.DQUOT); }
		public TerminalNode DQUOT(int i) {
			return getToken(SimpleText.DQUOT, i);
		}
		public List<TerminalNode> BACKTICK() { return getTokens(SimpleText.BACKTICK); }
		public TerminalNode BACKTICK(int i) {
			return getToken(SimpleText.BACKTICK, i);
		}
		public TerminalNode LPAREN() { return getToken(SimpleText.LPAREN, 0); }
		public List<TerminalNode> RPAREN() { return getTokens(SimpleText.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(SimpleText.RPAREN, i);
		}
		public TerminalNode LACCOL() { return getToken(SimpleText.LACCOL, 0); }
		public List<TerminalNode> RACCOL() { return getTokens(SimpleText.RACCOL); }
		public TerminalNode RACCOL(int i) {
			return getToken(SimpleText.RACCOL, i);
		}
		public TerminalNode LBRACK() { return getToken(SimpleText.LBRACK, 0); }
		public List<TerminalNode> RBRACK() { return getTokens(SimpleText.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(SimpleText.RBRACK, i);
		}
		public MathContext math() {
			return getRuleContext(MathContext.class,0);
		}
		public List<WordContext> word() {
			return getRuleContexts(WordContext.class);
		}
		public WordContext word(int i) {
			return getRuleContext(WordContext.class,i);
		}
		public TerminalNode LT() { return getToken(SimpleText.LT, 0); }
		public TerminalNode Url() { return getToken(SimpleText.Url, 0); }
		public TerminalNode GT() { return getToken(SimpleText.GT, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expression);
		int _la;
		try {
			int _alt;
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				match(QUOT);
				setState(82);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(81);
					block();
					}
					break;
				}
				setState(84);
				match(QUOT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(85);
				match(DQUOT);
				setState(87);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(86);
					block();
					}
					break;
				}
				setState(89);
				match(DQUOT);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(90);
				match(BACKTICK);
				setState(91);
				block();
				setState(92);
				match(BACKTICK);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(94);
				match(LPAREN);
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DOLLAR) | (1L << QUOT) | (1L << DQUOT) | (1L << BACKTICK) | (1L << LPAREN) | (1L << LACCOL) | (1L << LBRACK) | (1L << LT) | (1L << Url) | (1L << Word) | (1L << Smiley))) != 0)) {
					{
					setState(95);
					block();
					}
				}

				setState(98);
				match(RPAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(99);
				match(LACCOL);
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DOLLAR) | (1L << QUOT) | (1L << DQUOT) | (1L << BACKTICK) | (1L << LPAREN) | (1L << LACCOL) | (1L << LBRACK) | (1L << LT) | (1L << Url) | (1L << Word) | (1L << Smiley))) != 0)) {
					{
					setState(100);
					block();
					}
				}

				setState(103);
				match(RACCOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(104);
				match(LBRACK);
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DOLLAR) | (1L << QUOT) | (1L << DQUOT) | (1L << BACKTICK) | (1L << LPAREN) | (1L << LACCOL) | (1L << LBRACK) | (1L << LT) | (1L << Url) | (1L << Word) | (1L << Smiley))) != 0)) {
					{
					setState(105);
					block();
					}
				}

				setState(108);
				match(RBRACK);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(109);
				math();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(111); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(110);
						word();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(113); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(115);
				match(LT);
				setState(116);
				match(Url);
				setState(117);
				match(GT);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(118);
				match(QUOT);
				setState(122);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(119);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==QUOT) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(124);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				}
				setState(125);
				match(QUOT);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(126);
				match(DQUOT);
				setState(130);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(127);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==DQUOT) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(132);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				setState(133);
				match(DQUOT);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(134);
				match(BACKTICK);
				setState(138);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(135);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==BACKTICK) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(140);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				}
				setState(141);
				match(BACKTICK);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(142);
				match(LPAREN);
				setState(146);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(143);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==RPAREN) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(148);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				}
				setState(149);
				match(RPAREN);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(150);
				match(LBRACK);
				setState(154);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(151);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==RBRACK) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(156);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				}
				setState(157);
				match(RBRACK);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(158);
				match(LACCOL);
				setState(162);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(159);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==RACCOL) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(164);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				}
				setState(165);
				match(RACCOL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WordContext extends ParserRuleContext {
		public TerminalNode Word() { return getToken(SimpleText.Word, 0); }
		public TerminalNode Smiley() { return getToken(SimpleText.Smiley, 0); }
		public TerminalNode Url() { return getToken(SimpleText.Url, 0); }
		public WordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_word; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterWord(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitWord(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitWord(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WordContext word() throws RecognitionException {
		WordContext _localctx = new WordContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_word);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Url) | (1L << Word) | (1L << Smiley))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndPunctuationContext extends ParserRuleContext {
		public TerminalNode DOT() { return getToken(SimpleText.DOT, 0); }
		public TerminalNode QMARK() { return getToken(SimpleText.QMARK, 0); }
		public TerminalNode EMARK() { return getToken(SimpleText.EMARK, 0); }
		public TerminalNode ELLIPS() { return getToken(SimpleText.ELLIPS, 0); }
		public EndPunctuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endPunctuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterEndPunctuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitEndPunctuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitEndPunctuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EndPunctuationContext endPunctuation() throws RecognitionException {
		EndPunctuationContext _localctx = new EndPunctuationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_endPunctuation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DOT) | (1L << QMARK) | (1L << EMARK) | (1L << ELLIPS))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MidPunctuationContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(SimpleText.COLON, 0); }
		public TerminalNode COMMA() { return getToken(SimpleText.COMMA, 0); }
		public TerminalNode SEMICOLON() { return getToken(SimpleText.SEMICOLON, 0); }
		public MidPunctuationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_midPunctuation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).enterMidPunctuation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof SimpleTextListener ) ((SimpleTextListener)listener).exitMidPunctuation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SimpleTextVisitor ) return ((SimpleTextVisitor<? extends T>)visitor).visitMidPunctuation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MidPunctuationContext midPunctuation() throws RecognitionException {
		MidPunctuationContext _localctx = new MidPunctuationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_midPunctuation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << COMMA) | (1L << SEMICOLON))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018\u00af\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0001\u0000\u0005\u0000\u001c\b\u0000\n\u0000\f\u0000"+
		"\u001f\t\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0005\u0001"+
		"%\b\u0001\n\u0001\f\u0001(\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0005\u0002.\b\u0002\n\u0002\f\u00021\t\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0005\u00037\b\u0003\n\u0003\f\u0003"+
		":\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0003\u0005C\b\u0005\u0001\u0006\u0004\u0006"+
		"F\b\u0006\u000b\u0006\f\u0006G\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0003\bO\b\b\u0001\t\u0001\t\u0003\tS\b\t\u0001\t\u0001\t\u0001"+
		"\t\u0003\tX\b\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0003\ta\b\t\u0001\t\u0001\t\u0001\t\u0003\tf\b\t\u0001\t\u0001\t\u0001"+
		"\t\u0003\tk\b\t\u0001\t\u0001\t\u0001\t\u0004\tp\b\t\u000b\t\f\tq\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\ty\b\t\n\t\f\t|\t\t\u0001\t\u0001"+
		"\t\u0001\t\u0005\t\u0081\b\t\n\t\f\t\u0084\t\t\u0001\t\u0001\t\u0001\t"+
		"\u0005\t\u0089\b\t\n\t\f\t\u008c\t\t\u0001\t\u0001\t\u0001\t\u0005\t\u0091"+
		"\b\t\n\t\f\t\u0094\t\t\u0001\t\u0001\t\u0001\t\u0005\t\u0099\b\t\n\t\f"+
		"\t\u009c\t\t\u0001\t\u0001\t\u0001\t\u0005\t\u00a1\b\t\n\t\f\t\u00a4\t"+
		"\t\u0001\t\u0003\t\u00a7\b\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\n\u001d&8Gz\u0082\u008a\u0092\u009a\u00a2\u0000\r\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0000\t\u0001"+
		"\u0000\u0004\u0004\u0001\u0000\u0005\u0005\u0001\u0000\u0006\u0006\u0001"+
		"\u0000\b\b\u0001\u0000\f\f\u0001\u0000\n\n\u0002\u0000\u000e\u000e\u0010"+
		"\u0011\u0001\u0000\u0012\u0015\u0001\u0000\u0016\u0018\u00c2\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0002&\u0001\u0000\u0000\u0000\u0004+\u0001\u0000"+
		"\u0000\u0000\u00068\u0001\u0000\u0000\u0000\b=\u0001\u0000\u0000\u0000"+
		"\n@\u0001\u0000\u0000\u0000\fE\u0001\u0000\u0000\u0000\u000eI\u0001\u0000"+
		"\u0000\u0000\u0010L\u0001\u0000\u0000\u0000\u0012\u00a6\u0001\u0000\u0000"+
		"\u0000\u0014\u00a8\u0001\u0000\u0000\u0000\u0016\u00aa\u0001\u0000\u0000"+
		"\u0000\u0018\u00ac\u0001\u0000\u0000\u0000\u001a\u001c\u0003\b\u0004\u0000"+
		"\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001f\u0001\u0000\u0000\u0000"+
		"\u001d\u001e\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000"+
		"\u001e \u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000 !"+
		"\u0003\n\u0005\u0000!\"\u0005\u0000\u0000\u0001\"\u0001\u0001\u0000\u0000"+
		"\u0000#%\u0003\b\u0004\u0000$#\u0001\u0000\u0000\u0000%(\u0001\u0000\u0000"+
		"\u0000&\'\u0001\u0000\u0000\u0000&$\u0001\u0000\u0000\u0000\')\u0001\u0000"+
		"\u0000\u0000(&\u0001\u0000\u0000\u0000)*\u0003\n\u0005\u0000*\u0003\u0001"+
		"\u0000\u0000\u0000+/\u0005\u0001\u0000\u0000,.\u0005\u0002\u0000\u0000"+
		"-,\u0001\u0000\u0000\u0000.1\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000"+
		"\u0000/0\u0001\u0000\u0000\u000002\u0001\u0000\u0000\u00001/\u0001\u0000"+
		"\u0000\u000023\u0005\u0003\u0000\u000034\u0005\u0001\u0000\u00004\u0005"+
		"\u0001\u0000\u0000\u000057\u0003\u000e\u0007\u000065\u0001\u0000\u0000"+
		"\u00007:\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u000086\u0001\u0000"+
		"\u0000\u00009;\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000;<\u0003"+
		"\u0010\b\u0000<\u0007\u0001\u0000\u0000\u0000=>\u0003\u0006\u0003\u0000"+
		">?\u0003\u0016\u000b\u0000?\t\u0001\u0000\u0000\u0000@B\u0003\u0006\u0003"+
		"\u0000AC\u0003\u0016\u000b\u0000BA\u0001\u0000\u0000\u0000BC\u0001\u0000"+
		"\u0000\u0000C\u000b\u0001\u0000\u0000\u0000DF\u0003\u0012\t\u0000ED\u0001"+
		"\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"GE\u0001\u0000\u0000\u0000H\r\u0001\u0000\u0000\u0000IJ\u0003\f\u0006"+
		"\u0000JK\u0003\u0018\f\u0000K\u000f\u0001\u0000\u0000\u0000LN\u0003\f"+
		"\u0006\u0000MO\u0003\u0018\f\u0000NM\u0001\u0000\u0000\u0000NO\u0001\u0000"+
		"\u0000\u0000O\u0011\u0001\u0000\u0000\u0000PR\u0005\u0004\u0000\u0000"+
		"QS\u0003\u0002\u0001\u0000RQ\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000"+
		"\u0000ST\u0001\u0000\u0000\u0000T\u00a7\u0005\u0004\u0000\u0000UW\u0005"+
		"\u0005\u0000\u0000VX\u0003\u0002\u0001\u0000WV\u0001\u0000\u0000\u0000"+
		"WX\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000Y\u00a7\u0005\u0005"+
		"\u0000\u0000Z[\u0005\u0006\u0000\u0000[\\\u0003\u0002\u0001\u0000\\]\u0005"+
		"\u0006\u0000\u0000]\u00a7\u0001\u0000\u0000\u0000^`\u0005\u0007\u0000"+
		"\u0000_a\u0003\u0002\u0001\u0000`_\u0001\u0000\u0000\u0000`a\u0001\u0000"+
		"\u0000\u0000ab\u0001\u0000\u0000\u0000b\u00a7\u0005\b\u0000\u0000ce\u0005"+
		"\t\u0000\u0000df\u0003\u0002\u0001\u0000ed\u0001\u0000\u0000\u0000ef\u0001"+
		"\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000g\u00a7\u0005\n\u0000\u0000"+
		"hj\u0005\u000b\u0000\u0000ik\u0003\u0002\u0001\u0000ji\u0001\u0000\u0000"+
		"\u0000jk\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000l\u00a7\u0005"+
		"\f\u0000\u0000m\u00a7\u0003\u0004\u0002\u0000np\u0003\u0014\n\u0000on"+
		"\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000"+
		"\u0000qr\u0001\u0000\u0000\u0000r\u00a7\u0001\u0000\u0000\u0000st\u0005"+
		"\r\u0000\u0000tu\u0005\u000e\u0000\u0000u\u00a7\u0005\u000f\u0000\u0000"+
		"vz\u0005\u0004\u0000\u0000wy\b\u0000\u0000\u0000xw\u0001\u0000\u0000\u0000"+
		"y|\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000"+
		"\u0000{}\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000}\u00a7\u0005"+
		"\u0004\u0000\u0000~\u0082\u0005\u0005\u0000\u0000\u007f\u0081\b\u0001"+
		"\u0000\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081\u0084\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000"+
		"\u0000\u0000\u0083\u0085\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000"+
		"\u0000\u0000\u0085\u00a7\u0005\u0005\u0000\u0000\u0086\u008a\u0005\u0006"+
		"\u0000\u0000\u0087\u0089\b\u0002\u0000\u0000\u0088\u0087\u0001\u0000\u0000"+
		"\u0000\u0089\u008c\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000"+
		"\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008b\u008d\u0001\u0000\u0000"+
		"\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008d\u00a7\u0005\u0006\u0000"+
		"\u0000\u008e\u0092\u0005\u0007\u0000\u0000\u008f\u0091\b\u0003\u0000\u0000"+
		"\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000\u0000\u0000"+
		"\u0092\u0093\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000"+
		"\u0093\u0095\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000"+
		"\u0095\u00a7\u0005\b\u0000\u0000\u0096\u009a\u0005\u000b\u0000\u0000\u0097"+
		"\u0099\b\u0004\u0000\u0000\u0098\u0097\u0001\u0000\u0000\u0000\u0099\u009c"+
		"\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009a\u0098"+
		"\u0001\u0000\u0000\u0000\u009b\u009d\u0001\u0000\u0000\u0000\u009c\u009a"+
		"\u0001\u0000\u0000\u0000\u009d\u00a7\u0005\f\u0000\u0000\u009e\u00a2\u0005"+
		"\t\u0000\u0000\u009f\u00a1\b\u0005\u0000\u0000\u00a0\u009f\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a3\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a5\u00a7\u0005\n\u0000"+
		"\u0000\u00a6P\u0001\u0000\u0000\u0000\u00a6U\u0001\u0000\u0000\u0000\u00a6"+
		"Z\u0001\u0000\u0000\u0000\u00a6^\u0001\u0000\u0000\u0000\u00a6c\u0001"+
		"\u0000\u0000\u0000\u00a6h\u0001\u0000\u0000\u0000\u00a6m\u0001\u0000\u0000"+
		"\u0000\u00a6o\u0001\u0000\u0000\u0000\u00a6s\u0001\u0000\u0000\u0000\u00a6"+
		"v\u0001\u0000\u0000\u0000\u00a6~\u0001\u0000\u0000\u0000\u00a6\u0086\u0001"+
		"\u0000\u0000\u0000\u00a6\u008e\u0001\u0000\u0000\u0000\u00a6\u0096\u0001"+
		"\u0000\u0000\u0000\u00a6\u009e\u0001\u0000\u0000\u0000\u00a7\u0013\u0001"+
		"\u0000\u0000\u0000\u00a8\u00a9\u0007\u0006\u0000\u0000\u00a9\u0015\u0001"+
		"\u0000\u0000\u0000\u00aa\u00ab\u0007\u0007\u0000\u0000\u00ab\u0017\u0001"+
		"\u0000\u0000\u0000\u00ac\u00ad\u0007\b\u0000\u0000\u00ad\u0019\u0001\u0000"+
		"\u0000\u0000\u0014\u001d&/8BGNRW`ejqz\u0082\u008a\u0092\u009a\u00a2\u00a6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}