import { fromMarkdown } from 'mdast-util-from-markdown';
import { Content, Heading, Root } from 'mdast-util-from-markdown/lib';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { gfmAutolinkLiteralFromMarkdown } from 'mdast-util-gfm-autolink-literal';
import { gfmFootnoteFromMarkdown } from 'mdast-util-gfm-footnote';
import { gfmStrikethroughFromMarkdown } from 'mdast-util-gfm-strikethrough';
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table';
import { gfmTaskListItemFromMarkdown } from 'mdast-util-gfm-task-list-item';
import { mathFromMarkdown } from 'mdast-util-math';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';
import { gfmAutolinkLiteral } from 'micromark-extension-gfm-autolink-literal';
import { gfmFootnote } from 'micromark-extension-gfm-footnote';
import { gfmStrikethrough } from 'micromark-extension-gfm-strikethrough';
import { gfmTable } from 'micromark-extension-gfm-table';
import { gfmTaskListItem } from 'micromark-extension-gfm-task-list-item';
import { math } from 'micromark-extension-math';

import { AstNode, AstPos, AstRange } from './Ast';
import { AstPosMath } from './AstPos';

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

    static findAncestorWithLargerRange(node: AstNode, ancestors: AstNode[]): AstNode {
        if (ancestors.length === 0) {
            return node;
        }

        for (let i = ancestors.length - 1; i >= 0; --i) {
            if (
                AstPosMath.compareTo(ancestors[i].position.start!, node.position.start!) < 0 ||
                AstPosMath.compareTo(ancestors[i].position.end!, node.position.end!) > 0
            ) {
                return ancestors[i];
            }
        }

        return ancestors[0];
    }
}

// @ts-ignore
interface Section extends Parent {
    type: 'section';
    children: [Heading, SectionContent, SubSections];
    position: AstRange;
}

// @ts-ignore
interface SectionContent extends Parent {
    type: 'section-content';
    children: Content[];
    position: AstRange;
}

// @ts-ignore
interface SubSections extends Parent {
    type: 'sub-sections';
    children: Content[];
    position: AstRange;
}

export class MarkdownASTBuilder {
    static parse(markdown: string): AstNode {
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

        return tree as AstNode;
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
                                start: heading.position!.end,
                                end: heading.position!.end,
                            },
                        };

                        const subSections: SubSections = {
                            type: 'sub-sections',
                            children: [],
                            position: {
                                start: heading.position!.end,
                                end: heading.position!.end,
                            },
                        };

                        currentSection = {
                            type: 'section',
                            // @ts-ignore
                            children: [heading, sectionContent, subSections],
                            position: {
                                start: heading.position!.start,
                                end: heading.position!.end,
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
                            if (currentSection.children[2].children.length == 0) {
                                currentSection.children[2].position.start = tree.children[i].position?.start as AstPos;
                            }
                            currentSection.children[2].position.end = tree.children[i].position?.end as AstPos;
                            currentSection.children[2].children.push(tree.children[i]);
                        } else {
                            if (currentSection.children[1].children.length == 0) {
                                currentSection.children[1].position.start = tree.children[i].position?.start as AstPos;
                            }
                            currentSection.children[1].position.end = tree.children[i].position?.end as AstPos;
                            currentSection.children[1].children.push(tree.children[i]);

                            // we can only have section-content elements until we have encounter the first sub-section
                            // so don't have to worry about modifying the sub-sections positions.
                            currentSection.children[2].position.start = currentSection.children[1].position.end;
                            currentSection.children[2].position.end = currentSection.children[1].position.end;
                        }

                        currentSection.position.end = tree.children[i].position!.end;
                        // @ts-ignore
                        tree.children[i] = undefined;
                    }
                }
            }

            tree.children = tree.children.filter((node: any) => !!node);
        }
    }
}
