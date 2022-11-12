import { Content, Heading, Point, Root } from 'mdast-util-from-markdown/lib';
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

export type MdastNode = {
    position: {
        start: Point;
        end: Point;
    };
    type: string;
    children?: MdastNode[];
    parent?: MdastNode;
};

export class Mdast {
    static inNode(node: MdastNode, pos: Pos) {
        if (!node.position) {
            return false;
        }

        return pos.inRange(Pos.fromPoint(node.position.start), Pos.fromPoint(node.position.end));
    }

    static fillsNode(node: MdastNode, { start, end }: Range): boolean {
        if (!node.position) {
            return false;
        }

        return (
            Pos.fromPoint(node.position.start).compareTo(start) === 0 &&
            Pos.fromPoint(node.position.end).compareTo(end) === 0
        );
    }

    static logPos(pos: { start: Point; end: Point } | undefined) {
        if (pos) {
            const start = pos.start;
            const end = pos.end;
            return `[${start.line}:${start.column}-${end.line}:${end.column}]`;
        } else {
            return '[]';
        }
    }

    static logNode(node: MdastNode) {
        return (
            this.logPos(node.position) +
            ': ' +
            (node.children ? node.children.map((child) => this.logPos(child.position)) : [])
        );
    }

    // adjust node boundaries so they are continuous and fill the parent
    static adjustBoundaries(parent: MdastNode) {
        const startPos = parent.position.start;
        if (!parent.children) {
            return;
        }

        console.log('before', this.logNode(parent));

        const children = parent.children.filter((child) => !!child.position);

        if (!children.length) {
            return;
        }

        // children[0].position.start = parent.position.start;
        // children[children.length - 1].position.end = parent.position.end;

        // for (let i = 0; i < children.length - 1; i++) {
        //     children[i].position.end = children[i + 1].position.start;
        // }

        console.log('after', this.logNode(parent));
    }

    static findNodeWithRange(root: MdastNode, { start, end }: Range): { node: MdastNode; ancestors: MdastNode[] } {
        let currentParent: MdastNode = root;

        const nodeStack: MdastNode[] = [];

        while (true) {
            // console.log(`trying node`, currentParent);
            nodeStack.push(currentParent);

            this.adjustBoundaries(currentParent);
            console.log('looking    in', this.logNode(currentParent));

            const child: MdastNode | undefined = currentParent.children?.find(
                (node) => this.inNode(node, start) && this.inNode(node, end),
            );

            if (!child) {
                // console.log(`no matching child`);
                break;
            }

            if ('children' in child) {
                // console.log(`child with children`);
                currentParent = child;
            } else {
                // console.log(`child with no children`);
                nodeStack.push(child);
                break;
            }
        }

        // move up to the highest node that has the same range as the last node
        const lastNode = nodeStack[nodeStack.length - 1];
        let sameNodeIndex;
        for (sameNodeIndex = nodeStack.length - 2; sameNodeIndex >= 0; --sameNodeIndex) {
            const parentNode = nodeStack[sameNodeIndex];
            if (
                Pos.fromPoint(parentNode.position!.start).equals(Pos.fromPoint(lastNode.position!.start)) &&
                Pos.fromPoint(parentNode.position!.end).equals(Pos.fromPoint(lastNode.position!.end))
            ) {
                //
            } else {
                break;
            }
        }

        return {
            node: { ...nodeStack[sameNodeIndex + 1], parent: nodeStack[Math.max(0, sameNodeIndex)] },
            ancestors: nodeStack.slice(0, Math.max(0, sameNodeIndex + 1)),
        };
    }

    static isInParagraph(ancestors: MdastNode[]): boolean {
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

    static findParentParagraph(ancestors: MdastNode[]): MdastNode | undefined {
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

    findNodeWithRange(range: Range): { node: MdastNode; ancestors: MdastNode[] } {
        return Mdast.findNodeWithRange(this.root as MdastNode, range);
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
