lexer grammar SimpleTextLex;

Math: DOLLAR MathBody DOLLAR;
fragment MathBody: MathChar* MathEnd;
fragment MathChar: ~[$\n] | ESCAPED_CHAR;
fragment MathEnd: ~[$\n ] | ESCAPED_CHAR;

Word:
    | WORD_START WORD_CHAR* WORD_END
    | WORD_START
    ;

Smiley : SMILEY ;
Url
    : [a-z]+ '://' ~[ ]+
    | LT [a-z]+ '://' ~[ ]+ GT
    ;

QUOT: '\'';
DQUOT: '"';
LPAREN: '(';
RPAREN: ')';
LACCOL: '{';
RACCOL: '}';
LBRACK: '[';
RBRACK: ']';
BACKTICK: '`';
DOLLAR: '$';
LT: '<';
GT: '>';

DOT: '.';
QMARK: '?';
EMARK: '!';
ELLIPS: '…';

COMMA: ',';
COLON: ':';
SEMICOLON: ';';

fragment WORD_START: ~[ \t\n.?!…,:;{}[\]()'"`\\] | ESCAPED_CHAR;
fragment WORD_CHAR: ~[ \t\n.?!…,:;{}[\]()\\] | ESCAPED_CHAR;
fragment WORD_END: ~[ \t\n.?!…,:;{}[\]()'"`\\] | ESCAPED_CHAR;

SMILEY
 : [:;] '-'? [)|(pD]
 | '8-)'
 ;


fragment ESCAPED_CHAR: '\\' .;

fragment SPACE : '\t' | ' ' | '\r' | '\n'| '\u000C';

WS: SPACE+ -> skip;
