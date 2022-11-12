import { GrowCommand } from '../src/GrowCommand';
import { TestUtil } from './util';
import getSelection = TestUtil.getSelection;
import renderSelection = TestUtil.renderSelection;
import stripSelection = TestUtil.stripSelection;

describe('Grow command', () => {
    const cases = [
        // paragraph level
        ['wo|rd', '|word|'],
        ['two| words', '|two| words'],

        // structure level
        ['# |title\nparagraph', '# |title|\nparagraph'],
        ['para-1\n|\npara-2', '|para-1|\n\npara-2'],
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
