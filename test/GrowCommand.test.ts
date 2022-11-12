import { GrowCommand } from '../src/GrowCommand';
import { TestUtil } from './util';
import getSelection = TestUtil.getSelection;
import renderSelection = TestUtil.renderSelection;

describe('Grow command', () => {
    const cases = [
        ['wo|rd', '|word|'],
        ['# |title\nparagraph', '# |title|\nparagraph'],
        ['two| words', '|two| words'],
    ];

    test.each(cases)('Grow: %p', (before, after) => {
        const selection = getSelection(before);
        if (!selection || !selection.start) {
            throw Error('test must provide a selection in source text');
        }

        const newSelection = GrowCommand.growSelection(before, selection);
        if (!newSelection.start || !newSelection.end) {
            throw Error("Grow command didn't return a valid selection");
        }

        const newText = renderSelection(before, newSelection);

        expect(newText).toBe(after);
    });
});
