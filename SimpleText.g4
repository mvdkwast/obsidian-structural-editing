grammar SimpleText;

paragraph
 : (sentence)*
 ;

sentence
  : proposition+ endPunctuation?
  ;

proposition
  : (word | expression)+ midPunctuation?
  ;

midPunctuation
  : COMMA
  | COLON
  | SEMICOLON
  ;

endPunctuation
  : DOT+
  | QUESTION_MARK
  | EXCLAMATION_MARK
  ;

word
  : Word
  | Smiley
  | Url
  ;

expression
  : LPAREN sentence* RPAREN
  | QUOTE sentence* QUOTE
  | DQUOTE sentence* DQUOTE
  | LBRACK sentence* RBRACK
  | LACCOL sentence* RACCOL
  ;

Word
 : ~([ \t\r\n\u000C?!.()[\]{},;"])* ~([ \t\r\n\u000C?!.()[\]{},:;"'])+
 ;

Smiley
 : SMILEY
 ;

Url
 : 'http' 's'? '://' [a-zA-Z0-9] [a-zA-Z0-9.+-?#/%:+[\]@]+
 ;

DOT : '.' ;
QUESTION_MARK : '?';
EXCLAMATION_MARK : '!';
LPAREN: '(';
RPAREN: ')';
LACCOL: '{';
RACCOL: '}';
LBRACK: '[';
RBRACK: ']';
QUOTE: ' ' '\'' | '\'';
DQUOTE: '"';
COLON: ':';
COMMA: ',';
SEMICOLON: ';';


SMILEY
 : [:;] '-'? [)|(pD] SPACE
 | '8-)' SPACE
 ;

fragment SPACE : '\t' | ' ' | '\r' | '\n'| '\u000C';

WS: SPACE+ -> skip;

//SPACE
// : [ \t\r\n\u000C] -> skip
// ;
