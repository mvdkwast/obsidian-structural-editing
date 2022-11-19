// Generated from SimpleTextLex.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SimpleTextLex extends Lexer {
	public static readonly Math = 1;
	public static readonly Smiley = 2;
	public static readonly Url = 3;
	public static readonly Word = 4;
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
	public static readonly NUMBER = 25;
	public static readonly WS = 26;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"Math", "MathBody", "MathChar", "MathEnd", "Smiley", "Url", "Word", "QUOT", 
		"DQUOT", "LPAREN", "RPAREN", "LACCOL", "RACCOL", "LBRACK", "RBRACK", "BACKTICK", 
		"DOLLAR", "LT", "GT", "DOT", "QMARK", "EMARK", "ELLIPS", "COMMA", "COLON", 
		"SEMICOLON", "WORD_START", "WORD_CHAR", "WORD_END", "SMILEY", "NUMBER", 
		"ESCAPED_CHAR", "SPACE", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'''", "'\"'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'`'", "'$'", "'<'", "'>'", 
		"'.'", "'?'", "'!'", "'\u2026'", "','", "':'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Math", "Smiley", "Url", "Word", "QUOT", "DQUOT", "LPAREN", 
		"RPAREN", "LACCOL", "RACCOL", "LBRACK", "RBRACK", "BACKTICK", "DOLLAR", 
		"LT", "GT", "DOT", "QMARK", "EMARK", "ELLIPS", "COMMA", "COLON", "SEMICOLON", 
		"SMILEY", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleTextLex._LITERAL_NAMES, SimpleTextLex._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleTextLex.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SimpleTextLex._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SimpleTextLex.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleTextLex.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleTextLex._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SimpleTextLex.channelNames; }

	// @Override
	public get modeNames(): string[] { return SimpleTextLex.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1C\xE1\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03M\n\x03\f\x03" +
		"\x0E\x03P\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04V\n\x04\x03\x05" +
		"\x03\x05\x05\x05Z\n\x05\x03\x06\x03\x06\x03\x07\x06\x07_\n\x07\r\x07\x0E" +
		"\x07`\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07h\n\x07\r\x07\x0E" +
		"\x07i\x03\x07\x03\x07\x06\x07n\n\x07\r\x07\x0E\x07o\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x06\x07w\n\x07\r\x07\x0E\x07x\x03\x07\x03\x07\x05" +
		"\x07}\n\x07\x03\b\x03\b\x03\b\x07\b\x82\n\b\f\b\x0E\b\x85\v\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\x8B\n\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f" +
		"\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\xB5\n\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\xBA\n\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xBF" +
		"\n\x1E\x03\x1F\x03\x1F\x05\x1F\xC3\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\xC9\n\x1F\x03 \x06 \xCC\n \r \x0E \xCD\x03 \x03 \x06 \xD2\n " +
		"\r \x0E \xD3\x03!\x03!\x03!\x03\"\x03\"\x03#\x06#\xDC\n#\r#\x0E#\xDD\x03" +
		"#\x03#\x02\x02\x02$\x03\x02\x03\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02" +
		"\x04\r\x02\x05\x0F\x02\x06\x11\x02\x07\x13\x02\b\x15\x02\t\x17\x02\n\x19" +
		"\x02\v\x1B\x02\f\x1D\x02\r\x1F\x02\x0E!\x02\x0F#\x02\x10%\x02\x11\'\x02" +
		"\x12)\x02\x13+\x02\x14-\x02\x15/\x02\x161\x02\x173\x02\x185\x02\x197\x02" +
		"\x029\x02\x02;\x02\x02=\x02\x1A?\x02\x1BA\x02\x02C\x02\x02E\x02\x1C\x03" +
		"\x02\f\x04\x02\f\f&&\x05\x02\f\f\"\"&&\x03\x02c|\x03\x02\"\"\x0E\x02\v" +
		"\f\"$)+..00<=AA]_bb}}\x7F\x7F\u2028\u2028\r\x02\v\f\"#*+..00<=AA]_}}\x7F" +
		"\x7F\u2028\u2028\x03\x02<=\x06\x02*+FFrr~~\x03\x022;\x05\x02\v\f\x0E\x0F" +
		"\"\"\x02\xEE\x02\x03\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
		"\x02E\x03\x02\x02\x02\x03G\x03\x02\x02\x02\x05N\x03\x02\x02\x02\x07U\x03" +
		"\x02\x02\x02\tY\x03\x02\x02\x02\v[\x03\x02\x02\x02\r|\x03\x02\x02\x02" +
		"\x0F\x8A\x03\x02\x02\x02\x11\x8C\x03\x02\x02\x02\x13\x8E\x03\x02\x02\x02" +
		"\x15\x90\x03\x02\x02\x02\x17\x92\x03\x02\x02\x02\x19\x94\x03\x02\x02\x02" +
		"\x1B\x96\x03\x02\x02\x02\x1D\x98\x03\x02\x02\x02\x1F\x9A\x03\x02\x02\x02" +
		"!\x9C\x03\x02\x02\x02#\x9E\x03\x02\x02\x02%\xA0\x03\x02\x02\x02\'\xA2" +
		"\x03\x02\x02\x02)\xA4\x03\x02\x02\x02+\xA6\x03\x02\x02\x02-\xA8\x03\x02" +
		"\x02\x02/\xAA\x03\x02\x02\x021\xAC\x03\x02\x02\x023\xAE\x03\x02\x02\x02" +
		"5\xB0\x03\x02\x02\x027\xB4\x03\x02\x02\x029\xB9\x03\x02\x02\x02;\xBE\x03" +
		"\x02\x02\x02=\xC8\x03\x02\x02\x02?\xCB\x03\x02\x02\x02A\xD5\x03\x02\x02" +
		"\x02C\xD8\x03\x02\x02\x02E\xDB\x03\x02\x02\x02GH\x05#\x12\x02HI\x05\x05" +
		"\x03\x02IJ\x05#\x12\x02J\x04\x03\x02\x02\x02KM\x05\x07\x04\x02LK\x03\x02" +
		"\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02" +
		"\x02\x02PN\x03\x02\x02\x02QR\x05\t\x05\x02R\x06\x03\x02\x02\x02SV\n\x02" +
		"\x02\x02TV\x05A!\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02V\b\x03\x02\x02" +
		"\x02WZ\n\x03\x02\x02XZ\x05A!\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Z" +
		"\n\x03\x02\x02\x02[\\\x05=\x1F\x02\\\f\x03\x02\x02\x02]_\t\x04\x02\x02" +
		"^]\x03\x02\x02\x02_`\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"ab\x03\x02\x02\x02bc\x07<\x02\x02cd\x071\x02\x02de\x071\x02\x02eg\x03" +
		"\x02\x02\x02fh\n\x05\x02\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02j}\x03\x02\x02\x02km\x05%\x13\x02ln\t\x04" +
		"\x02\x02ml\x03\x02\x02\x02no\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02" +
		"\x02\x02pq\x03\x02\x02\x02qr\x07<\x02\x02rs\x071\x02\x02st\x071\x02\x02" +
		"tv\x03\x02\x02\x02uw\n\x05\x02\x02vu\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"xv\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x05\'\x14\x02" +
		"{}\x03\x02\x02\x02|^\x03\x02\x02\x02|k\x03\x02\x02\x02}\x0E\x03\x02\x02" +
		"\x02~\x8B\x03\x02\x02\x02\x7F\x83\x057\x1C\x02\x80\x82\x059\x1D\x02\x81" +
		"\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86" +
		"\x87\x05;\x1E\x02\x87\x8B\x03\x02\x02\x02\x88\x8B\x057\x1C\x02\x89\x8B" +
		"\x05? \x02\x8A~\x03\x02\x02\x02\x8A\x7F\x03\x02\x02\x02\x8A\x88\x03\x02" +
		"\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x10\x03\x02\x02\x02\x8C\x8D\x07)" +
		"\x02\x02\x8D\x12\x03\x02\x02\x02\x8E\x8F\x07$\x02\x02\x8F\x14\x03\x02" +
		"\x02\x02\x90\x91\x07*\x02\x02\x91\x16\x03\x02\x02\x02\x92\x93\x07+\x02" +
		"\x02\x93\x18\x03\x02\x02\x02\x94\x95\x07}\x02\x02\x95\x1A\x03\x02\x02" +
		"\x02\x96\x97\x07\x7F\x02\x02\x97\x1C\x03\x02\x02\x02\x98\x99\x07]\x02" +
		"\x02\x99\x1E\x03\x02\x02\x02\x9A\x9B\x07_\x02\x02\x9B \x03\x02\x02\x02" +
		"\x9C\x9D\x07b\x02\x02\x9D\"\x03\x02\x02\x02\x9E\x9F\x07&\x02\x02\x9F$" +
		"\x03\x02\x02\x02\xA0\xA1\x07>\x02\x02\xA1&\x03\x02\x02\x02\xA2\xA3\x07" +
		"@\x02\x02\xA3(\x03\x02\x02\x02\xA4\xA5\x070\x02\x02\xA5*\x03\x02\x02\x02" +
		"\xA6\xA7\x07A\x02\x02\xA7,\x03\x02\x02\x02\xA8\xA9\x07#\x02\x02\xA9.\x03" +
		"\x02\x02\x02\xAA\xAB\x07\u2028\x02\x02\xAB0\x03\x02\x02\x02\xAC\xAD\x07" +
		".\x02\x02\xAD2\x03\x02\x02\x02\xAE\xAF\x07<\x02\x02\xAF4\x03\x02\x02\x02" +
		"\xB0\xB1\x07=\x02\x02\xB16\x03\x02\x02\x02\xB2\xB5\n\x06\x02\x02\xB3\xB5" +
		"\x05A!\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3\x03\x02\x02\x02\xB58\x03\x02" +
		"\x02\x02\xB6\xBA\n\x07\x02\x02\xB7\xBA\x05? \x02\xB8\xBA\x05A!\x02\xB9" +
		"\xB6\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA" +
		":\x03\x02\x02\x02\xBB\xBF\n\x06\x02\x02\xBC\xBF\x05? \x02\xBD\xBF\x05" +
		"A!\x02\xBE\xBB\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBD\x03\x02" +
		"\x02\x02\xBF<\x03\x02\x02\x02\xC0\xC2\t\b\x02\x02\xC1\xC3\x07/\x02\x02" +
		"\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
		"\xC4\xC9\t\t\x02\x02\xC5\xC6\x07:\x02\x02\xC6\xC7\x07/\x02\x02\xC7\xC9" +
		"\x07+\x02\x02\xC8\xC0\x03\x02\x02\x02\xC8\xC5\x03\x02\x02\x02\xC9>\x03" +
		"\x02\x02\x02\xCA\xCC\t\n\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02" +
		"\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02" +
		"\x02\x02\xCF\xD1\x070\x02\x02\xD0\xD2\t\n\x02\x02\xD1\xD0\x03\x02\x02" +
		"\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4@\x03\x02\x02\x02\xD5\xD6\x07^\x02\x02\xD6\xD7\v\x02\x02\x02\xD7" +
		"B\x03\x02\x02\x02\xD8\xD9\t\v\x02\x02\xD9D\x03\x02\x02\x02\xDA\xDC\x05" +
		"C\"\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDB\x03\x02" +
		"\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\b#\x02" +
		"\x02\xE0F\x03\x02\x02\x02\x15\x02NUY`iox|\x83\x8A\xB4\xB9\xBE\xC2\xC8" +
		"\xCD\xD3\xDD\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleTextLex.__ATN) {
			SimpleTextLex.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleTextLex._serializedATN));
		}

		return SimpleTextLex.__ATN;
	}

}
