import {fromMarkdown} from 'mdast-util-from-markdown'
import {math} from 'micromark-extension-math'
import {mathFromMarkdown} from 'mdast-util-math'
import {gfmTaskListItem} from 'micromark-extension-gfm-task-list-item'
import {gfmTaskListItemFromMarkdown} from 'mdast-util-gfm-task-list-item'
import {gfmTable} from 'micromark-extension-gfm-table'
import {gfmTableFromMarkdown} from 'mdast-util-gfm-table'
import {gfmStrikethrough} from 'micromark-extension-gfm-strikethrough'
import {gfmStrikethroughFromMarkdown} from 'mdast-util-gfm-strikethrough'
import {gfmFootnote} from 'micromark-extension-gfm-footnote'
import {gfmFootnoteFromMarkdown} from 'mdast-util-gfm-footnote'
import {gfmAutolinkLiteral} from 'micromark-extension-gfm-autolink-literal'
import {gfmAutolinkLiteralFromMarkdown} from 'mdast-util-gfm-autolink-literal'
import {gfm} from 'micromark-extension-gfm'
import {gfmFromMarkdown} from 'mdast-util-gfm'
import {frontmatter} from 'micromark-extension-frontmatter'
import {frontmatterFromMarkdown} from 'mdast-util-frontmatter'
// import {syntaxTree} from '@codemirror/language';
import {Editor, EditorPosition, MarkdownView, Plugin} from 'obsidian';
import {Content, Heading, Parent, Point, Root} from 'mdast-util-from-markdown/lib'
import {Node as SimpleTextNode, SimpleText} from "./SimpleText";

type CopyDocumentAsHTMLSettings = {
	/** If set svg are converted to bitmap */
	convertSvgToBitmap: boolean;
}

const DEFAULT_SETTINGS: CopyDocumentAsHTMLSettings = {
	convertSvgToBitmap: true
}

// 1-based
class Pos {
	line: number;
	column: number;

	constructor(line: number, column: number) {
		this.line = line;
		this.column = column;
	}

	static fromEditorPosition(pos: EditorPosition): Pos {
		return new Pos(pos.line + 1, pos.ch + 1);
	}

	toEditorPosition(): EditorPosition {
		return {
			line: this.line - 1,
			ch: this.column - 1
		}
	}

	static fromPoint(pos: Point): Pos {
		return new Pos(pos.line, pos.column);
	}

	compareTo(other: Pos): number {
		if (this.line < other.line) {
			return -1;
		}
		if (this.line > other.line) {
			return 1;
		}
		if (this.column < other.column) {
			return -1;
		}
		if (this.column > other.column) {
			return 1;
		}
		return 0;
	}

	equals(other: Pos): boolean {
		return this.compareTo(other) === 0;
	}

	inRange(start: Pos, end: Pos): boolean {
		return this.compareTo(start) >= 0 && this.compareTo(end) <= 0;
	}

	static order(a: Pos, b: Pos): Range {
		if (a.compareTo(b) <= 0) {
			return {
				start: a,
				end: b
			};
		} else {
			return {
				start: b,
				end: a
			}
		}
	}

	minus(other: Pos) : Pos {
		return new Pos(this.line - other.line, this.column - other.column);
	}

	plus(other: Pos) : Pos {
		return new Pos(this.line + other.line, this.column - other.column);
	}


}

type Range = {
	start: Pos,
	end: Pos
}

type MdastNode = {
	position: {
		start: Point,
		end: Point
	};
	type: string;
	children?: MdastNode[];
	parent?: MdastNode;
};

class Mdast {
	static inNode(node: MdastNode, pos: Pos) {
		if (!node.position) {
			return false;
		}

		return pos.inRange(Pos.fromPoint(node.position.start), Pos.fromPoint(node.position.end));
	}

	static fillsNode(node: MdastNode, {start, end}: Range): boolean {
		if (!node.position) {
			return false;
		}

		return Pos.fromPoint(node.position.start).compareTo(start) === 0
			&& Pos.fromPoint(node.position.end).compareTo(end) === 0;
	}

	static findNodeWithRange(root: MdastNode, {start, end}: Range): { node: MdastNode, ancestors: MdastNode[] } {
		let currentParent: MdastNode = root;

		const nodeStack: MdastNode[] = [];

		while (true) {
			// console.log(`trying node`, currentParent);
			nodeStack.push(currentParent);

			const child: MdastNode | undefined = currentParent.children
				?.find((node) => this.inNode(node, start) && this.inNode(node, end));

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
			if (Pos.fromPoint(parentNode.position!.start).equals(Pos.fromPoint(lastNode.position!.start))
				&& Pos.fromPoint(parentNode.position!.end).equals(Pos.fromPoint(lastNode.position!.end))) {
				//
			} else {
				break;
			}
		}

		return {
			node: {...nodeStack[sameNodeIndex + 1], parent: nodeStack[Math.max(0, sameNodeIndex)]},
			ancestors: nodeStack.slice(0, Math.max(0, sameNodeIndex + 1))
		}
	}
}

