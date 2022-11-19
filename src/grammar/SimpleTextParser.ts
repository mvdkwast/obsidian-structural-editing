// Generated from SimpleTextParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SimpleTextParserListener } from "./SimpleTextParserListener";
import { SimpleTextParserVisitor } from "./SimpleTextParserVisitor";


export class SimpleTextParser extends Parser {
	public static readonly Math = 1;
	public static readonly Word = 2;
	public static readonly Smiley = 3;
	public static readonly Url = 4;
	public static readonly QUOT = 5;
	public static readonly DQUOT = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LACCOL = 9;
	public static readonly RACCOL = 10;
	public static readonly LBRACK = 11;
	public static readonly RBRACK = 12;
	public static readonly BACKTICK = 13;
	public static readonly DOLLAR = 14;
	public static readonly LT = 15;
	public static readonly GT = 16;
	public static readonly DOT = 17;
	public static readonly QMARK = 18;
	public static readonly EMARK = 19;
	public static readonly ELLIPS = 20;
	public static readonly COMMA = 21;
	public static readonly COLON = 22;
	public static readonly SEMICOLON = 23;
	public static readonly SMILEY = 24;
	public static readonly WS = 25;
	public static readonly RULE_paragraph = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_sentence = 2;
	public static readonly RULE_sentenceWithPunctuation = 3;
	public static readonly RULE_sentenceWithOptionalPunctuation = 4;
	public static readonly RULE_proposition = 5;
	public static readonly RULE_propositionWithPunctuation = 6;
	public static readonly RULE_propositionWithOptionalPunctuation = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_word = 9;
	public static readonly RULE_math = 10;
	public static readonly RULE_endPunctuation = 11;
	public static readonly RULE_midPunctuation = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"paragraph", "block", "sentence", "sentenceWithPunctuation", "sentenceWithOptionalPunctuation", 
		"proposition", "propositionWithPunctuation", "propositionWithOptionalPunctuation", 
		"expression", "word", "math", "endPunctuation", "midPunctuation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'''", "'\"'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'`'", "'$'", "'<'", "'>'", 
		"'.'", "'?'", "'!'", "'\u2026'", "','", "':'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Math", "Word", "Smiley", "Url", "QUOT", "DQUOT", "LPAREN", 
		"RPAREN", "LACCOL", "RACCOL", "LBRACK", "RBRACK", "BACKTICK", "DOLLAR", 
		"LT", "GT", "DOT", "QMARK", "EMARK", "ELLIPS", "COMMA", "COLON", "SEMICOLON", 
		"SMILEY", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleTextParser._LITERAL_NAMES, SimpleTextParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleTextParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleTextParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleTextParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleTextParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleTextParser._ATN, this);
	}
	// @RuleVersion(0)
	public paragraph(): ParagraphContext {
		let _localctx: ParagraphContext = new ParagraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleTextParser.RULE_paragraph);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 26;
					this.sentenceWithPunctuation();
					}
					}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 32;
			this.sentenceWithOptionalPunctuation();
			this.state = 33;
			this.match(SimpleTextParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleTextParser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 35;
					this.sentenceWithPunctuation();
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 41;
			this.sentenceWithOptionalPunctuation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimpleTextParser.RULE_sentence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 43;
					this.propositionWithPunctuation();
					}
					}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 49;
			this.propositionWithOptionalPunctuation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentenceWithPunctuation(): SentenceWithPunctuationContext {
		let _localctx: SentenceWithPunctuationContext = new SentenceWithPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleTextParser.RULE_sentenceWithPunctuation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.sentence();
			this.state = 52;
			this.endPunctuation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentenceWithOptionalPunctuation(): SentenceWithOptionalPunctuationContext {
		let _localctx: SentenceWithOptionalPunctuationContext = new SentenceWithOptionalPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimpleTextParser.RULE_sentenceWithOptionalPunctuation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.sentence();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.DOT) | (1 << SimpleTextParser.QMARK) | (1 << SimpleTextParser.EMARK) | (1 << SimpleTextParser.ELLIPS))) !== 0)) {
				{
				this.state = 55;
				this.endPunctuation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public proposition(): PropositionContext {
		let _localctx: PropositionContext = new PropositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SimpleTextParser.RULE_proposition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 58;
					this.expression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propositionWithPunctuation(): PropositionWithPunctuationContext {
		let _localctx: PropositionWithPunctuationContext = new PropositionWithPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleTextParser.RULE_propositionWithPunctuation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.proposition();
			this.state = 64;
			this.midPunctuation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propositionWithOptionalPunctuation(): PropositionWithOptionalPunctuationContext {
		let _localctx: PropositionWithOptionalPunctuationContext = new PropositionWithOptionalPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SimpleTextParser.RULE_propositionWithOptionalPunctuation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.proposition();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.COMMA) | (1 << SimpleTextParser.COLON) | (1 << SimpleTextParser.SEMICOLON))) !== 0)) {
				{
				this.state = 67;
				this.midPunctuation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SimpleTextParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.match(SimpleTextParser.QUOT);
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 71;
					this.block();
					}
					break;
				}
				this.state = 74;
				this.match(SimpleTextParser.QUOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.match(SimpleTextParser.DQUOT);
				this.state = 77;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 76;
					this.block();
					}
					break;
				}
				this.state = 79;
				this.match(SimpleTextParser.DQUOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 80;
				this.match(SimpleTextParser.BACKTICK);
				this.state = 81;
				this.block();
				this.state = 82;
				this.match(SimpleTextParser.BACKTICK);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 84;
				this.match(SimpleTextParser.LPAREN);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Math) | (1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.QUOT) | (1 << SimpleTextParser.DQUOT) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.BACKTICK) | (1 << SimpleTextParser.LT))) !== 0)) {
					{
					this.state = 85;
					this.block();
					}
				}

				this.state = 88;
				this.match(SimpleTextParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 89;
				this.match(SimpleTextParser.LACCOL);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Math) | (1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.QUOT) | (1 << SimpleTextParser.DQUOT) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.BACKTICK) | (1 << SimpleTextParser.LT))) !== 0)) {
					{
					this.state = 90;
					this.block();
					}
				}

				this.state = 93;
				this.match(SimpleTextParser.RACCOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 94;
				this.match(SimpleTextParser.LBRACK);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Math) | (1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.QUOT) | (1 << SimpleTextParser.DQUOT) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.BACKTICK) | (1 << SimpleTextParser.LT))) !== 0)) {
					{
					this.state = 95;
					this.block();
					}
				}

				this.state = 98;
				this.match(SimpleTextParser.RBRACK);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 99;
				this.math();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 101;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 100;
						this.word();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 103;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 105;
				this.match(SimpleTextParser.LT);
				this.state = 106;
				this.match(SimpleTextParser.Url);
				this.state = 107;
				this.match(SimpleTextParser.GT);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 108;
				this.match(SimpleTextParser.QUOT);
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 109;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SimpleTextParser.QUOT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				this.state = 115;
				this.match(SimpleTextParser.QUOT);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 116;
				this.match(SimpleTextParser.DQUOT);
				this.state = 120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 117;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SimpleTextParser.DQUOT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 122;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 123;
				this.match(SimpleTextParser.DQUOT);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 124;
				this.match(SimpleTextParser.BACKTICK);
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 125;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SimpleTextParser.BACKTICK)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 130;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 131;
				this.match(SimpleTextParser.BACKTICK);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 132;
				this.match(SimpleTextParser.LPAREN);
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 133;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SimpleTextParser.RPAREN)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				this.state = 139;
				this.match(SimpleTextParser.RPAREN);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 140;
				this.match(SimpleTextParser.LBRACK);
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 141;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SimpleTextParser.RBRACK)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 147;
				this.match(SimpleTextParser.RBRACK);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 148;
				this.match(SimpleTextParser.LACCOL);
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 149;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SimpleTextParser.RACCOL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				this.state = 155;
				this.match(SimpleTextParser.RACCOL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public word(): WordContext {
		let _localctx: WordContext = new WordContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SimpleTextParser.RULE_word);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public math(): MathContext {
		let _localctx: MathContext = new MathContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SimpleTextParser.RULE_math);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(SimpleTextParser.Math);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endPunctuation(): EndPunctuationContext {
		let _localctx: EndPunctuationContext = new EndPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SimpleTextParser.RULE_endPunctuation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.DOT) | (1 << SimpleTextParser.QMARK) | (1 << SimpleTextParser.EMARK) | (1 << SimpleTextParser.ELLIPS))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public midPunctuation(): MidPunctuationContext {
		let _localctx: MidPunctuationContext = new MidPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SimpleTextParser.RULE_midPunctuation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.COMMA) | (1 << SimpleTextParser.COLON) | (1 << SimpleTextParser.SEMICOLON))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\xA9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x03\x03\x03" +
		"\x03\x03\x04\x07\x04/\n\x04\f\x04\x0E\x042\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06;\n\x06\x03\x07\x06\x07>\n\x07" +
		"\r\x07\x0E\x07?\x03\b\x03\b\x03\b\x03\t\x03\t\x05\tG\n\t\x03\n\x03\n\x05" +
		"\nK\n\n\x03\n\x03\n\x03\n\x05\nP\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\nY\n\n\x03\n\x03\n\x03\n\x05\n^\n\n\x03\n\x03\n\x03\n\x05" +
		"\nc\n\n\x03\n\x03\n\x03\n\x06\nh\n\n\r\n\x0E\ni\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\nq\n\n\f\n\x0E\nt\v\n\x03\n\x03\n\x03\n\x07\ny\n\n\f\n\x0E" +
		"\n|\v\n\x03\n\x03\n\x03\n\x07\n\x81\n\n\f\n\x0E\n\x84\v\n\x03\n\x03\n" +
		"\x03\n\x07\n\x89\n\n\f\n\x0E\n\x8C\v\n\x03\n\x03\n\x03\n\x07\n\x91\n\n" +
		"\f\n\x0E\n\x94\v\n\x03\n\x03\n\x03\n\x07\n\x99\n\n\f\n\x0E\n\x9C\v\n\x03" +
		"\n\x05\n\x9F\n\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\f\x1F(0?rz\x82\x8A\x92\x9A\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x02\v\x03\x02\x07\x07\x03\x02\b\b\x03\x02\x0F\x0F\x03\x02\n\n\x03\x02" +
		"\x0E\x0E\x03\x02\f\f\x03\x02\x04\x06\x03\x02\x13\x16\x03\x02\x17\x19\x02" +
		"\xBB\x02\x1F\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x060\x03\x02\x02\x02" +
		"\b5\x03\x02\x02\x02\n8\x03\x02\x02\x02\f=\x03\x02\x02\x02\x0EA\x03\x02" +
		"\x02\x02\x10D\x03\x02\x02\x02\x12\x9E\x03\x02\x02\x02\x14\xA0\x03\x02" +
		"\x02\x02\x16\xA2\x03\x02\x02\x02\x18\xA4\x03\x02\x02\x02\x1A\xA6\x03\x02" +
		"\x02\x02\x1C\x1E\x05\b\x05\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02" +
		"\x02\x1F \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 \"\x03\x02\x02\x02!" +
		"\x1F\x03\x02\x02\x02\"#\x05\n\x06\x02#$\x07\x02\x02\x03$\x03\x03\x02\x02" +
		"\x02%\'\x05\b\x05\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02()\x03\x02\x02" +
		"\x02(&\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x05\n\x06" +
		"\x02,\x05\x03\x02\x02\x02-/\x05\x0E\b\x02.-\x03\x02\x02\x02/2\x03\x02" +
		"\x02\x0201\x03\x02\x02\x020.\x03\x02\x02\x0213\x03\x02\x02\x0220\x03\x02" +
		"\x02\x0234\x05\x10\t\x024\x07\x03\x02\x02\x0256\x05\x06\x04\x0267\x05" +
		"\x18\r\x027\t\x03\x02\x02\x028:\x05\x06\x04\x029;\x05\x18\r\x02:9\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;\v\x03\x02\x02\x02<>\x05\x12\n\x02=<\x03" +
		"\x02\x02\x02>?\x03\x02\x02\x02?@\x03\x02\x02\x02?=\x03\x02\x02\x02@\r" +
		"\x03\x02\x02\x02AB\x05\f\x07\x02BC\x05\x1A\x0E\x02C\x0F\x03\x02\x02\x02" +
		"DF\x05\f\x07\x02EG\x05\x1A\x0E\x02FE\x03\x02\x02\x02FG\x03\x02\x02\x02" +
		"G\x11\x03\x02\x02\x02HJ\x07\x07\x02\x02IK\x05\x04\x03\x02JI\x03\x02\x02" +
		"\x02JK\x03\x02\x02\x02KL\x03\x02\x02\x02L\x9F\x07\x07\x02\x02MO\x07\b" +
		"\x02\x02NP\x05\x04\x03\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x03\x02" +
		"\x02\x02Q\x9F\x07\b\x02\x02RS\x07\x0F\x02\x02ST\x05\x04\x03\x02TU\x07" +
		"\x0F\x02\x02U\x9F\x03\x02\x02\x02VX\x07\t\x02\x02WY\x05\x04\x03\x02XW" +
		"\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x9F\x07\n\x02\x02" +
		"[]\x07\v\x02\x02\\^\x05\x04\x03\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02" +
		"^_\x03\x02\x02\x02_\x9F\x07\f\x02\x02`b\x07\r\x02\x02ac\x05\x04\x03\x02" +
		"ba\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02d\x9F\x07\x0E\x02" +
		"\x02e\x9F\x05\x16\f\x02fh\x05\x14\v\x02gf\x03\x02\x02\x02hi\x03\x02\x02" +
		"\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\x9F\x03\x02\x02\x02kl\x07\x11" +
		"\x02\x02lm\x07\x06\x02\x02m\x9F\x07\x12\x02\x02nr\x07\x07\x02\x02oq\n" +
		"\x02\x02\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rs\x03\x02\x02\x02rp\x03" +
		"\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02u\x9F\x07\x07\x02\x02" +
		"vz\x07\b\x02\x02wy\n\x03\x02\x02xw\x03\x02\x02\x02y|\x03\x02\x02\x02z" +
		"{\x03\x02\x02\x02zx\x03\x02\x02\x02{}\x03\x02\x02\x02|z\x03\x02\x02\x02" +
		"}\x9F\x07\b\x02\x02~\x82\x07\x0F\x02\x02\x7F\x81\n\x04\x02\x02\x80\x7F" +
		"\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x82\x80" +
		"\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85\x9F" +
		"\x07\x0F\x02\x02\x86\x8A\x07\t\x02\x02\x87\x89\n\x05\x02\x02\x88\x87\x03" +
		"\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8A\x88\x03" +
		"\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x9F\x07" +
		"\n\x02\x02\x8E\x92\x07\r\x02\x02\x8F\x91\n\x06\x02\x02\x90\x8F\x03\x02" +
		"\x02\x02\x91\x94\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x92\x90\x03\x02" +
		"\x02\x02\x93\x95\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x9F\x07\x0E" +
		"\x02\x02\x96\x9A\x07\v\x02\x02\x97\x99\n\x07\x02\x02\x98\x97\x03\x02\x02" +
		"\x02\x99\x9C\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9A\x98\x03\x02\x02" +
		"\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\x9F\x07\f\x02" +
		"\x02\x9EH\x03\x02\x02\x02\x9EM\x03\x02\x02\x02\x9ER\x03\x02\x02\x02\x9E" +
		"V\x03\x02\x02\x02\x9E[\x03\x02\x02\x02\x9E`\x03\x02\x02\x02\x9Ee\x03\x02" +
		"\x02\x02\x9Eg\x03\x02\x02\x02\x9Ek\x03\x02\x02\x02\x9En\x03\x02\x02\x02" +
		"\x9Ev\x03\x02\x02\x02\x9E~\x03\x02\x02\x02\x9E\x86\x03\x02\x02\x02\x9E" +
		"\x8E\x03\x02\x02\x02\x9E\x96\x03\x02\x02\x02\x9F\x13\x03\x02\x02\x02\xA0" +
		"\xA1\t\b\x02\x02\xA1\x15\x03\x02\x02\x02\xA2\xA3\x07\x03\x02\x02\xA3\x17" +
		"\x03\x02\x02\x02\xA4\xA5\t\t\x02\x02\xA5\x19\x03\x02\x02\x02\xA6\xA7\t" +
		"\n\x02\x02\xA7\x1B\x03\x02\x02\x02\x15\x1F(0:?FJOX]birz\x82\x8A\x92\x9A" +
		"\x9E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleTextParser.__ATN) {
			SimpleTextParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleTextParser._serializedATN));
		}

		return SimpleTextParser.__ATN;
	}

}

