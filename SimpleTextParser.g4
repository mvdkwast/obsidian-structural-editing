parser grammar SimpleTextParser;

options {
    tokenVocab = SimpleTextLex;
}

paragraph: (sentenceWithPunctuation)*? sentenceWithOptionalPunctuation EOF;

block: (sentenceWithPunctuation)*? sentenceWithOptionalPunctuation;

// we want to select punctuation in a next grow step after having selected the entire sentence, so we need a
// super-token that includes sentence + punctuation.

sentence: propositionWithPunctuation*? propositionWithOptionalPunctuation;
sentenceWithPunctuation: sentence endPunctuation;
sentenceWithOptionalPunctuation: sentence endPunctuation?;

proposition: expression+?;
propositionWithPunctuation: proposition midPunctuation;
propositionWithOptionalPunctuation: proposition midPunctuation?;

expression
    : QUOT block? QUOT
    | DQUOT block? DQUOT
    | BACKTICK block BACKTICK
    | LPAREN block? RPAREN
    | LACCOL block? RACCOL
    | LBRACK block? RBRACK
    | math
    | word+
    | LT Url GT
    // "save the parse" mode, rely on the fact that the order of grammar rules
    // seems to be important even though I couldn't find any doc on this
    | QUOT ~QUOT*? QUOT
    | DQUOT ~DQUOT*? DQUOT
    | BACKTICK ~BACKTICK*? BACKTICK
    | LPAREN ~RPAREN*? RPAREN
    | LBRACK ~RBRACK*? RBRACK
    | LACCOL ~RACCOL*? RACCOL
    ;

word: Word
    | Smiley
    | Url
    ;

math: Math;

endPunctuation
    : DOT
    | QMARK
    | EMARK
    | ELLIPS;

midPunctuation
    : COLON
    | COMMA
    | SEMICOLON;
