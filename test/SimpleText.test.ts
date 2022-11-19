import type { AstNode } from '../src/Ast';
import { SimpleText } from '../src/SimpleText';
import { nodeBuilder, terminalBuilder } from './AstTestUtil';

const paragraph = nodeBuilder('paragraph');
const sentence = nodeBuilder('sentence');
const sentenceAndPunctuation = nodeBuilder('sentence-and-punctuation');
const proposition = nodeBuilder('proposition');
const propositionAndPunctuation = nodeBuilder('proposition-and-punctuation');
const expression = nodeBuilder('expression');

const word = terminalBuilder('word');
const punctuation = terminalBuilder('punctuation');

describe('Validate SimpleText AST structure with positions', () => {
    /* eslint-disable */
    const cases: Array<[string, string, AstNode]> = [
        [
            'word gap',
            'aaa bbb',
            paragraph(
                '1:1-1:7',
                sentenceAndPunctuation(
                    '1:1-1:7',
                    sentence(
                        '1:1-1:7',
                        propositionAndPunctuation(
                            '1:1-1:7',
                            proposition(
                                '1:1-1:7',
                                expression(
                                    '1:1-1:7',
                                    word('1:1-1:3', 'aaa'),
                                    word('1:5-1:7', 'bbb'),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ],
        [
            'line gap',
            'aaa.\nbbb',
            paragraph(
                '1:1-2:3',
                sentenceAndPunctuation(
                    `1:1-1:4`,
                    sentence(
                        `1:1-1:3`,
                        propositionAndPunctuation(
                            `1:1-1:3`,
                            proposition(
                                '1:1-1:3',
                                expression(
                                    `1:1-1:3`,
                                    word(`1:1-1:3`, 'aaa'),
                                )
                            ),
                        ),
                    ),
                    punctuation('1:4-1:4', '.')
                ),
                sentenceAndPunctuation(
                    '2:1-2:3',
                    sentence(
                        '2:1-2:3',
                        propositionAndPunctuation(
                            '2:1-2:3',
                            proposition(
                                '2:1-2:3',
                                expression(
                                    '2:1-2:3',
                                    word('2:1-2:3', 'bbb'),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ],
    ];

    test.each(cases)('SimpleTestAST: %p', (name, markdown, expected) => {
        const tree = SimpleText.parse(markdown);
        expect(tree).toMatchTree(expected);
    });
});