export class ParagraphContext extends ParserRuleContext {
	public sentenceWithOptionalPunctuation(): SentenceWithOptionalPunctuationContext {
		return this.getRuleContext(0, SentenceWithOptionalPunctuationContext);
	}
	public EOF(): TerminalNode { return this.getToken(SimpleTextParser.EOF, 0); }
	public sentenceWithPunctuation(): SentenceWithPunctuationContext[];
	public sentenceWithPunctuation(i: number): SentenceWithPunctuationContext;
	public sentenceWithPunctuation(i?: number): SentenceWithPunctuationContext | SentenceWithPunctuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceWithPunctuationContext);
		} else {
			return this.getRuleContext(i, SentenceWithPunctuationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_paragraph; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterParagraph) {
			listener.enterParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitParagraph) {
			listener.exitParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitParagraph) {
			return visitor.visitParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public sentenceWithOptionalPunctuation(): SentenceWithOptionalPunctuationContext {
		return this.getRuleContext(0, SentenceWithOptionalPunctuationContext);
	}
	public sentenceWithPunctuation(): SentenceWithPunctuationContext[];
	public sentenceWithPunctuation(i: number): SentenceWithPunctuationContext;
	public sentenceWithPunctuation(i?: number): SentenceWithPunctuationContext | SentenceWithPunctuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceWithPunctuationContext);
		} else {
			return this.getRuleContext(i, SentenceWithPunctuationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_block; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public propositionWithOptionalPunctuation(): PropositionWithOptionalPunctuationContext {
		return this.getRuleContext(0, PropositionWithOptionalPunctuationContext);
	}
	public propositionWithPunctuation(): PropositionWithPunctuationContext[];
	public propositionWithPunctuation(i: number): PropositionWithPunctuationContext;
	public propositionWithPunctuation(i?: number): PropositionWithPunctuationContext | PropositionWithPunctuationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropositionWithPunctuationContext);
		} else {
			return this.getRuleContext(i, PropositionWithPunctuationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_sentence; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitSentence) {
			return visitor.visitSentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceWithPunctuationContext extends ParserRuleContext {
	public sentence(): SentenceContext {
		return this.getRuleContext(0, SentenceContext);
	}
	public endPunctuation(): EndPunctuationContext {
		return this.getRuleContext(0, EndPunctuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_sentenceWithPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterSentenceWithPunctuation) {
			listener.enterSentenceWithPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitSentenceWithPunctuation) {
			listener.exitSentenceWithPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitSentenceWithPunctuation) {
			return visitor.visitSentenceWithPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceWithOptionalPunctuationContext extends ParserRuleContext {
	public sentence(): SentenceContext {
		return this.getRuleContext(0, SentenceContext);
	}
	public endPunctuation(): EndPunctuationContext | undefined {
		return this.tryGetRuleContext(0, EndPunctuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_sentenceWithOptionalPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterSentenceWithOptionalPunctuation) {
			listener.enterSentenceWithOptionalPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitSentenceWithOptionalPunctuation) {
			listener.exitSentenceWithOptionalPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitSentenceWithOptionalPunctuation) {
			return visitor.visitSentenceWithOptionalPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropositionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_proposition; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterProposition) {
			listener.enterProposition(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitProposition) {
			listener.exitProposition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitProposition) {
			return visitor.visitProposition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropositionWithPunctuationContext extends ParserRuleContext {
	public proposition(): PropositionContext {
		return this.getRuleContext(0, PropositionContext);
	}
	public midPunctuation(): MidPunctuationContext {
		return this.getRuleContext(0, MidPunctuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_propositionWithPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterPropositionWithPunctuation) {
			listener.enterPropositionWithPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitPropositionWithPunctuation) {
			listener.exitPropositionWithPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitPropositionWithPunctuation) {
			return visitor.visitPropositionWithPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropositionWithOptionalPunctuationContext extends ParserRuleContext {
	public proposition(): PropositionContext {
		return this.getRuleContext(0, PropositionContext);
	}
	public midPunctuation(): MidPunctuationContext | undefined {
		return this.tryGetRuleContext(0, MidPunctuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_propositionWithOptionalPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterPropositionWithOptionalPunctuation) {
			listener.enterPropositionWithOptionalPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitPropositionWithOptionalPunctuation) {
			listener.exitPropositionWithOptionalPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitPropositionWithOptionalPunctuation) {
			return visitor.visitPropositionWithOptionalPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public QUOT(): TerminalNode[];
	public QUOT(i: number): TerminalNode;
	public QUOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.QUOT);
		} else {
			return this.getToken(SimpleTextParser.QUOT, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public DQUOT(): TerminalNode[];
	public DQUOT(i: number): TerminalNode;
	public DQUOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.DQUOT);
		} else {
			return this.getToken(SimpleTextParser.DQUOT, i);
		}
	}
	public BACKTICK(): TerminalNode[];
	public BACKTICK(i: number): TerminalNode;
	public BACKTICK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.BACKTICK);
		} else {
			return this.getToken(SimpleTextParser.BACKTICK, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LPAREN, 0); }
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.RPAREN);
		} else {
			return this.getToken(SimpleTextParser.RPAREN, i);
		}
	}
	public LACCOL(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LACCOL, 0); }
	public RACCOL(): TerminalNode[];
	public RACCOL(i: number): TerminalNode;
	public RACCOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.RACCOL);
		} else {
			return this.getToken(SimpleTextParser.RACCOL, i);
		}
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LBRACK, 0); }
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.RBRACK);
		} else {
			return this.getToken(SimpleTextParser.RBRACK, i);
		}
	}
	public math(): MathContext | undefined {
		return this.tryGetRuleContext(0, MathContext);
	}
	public word(): WordContext[];
	public word(i: number): WordContext;
	public word(i?: number): WordContext | WordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordContext);
		} else {
			return this.getRuleContext(i, WordContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LT, 0); }
	public Url(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.Url, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_expression; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	public Word(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.Word, 0); }
	public Smiley(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.Smiley, 0); }
	public Url(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.Url, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_word; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitWord) {
			return visitor.visitWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathContext extends ParserRuleContext {
	public Math(): TerminalNode { return this.getToken(SimpleTextParser.Math, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_math; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterMath) {
			listener.enterMath(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitMath) {
			listener.exitMath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitMath) {
			return visitor.visitMath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndPunctuationContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.DOT, 0); }
	public QMARK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.QMARK, 0); }
	public EMARK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.EMARK, 0); }
	public ELLIPS(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.ELLIPS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_endPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterEndPunctuation) {
			listener.enterEndPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitEndPunctuation) {
			listener.exitEndPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitEndPunctuation) {
			return visitor.visitEndPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MidPunctuationContext extends ParserRuleContext {
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.COMMA, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_midPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextParserListener): void {
		if (listener.enterMidPunctuation) {
			listener.enterMidPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextParserListener): void {
		if (listener.exitMidPunctuation) {
			listener.exitMidPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextParserVisitor<Result>): Result {
		if (visitor.visitMidPunctuation) {
			return visitor.visitMidPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


