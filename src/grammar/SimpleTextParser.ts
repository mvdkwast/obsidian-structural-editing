// Generated from SimpleText.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SimpleTextListener } from "./SimpleTextListener";
import { SimpleTextVisitor } from "./SimpleTextVisitor";


export class SimpleTextParser extends Parser {
	public static readonly Word = 1;
	public static readonly Smiley = 2;
	public static readonly Url = 3;
	public static readonly DOT = 4;
	public static readonly QUESTION_MARK = 5;
	public static readonly EXCLAMATION_MARK = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LACCOL = 9;
	public static readonly RACCOL = 10;
	public static readonly LBRACK = 11;
	public static readonly RBRACK = 12;
	public static readonly QUOTE = 13;
	public static readonly DQUOTE = 14;
	public static readonly COLON = 15;
	public static readonly COMMA = 16;
	public static readonly SEMICOLON = 17;
	public static readonly SMILEY = 18;
	public static readonly WS = 19;
	public static readonly RULE_paragraph = 0;
	public static readonly RULE_sentence = 1;
	public static readonly RULE_proposition = 2;
	public static readonly RULE_midPunctuation = 3;
	public static readonly RULE_endPunctuation = 4;
	public static readonly RULE_word = 5;
	public static readonly RULE_expression = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"paragraph", "sentence", "proposition", "midPunctuation", "endPunctuation", 
		"word", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'.'", "'?'", "'!'", "'('", 
		"')'", "'{'", "'}'", "'['", "']'", undefined, "'\"'", "':'", "','", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Word", "Smiley", "Url", "DOT", "QUESTION_MARK", "EXCLAMATION_MARK", 
		"LPAREN", "RPAREN", "LACCOL", "RACCOL", "LBRACK", "RBRACK", "QUOTE", "DQUOTE", 
		"COLON", "COMMA", "SEMICOLON", "SMILEY", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleTextParser._LITERAL_NAMES, SimpleTextParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleTextParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleText.g4"; }

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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.QUOTE) | (1 << SimpleTextParser.DQUOTE))) !== 0)) {
				{
				{
				this.state = 14;
				this.sentence();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleTextParser.RULE_sentence);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 20;
					this.proposition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 23;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.DOT) | (1 << SimpleTextParser.QUESTION_MARK) | (1 << SimpleTextParser.EXCLAMATION_MARK))) !== 0)) {
				{
				this.state = 25;
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
		this.enterRule(_localctx, 4, SimpleTextParser.RULE_proposition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 30;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SimpleTextParser.Word:
					case SimpleTextParser.Smiley:
					case SimpleTextParser.Url:
						{
						this.state = 28;
						this.word();
						}
						break;
					case SimpleTextParser.LPAREN:
					case SimpleTextParser.LACCOL:
					case SimpleTextParser.LBRACK:
					case SimpleTextParser.QUOTE:
					case SimpleTextParser.DQUOTE:
						{
						this.state = 29;
						this.expression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 32;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.COLON) | (1 << SimpleTextParser.COMMA) | (1 << SimpleTextParser.SEMICOLON))) !== 0)) {
				{
				this.state = 34;
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
	public midPunctuation(): MidPunctuationContext {
		let _localctx: MidPunctuationContext = new MidPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimpleTextParser.RULE_midPunctuation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.COLON) | (1 << SimpleTextParser.COMMA) | (1 << SimpleTextParser.SEMICOLON))) !== 0))) {
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
	public endPunctuation(): EndPunctuationContext {
		let _localctx: EndPunctuationContext = new EndPunctuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimpleTextParser.RULE_endPunctuation);
		let _la: number;
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleTextParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 39;
					this.match(SimpleTextParser.DOT);
					}
					}
					this.state = 42;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SimpleTextParser.DOT);
				}
				break;
			case SimpleTextParser.QUESTION_MARK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.match(SimpleTextParser.QUESTION_MARK);
				}
				break;
			case SimpleTextParser.EXCLAMATION_MARK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.match(SimpleTextParser.EXCLAMATION_MARK);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 10, SimpleTextParser.RULE_word);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SimpleTextParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 90;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleTextParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.match(SimpleTextParser.LPAREN);
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.QUOTE) | (1 << SimpleTextParser.DQUOTE))) !== 0)) {
					{
					{
					this.state = 51;
					this.sentence();
					}
					}
					this.state = 56;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 57;
				this.match(SimpleTextParser.RPAREN);
				}
				break;
			case SimpleTextParser.QUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				this.match(SimpleTextParser.QUOTE);
				this.state = 62;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 59;
						this.sentence();
						}
						}
					}
					this.state = 64;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 65;
				this.match(SimpleTextParser.QUOTE);
				}
				break;
			case SimpleTextParser.DQUOTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 66;
				this.match(SimpleTextParser.DQUOTE);
				this.state = 70;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 67;
						this.sentence();
						}
						}
					}
					this.state = 72;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 73;
				this.match(SimpleTextParser.DQUOTE);
				}
				break;
			case SimpleTextParser.LBRACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 74;
				this.match(SimpleTextParser.LBRACK);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.QUOTE) | (1 << SimpleTextParser.DQUOTE))) !== 0)) {
					{
					{
					this.state = 75;
					this.sentence();
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 81;
				this.match(SimpleTextParser.RBRACK);
				}
				break;
			case SimpleTextParser.LACCOL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 82;
				this.match(SimpleTextParser.LACCOL);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleTextParser.Word) | (1 << SimpleTextParser.Smiley) | (1 << SimpleTextParser.Url) | (1 << SimpleTextParser.LPAREN) | (1 << SimpleTextParser.LACCOL) | (1 << SimpleTextParser.LBRACK) | (1 << SimpleTextParser.QUOTE) | (1 << SimpleTextParser.DQUOTE))) !== 0)) {
					{
					{
					this.state = 83;
					this.sentence();
					}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 89;
				this.match(SimpleTextParser.RACCOL);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15_\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03" +
		"\x03\x06\x03\x18\n\x03\r\x03\x0E\x03\x19\x03\x03\x05\x03\x1D\n\x03\x03" +
		"\x04\x03\x04\x06\x04!\n\x04\r\x04\x0E\x04\"\x03\x04\x05\x04&\n\x04\x03" +
		"\x05\x03\x05\x03\x06\x06\x06+\n\x06\r\x06\x0E\x06,\x03\x06\x03\x06\x05" +
		"\x061\n\x06\x03\x07\x03\x07\x03\b\x03\b\x07\b7\n\b\f\b\x0E\b:\v\b\x03" +
		"\b\x03\b\x03\b\x07\b?\n\b\f\b\x0E\bB\v\b\x03\b\x03\b\x03\b\x07\bG\n\b" +
		"\f\b\x0E\bJ\v\b\x03\b\x03\b\x03\b\x07\bO\n\b\f\b\x0E\bR\v\b\x03\b\x03" +
		"\b\x03\b\x07\bW\n\b\f\b\x0E\bZ\v\b\x03\b\x05\b]\n\b\x03\b\x02\x02\x02" +
		"\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x04\x03\x02\x11" +
		"\x13\x03\x02\x03\x05\x02i\x02\x13\x03\x02\x02\x02\x04\x17\x03\x02\x02" +
		"\x02\x06 \x03\x02\x02\x02\b\'\x03\x02\x02\x02\n0\x03\x02\x02\x02\f2\x03" +
		"\x02\x02\x02\x0E\\\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10\x03" +
		"\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14\x03" +
		"\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x18\x05" +
		"\x06\x04\x02\x17\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x17\x03" +
		"\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03\x02\x02\x02\x1B\x1D\x05" +
		"\n\x06\x02\x1C\x1B\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x05\x03" +
		"\x02\x02\x02\x1E!\x05\f\x07\x02\x1F!\x05\x0E\b\x02 \x1E\x03\x02\x02\x02" +
		" \x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02" +
		"\x02\x02#%\x03\x02\x02\x02$&\x05\b\x05\x02%$\x03\x02\x02\x02%&\x03\x02" +
		"\x02\x02&\x07\x03\x02\x02\x02\'(\t\x02\x02\x02(\t\x03\x02\x02\x02)+\x07" +
		"\x06\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-1\x03\x02\x02\x02.1\x07\x07\x02\x02/1\x07\b\x02\x020*\x03" +
		"\x02\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x021\v\x03\x02\x02\x0223" +
		"\t\x03\x02\x023\r\x03\x02\x02\x0248\x07\t\x02\x0257\x05\x04\x03\x0265" +
		"\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x02" +
		"9;\x03\x02\x02\x02:8\x03\x02\x02\x02;]\x07\n\x02\x02<@\x07\x0F\x02\x02" +
		"=?\x05\x04\x03\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02\x02C]\x07\x0F\x02\x02" +
		"DH\x07\x10\x02\x02EG\x05\x04\x03\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02" +
		"HF\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02" +
		"K]\x07\x10\x02\x02LP\x07\r\x02\x02MO\x05\x04\x03\x02NM\x03\x02\x02\x02" +
		"OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02S]\x07\x0E\x02\x02TX\x07\v\x02\x02UW\x05\x04\x03\x02" +
		"VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y[\x03\x02\x02\x02ZX\x03\x02\x02\x02[]\x07\f\x02\x02\\4\x03\x02\x02\x02" +
		"\\<\x03\x02\x02\x02\\D\x03\x02\x02\x02\\L\x03\x02\x02\x02\\T\x03\x02\x02" +
		"\x02]\x0F\x03\x02\x02\x02\x10\x13\x19\x1C \"%,08@HPX\\";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleTextParser.__ATN) {
			SimpleTextParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleTextParser._serializedATN));
		}

		return SimpleTextParser.__ATN;
	}

}

