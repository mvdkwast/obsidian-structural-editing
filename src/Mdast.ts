import { Content, Heading, Root } from 'mdast-util-from-markdown/lib';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { math } from 'micromark-extension-math';
import { mathFromMarkdown } from 'mdast-util-math';
import { gfmTaskListItem } from 'micromark-extension-gfm-task-list-item';
import { gfmTaskListItemFromMarkdown } from 'mdast-util-gfm-task-list-item';
import { gfmTable } from 'micromark-extension-gfm-table';
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table';
import { gfmStrikethrough } from 'micromark-extension-gfm-strikethrough';
import { gfmStrikethroughFromMarkdown } from 'mdast-util-gfm-strikethrough';
import { gfmFootnote } from 'micromark-extension-gfm-footnote';
import { gfmFootnoteFromMarkdown } from 'mdast-util-gfm-footnote';
import { gfmAutolinkLiteral } from 'micromark-extension-gfm-autolink-literal';
import { gfmAutolinkLiteralFromMarkdown } from 'mdast-util-gfm-autolink-literal';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { frontmatter } from 'micromark-extension-frontmatter';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';

import { Pos, Range } from './Pos';
import { Ast, AstNode } from './Ast';

export class Mdast {
    static isInParagraph(ancestors: AstNode[]): boolean {
        for (let i = ancestors.length - 1; i >= 0; --i) {
            if (ancestors[i].type === 'paragraph') {
                return true;
            }
            // @ts-ignore
            if (ancestors[i].type === 'section') {
                // shortcut - we don't  need to look any farther
                return false;
            }
        }

        return false;
    }

    static findParentParagraph(ancestors: AstNode[]): AstNode | undefined {
        for (let i = ancestors.length - 1; i >= 0; --i) {
            if (ancestors[i].type === 'paragraph') {
                return ancestors[i];
            }
            // @ts-ignore
            if (ancestors[i].type === 'section') {
                // shortcut - we don't  need to look any farther
                return undefined;
            }
        }

        return undefined;
    }
}

// @ts-ignore
interface Section extends Parent {
    type: 'section';
    children: [Heading, SectionContent, SubSections];
    position: Range;
}

// @ts-ignore
interface SectionContent extends Parent {
    type: 'section-content';
    children: Content[];
    position: Range;
}

// @ts-ignore
interface SubSections extends Parent {
    type: 'sub-sections';
    children: Content[];
    position: Range;
}

class MarkdownAST {
    constructor(public readonly root: Root) {}

    findNodeWithRange(range: Range): { node: AstNode; ancestors: AstNode[] } {
        return Ast.findNodeWithRange(this.root as AstNode, range);
    }
}

export class MarkdownASTBuilder {
    static parse(markdown: string): MarkdownAST {
        const tree = fromMarkdown(markdown, {
            extensions: [
                math(),
                gfmTaskListItem,
                gfmTable,
                gfmStrikethrough(),
                gfmFootnote(),
                gfmAutolinkLiteral,
                gfm(),
                frontmatter(['yaml']),
            ],
            mdastExtensions: [
                mathFromMarkdown(),
                gfmTaskListItemFromMarkdown,
                gfmTableFromMarkdown,
                gfmStrikethroughFromMarkdown,
                gfmFootnoteFromMarkdown(),
                gfmAutolinkLiteralFromMarkdown,
                gfmFromMarkdown(),
                frontmatterFromMarkdown(['yaml']),
            ],
        });

        // console.log(tree);
        this.nestSections(tree);

        return new MarkdownAST(tree);
    }

    public static nestSections(tree: Root): void {
        for (let depth = 6; depth >= 1; --depth) {
            let currentSection: Section | undefined = undefined;

            for (let i = 0; i < tree.children.length; ++i) {
                if (tree.children[i].type === 'heading') {
                    const heading = tree.children[i] as Heading;
                    if (heading.depth === depth) {
                        const sectionContent: SectionContent = {
                            type: 'section-content',
                            children: [],
                            position: {
                                start: Pos.fromPoint(heading.position!.end),
                                end: Pos.fromPoint(heading.position!.end),
                            },
                        };

                        const subSections: SubSections = {
                            type: 'sub-sections',
                            children: [],
                            position: {
                                start: Pos.fromPoint(heading.position!.end),
                                end: Pos.fromPoint(heading.position!.end),
                            },
                        };

                        currentSection = {
                            type: 'section',
                            // @ts-ignore
                            children: [heading, sectionContent, subSections],
                            position: {
                                start: Pos.fromPoint(heading.position!.start),
                                end: Pos.fromPoint(heading.position!.end),
                            },
                        };

                        // @ts-ignore
                        tree.children[i] = currentSection;
                    } else if (heading.depth < depth) {
                        currentSection = undefined;
                    }
                } else {
                    if (currentSection) {
                        // @ts-ignore
                        if (tree.children[i].type === 'section') {
                            currentSection.children[2].children.push(tree.children[i]);
                        } else {
                            currentSection.children[1].children.push(tree.children[i]);
                        }

                        const end = Pos.fromPoint(tree.children[i].position!.end);
                        currentSection.position.end = end;
                        currentSection.children[1].position.end = end;
                        // @ts-ignore
                        tree.children[i] = undefined;
                    }
                }
            }

            tree.children = tree.children.filter((node: any) => !!node);
        }
    }
}