function isInParagraph(ancestors: MdastNode[]): boolean {
	for (let i=ancestors.length-1; i >= 0; --i) {
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

class Antlr {
	static inNode(node: SimpleTextNode, pos: Pos) {
		if (node.start?.line === undefined || node.end?.line === undefined) {
			return false;
		}

		return pos.inRange(Pos.fromPoint(node.start as Point), Pos.fromPoint(node.end as Point));
	}

	static fillsNode(node: SimpleTextNode, {start, end}: Range): boolean {
		if (node.start?.line === undefined || node.end?.line === undefined) {
			return false;
		}

		return Pos.fromPoint(node.start as Point).compareTo(start) === 0
			&& Pos.fromPoint(node.end as Point).compareTo(end) === 0;
	}

	static findNodeWithRange(root: SimpleTextNode, {start, end}: Range): { node: SimpleTextNode, ancestors: SimpleTextNode[] } {
		let currentParent: SimpleTextNode = root;

		const nodeStack: SimpleTextNode[] = [];

		while (true) {
			console.log(`trying node`, currentParent);
			nodeStack.push(currentParent);

			// FIXME: we also need to check whether we are in a "gap", ie. between two  nodes. In that case consider
			//        we are in the first node. Do the same for the markdown version. This avoids selecting "up" too fast
			const child: SimpleTextNode | undefined = currentParent.children?.find((node) =>
				this.inNode(node, start) && this.inNode(node, end));

			if (!child) {
				console.log(`no matching child`);
				break;
			}

			if ('children' in child) {
				console.log(`child with children`);
				currentParent = child;
			} else {
				console.log(`child with no children`);
				nodeStack.push(child);
				break;
			}
		}

		// move up to the highest node that has the same range as the last node
		const lastNode = nodeStack[nodeStack.length - 1];
		let sameNodeIndex;
		for (sameNodeIndex = nodeStack.length - 2; sameNodeIndex >= 0; --sameNodeIndex) {
			const parentNode = nodeStack[sameNodeIndex];
			if (Pos.fromPoint(parentNode.start as Point).equals(Pos.fromPoint(lastNode.start as Point))
				&& Pos.fromPoint(parentNode.end as Point).equals(Pos.fromPoint(lastNode.end as Point))) {
				//
			} else {
				break;
			}
		}

		return {
			node: nodeStack[sameNodeIndex + 1],
			ancestors: nodeStack.slice(0, Math.max(0, sameNodeIndex + 1))
		}
	}
}


// @ts-ignore
interface Section extends Parent {
	type: 'section';
	children: [Heading, SectionContent];
	position: Range;
}

// @ts-ignore
interface SectionContent extends Parent {
	type: 'section-content';
	children: Content[];
	position: Range;
}

function nestSections(tree: Root): void {
	for (let depth = 6; depth >= 1; --depth) {
		let currentSection: Section | undefined = undefined;

		for (let i = 0; i < tree.children.length; ++i) {
			if (tree.children[i].type === 'heading') {
				let heading = tree.children[i] as Heading;
				if (heading.depth === depth) {
					const sectionContent: SectionContent = {
						type: 'section-content',
						children: [],
						position: {
							start: Pos.fromPoint(heading.position!.end),
							end: Pos.fromPoint(heading.position!.end)
						}
					}

					currentSection = {
						type: 'section',
						// @ts-ignore
						children: [heading, sectionContent],
						position: {
							start: Pos.fromPoint(heading.position!.start),
							end: Pos.fromPoint(heading.position!.end)
						}
					}

					// @ts-ignore
					tree.children[i] = currentSection;
				} else if (heading.depth < depth) {
					currentSection = undefined;
				}
			} else {
				if (currentSection) {
					currentSection.children[1].children.push(tree.children[i])

					let end = Pos.fromPoint(tree.children[i].position!.end);
					currentSection.position.end = end;
					currentSection.children[1].position.end = end;
					// @ts-ignore
					tree.children[i] = undefined;
				}
			}
		}

		tree.children = tree.children.filter(node => !!node);
	}
}


export default class CopyDocumentAsHTMLPlugin extends Plugin {
	settings: CopyDocumentAsHTMLSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
				id: 'grow-selection',
				name: 'Grow selection',
				editorCallback: async (editor: Editor, view: MarkdownView) => {
					// // @ts-ignore
					// console.log(editor)
					//
					// // @ts-ignore
					// syntaxTree(editor.cm.viewState.state)
					// 	.iterate({
					// 		enter: (node: any) => {
					// 			console.log(node);
					// 		}
					// 	})

					const tree = fromMarkdown(view.data, {
						extensions: [
							math(),
							gfmTaskListItem,
							gfmTable,
							gfmStrikethrough(),
							gfmFootnote(),
							gfmAutolinkLiteral,
							gfm(),
							frontmatter(['yaml'])
						],
						mdastExtensions: [
							mathFromMarkdown(),
							gfmTaskListItemFromMarkdown,
							gfmTableFromMarkdown,
							gfmStrikethroughFromMarkdown,
							gfmFootnoteFromMarkdown(),
							gfmAutolinkLiteralFromMarkdown,
							gfmFromMarkdown(),
							frontmatterFromMarkdown(['yaml'])
						]
					});

					// console.log(tree);
					nestSections(tree);

					const {head, anchor} = editor.listSelections()[0];
					const range = Pos.order(Pos.fromEditorPosition(head), Pos.fromEditorPosition(anchor));
					console.log('selection start', range.start);
					console.log('selection end', range.end);

					let result = Mdast.findNodeWithRange(tree as MdastNode, range);
					let nodeWithSelection = result.node;
					console.log(result.ancestors.map(a => a.type));

					if ((nodeWithSelection.type === 'paragraph' && !Mdast.fillsNode(nodeWithSelection, range))
						|| isInParagraph(result.ancestors))
					{
						// get paragraph ancestor (refactor to include check above)
						let paragraphNode = nodeWithSelection;
						for (let i=result.ancestors.length-1; i>=0; --i) {
							if (result.ancestors[i].type === 'paragraph') {
								paragraphNode = result.ancestors[i];
							}
						}

						// in document coordinates
						const paragraphRange = {
							start: paragraphNode.position!.start,
							end: paragraphNode.position!.end
						};

						console.log('==================== Using sub-parser ==================== ');
						console.log('paragraph start', paragraphRange.start);
						console.log('paragraph end', paragraphRange.end);

						const text = view.data.substring(paragraphRange.start.offset!, paragraphRange.end!.offset)
						console.log(text);

						const tree: SimpleTextNode = SimpleText.parse(text);
						console.log(tree);

						// translate selection into paragraph coordinates (make selection relative to text)
						const mappedSelection = {
							start: range.start.minus(Pos.fromPoint(paragraphRange.start)),
							end: range.end.minus(Pos.fromPoint(paragraphRange.start))
						};
						mappedSelection.start.line++;
						mappedSelection.end.line++;
						mappedSelection.start.column++;
						mappedSelection.end.column++;

						console.log(`mapped selection:`, mappedSelection);

						// find node in range
						let antlrTree = Antlr.findNodeWithRange(tree, mappedSelection);
						console.log('antlr result node', antlrTree);

						// if we don't fill it grow to fill it
						// else select parent
						let textNode: SimpleTextNode = antlrTree.node;
						if (Antlr.fillsNode(nodeWithSelection, range)) {
							console.log('selection already fills the node, growing !')
							textNode = antlrTree.ancestors[antlrTree.ancestors.length - 1];
						}

						console.log(`selecting`, textNode);
						console.log(`selecting text ${textNode.text}`);

						console.log('new selection start', textNode.start);
						console.log('new selection end', textNode.end);

						const remappedSelection = {
							start: {
								line: paragraphRange.start.line - 1 + textNode.start!.line - 1,
								ch: paragraphRange.start.column - 1 + textNode.start!.column - 1,
							},
							end: {
								line: paragraphRange.start.line - 1 + textNode.end!.line - 1 ,
								ch: paragraphRange.start.column -1 + textNode.end!.column
							}
						}

						console.log('mapped selection start', remappedSelection.start);
						console.log('mapped selection end', remappedSelection.end);

						editor.setSelection(remappedSelection.start, remappedSelection.end);
					}
					else {
						// If node is an unfilled paragraph or paragraph content (text, emphasis, ...)

						if (Mdast.fillsNode(nodeWithSelection, range) && nodeWithSelection.parent) {
							console.log('node is filled, selecting parent');
							nodeWithSelection = nodeWithSelection.parent;
						}

						console.log(`filling node of type ${nodeWithSelection.type}`);

						editor.setSelection(
							Pos.fromPoint(nodeWithSelection.position!.start).toEditorPosition(),
							Pos.fromPoint(nodeWithSelection.position!.end).toEditorPosition());
					}

					// let child: Element = tree.children[0];

					// editor.getLine(head.line);
					// console.log(head);

					// console.log(markdownit);
					// @ts-ignore
					// const result = marked.lexer(view.data, {
					// 	gfm: false,
					// })
					// console.log(result);
				}
			}
		);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
