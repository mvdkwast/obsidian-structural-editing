import { AstNode } from '../src/Ast';
import { MarkdownASTBuilder } from '../src/Mdast';
import { nodeBuilder, terminalBuilder } from './AstTestUtil';

const root = nodeBuilder('root');
const section = nodeBuilder('section');
const sectionContent = nodeBuilder('section-content');
const subSections = nodeBuilder('sub-sections');
const heading = nodeBuilder('heading');
const paragraph = nodeBuilder('paragraph');

const text = terminalBuilder('text');

describe('Validate Markdown AST', () => {
    /* eslint-disable */
    const cases: Array<[string, string, AstNode]> = [
        [
            'section with no sub-sections',
            '# head\ncontent',
            root(
                '1:1-2:8',
                section(
                    '1:1-2:8',
                    heading(
                        '1:1-1:7',
                        text('1:3-1:7', 'head'),
                    ),
                    sectionContent(
                        '2:1-2:8',
                        paragraph(
                            '2:1-2:8',
                            text('2:1-2:8', 'content'),
                        ),
                    ),
                    subSections(
                        '2:8-2:8',
                    ),
                ),
            ),
        ],
        [
            'full section',
            '# head\ncontent\n## sub',
            root(
                '1:1-3:7',
                section(
                    '1:1-3:7',
                    heading(
                        '1:1-1:7',
                        text('1:3-1:7', 'head'),
                    ),
                    sectionContent(
                        '2:1-2:8',
                        paragraph(
                            '2:1-2:8',
                            text('2:1-2:8', 'content'),
                        ),
                    ),
                    subSections(
                        '3:1-3:7',
                        section(
                            '3:1-3:7',
                            heading(
                                '3:1-3:7',
                                text('3:4-3:7', 'sub'),
                            ),
                            sectionContent(
                                '3:7-3:7'
                            ),
                            subSections(
                                '3:7-3:7'
                            )
                        ),
                    ),
                ),
            ),
        ],
    ];

    test.each(cases)('Markdown AST: %p', (name, markdown, expected) => {
        const tree = MarkdownASTBuilder.parse(markdown);
        expect(tree).toMatchTree(expected);
    });
});
