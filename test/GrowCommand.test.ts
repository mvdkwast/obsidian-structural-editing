import { GrowCommand } from '../src/GrowCommand';
import { TestUtil } from './util';
import getSelection = TestUtil.getSelection;
import renderSelection = TestUtil.renderSelection;
import stripSelection = TestUtil.stripSelection;

describe('Grow command (single test for debugging)', () => {
    it('should pass this test', () => {
        const [before, after] = ['|a| \n\nb1', '|a \n\nb1|'];

        const selection = getSelection(before);
        if (!selection || !selection.start) {
            throw Error('test must provide a selection in source text');
        }

        const markdown = stripSelection(before);
        const newSelection = GrowCommand.growSelection(markdown, selection);
        if (!newSelection.start || !newSelection.end) {
            throw Error("Grow command didn't return a valid selection");
        }

        const newText = renderSelection(markdown, newSelection);

        expect(newText).toBe(after);
    });
});

describe('Grow command', () => {
    const cases = [
        // paragraph level
        ['|word', '|word|'],
        ['word|', '|word|'], // FIXME: edge-case, should only be the case if the file only contains one paragraph
        ['wo|rd', '|word|'],
        ['two| words', '|two| words'],
        ['two |words', 'two |words|'],
        ['two wo|rds', 'two |words|'],
        ['two words|', 'two |words|'],
        ['a |test| sentence', '|a test sentence|'],

        // structure level
        ['a\n\n|b1| b2', 'a\n\n|b1 b2|'],
        ['a\n\n|b|', '|a\n\nb|'],
        ['|a| \n\nb1', '|a \n\nb1|'], // space after selected block
        ['# |title\nparagraph', '# |title|\nparagraph'],
        ['# title\npa|ragraph', '# title\n|paragraph|'],
        ['para-1\n|\npara-2', '|para-1|\n\npara-2'],
        ['|para1\n\npara2\n\npara3', '|para1|\n\npara2\n\npara3'],
        ['pa|ra1\n\npara2\n\npara3', '|para1|\n\npara2\n\npara3'],
        ['para1|\n\npara2\n\npara3', '|para1|\n\npara2\n\npara3'],
        ['para1\n|\npara2\n\npara3', '|para1|\n\npara2\n\npara3'],
        ['para1\n\n|para2\n\npara3', 'para1\n\n|para2|\n\npara3'],
        ['para1\n\npa|ra2\n\npara3', 'para1\n\n|para2|\n\npara3'],
        ['para1\n\npara2|\n\npara3', 'para1\n\n|para2|\n\npara3'],
        ['para1\n\npara2\n|\npara3', 'para1\n\n|para2|\n\npara3'],
        ['para1\n\npara2\n\n|para3', 'para1\n\npara2\n\n|para3|'],
        ['para1\n\npara2\n\npara3|', 'para1\n\npara2\n\n|para3|'],
    ];

    test.each(cases)('Grow: %p', (before, after) => {
        const selection = getSelection(before);
        if (!selection || !selection.start) {
            throw Error('test must provide a selection in source text');
        }

        const markdown = stripSelection(before);
        const newSelection = GrowCommand.growSelection(markdown, selection);
        if (!newSelection.start || !newSelection.end) {
            throw Error("Grow command didn't return a valid selection");
        }

        const newText = renderSelection(markdown, newSelection);

        expect(newText).toBe(after);
    });
});