export class ParagraphContext extends ParserRuleContext {
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_paragraph; }
	// @Override
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterParagraph) {
			listener.enterParagraph(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitParagraph) {
			listener.exitParagraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitParagraph) {
			return visitor.visitParagraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public proposition(): PropositionContext[];
	public proposition(i: number): PropositionContext;
	public proposition(i?: number): PropositionContext | PropositionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropositionContext);
		} else {
			return this.getRuleContext(i, PropositionContext);
		}
	}
	public endPunctuation(): EndPunctuationContext | undefined {
		return this.tryGetRuleContext(0, EndPunctuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_sentence; }
	// @Override
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitSentence) {
			return visitor.visitSentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropositionContext extends ParserRuleContext {
	public word(): WordContext[];
	public word(i: number): WordContext;
	public word(i?: number): WordContext | WordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WordContext);
		} else {
			return this.getRuleContext(i, WordContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public midPunctuation(): MidPunctuationContext | undefined {
		return this.tryGetRuleContext(0, MidPunctuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_proposition; }
	// @Override
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterProposition) {
			listener.enterProposition(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitProposition) {
			listener.exitProposition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitProposition) {
			return visitor.visitProposition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MidPunctuationContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.COMMA, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.COLON, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_midPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterMidPunctuation) {
			listener.enterMidPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitMidPunctuation) {
			listener.exitMidPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitMidPunctuation) {
			return visitor.visitMidPunctuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndPunctuationContext extends ParserRuleContext {
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.DOT);
		} else {
			return this.getToken(SimpleTextParser.DOT, i);
		}
	}
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.QUESTION_MARK, 0); }
	public EXCLAMATION_MARK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.EXCLAMATION_MARK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_endPunctuation; }
	// @Override
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterEndPunctuation) {
			listener.enterEndPunctuation(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitEndPunctuation) {
			listener.exitEndPunctuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitEndPunctuation) {
			return visitor.visitEndPunctuation(this);
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
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterWord) {
			listener.enterWord(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitWord) {
			listener.exitWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitWord) {
			return visitor.visitWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.RPAREN, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	public QUOTE(): TerminalNode[];
	public QUOTE(i: number): TerminalNode;
	public QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.QUOTE);
		} else {
			return this.getToken(SimpleTextParser.QUOTE, i);
		}
	}
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SimpleTextParser.DQUOTE);
		} else {
			return this.getToken(SimpleTextParser.DQUOTE, i);
		}
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.RBRACK, 0); }
	public LACCOL(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.LACCOL, 0); }
	public RACCOL(): TerminalNode | undefined { return this.tryGetToken(SimpleTextParser.RACCOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleTextParser.RULE_expression; }
	// @Override
	public enterRule(listener: SimpleTextListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleTextListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleTextVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

