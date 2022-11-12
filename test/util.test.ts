import { Pos } from '../src/Pos';
import { TestUtil } from './util';
import getSelection = TestUtil.getSelection;
import parseRange = TestUtil.parseRange;
import renderSelection = TestUtil.renderSelection;

// test the helper function
describe('getSelection (meta)', () => {
    const cases = [
        // ['test'],
        ['te|st', '1:3-'],
        ['te|s|t', '1:3-1:4'],
        ['|test|', '1:1-1:5'],
        ['|test\ntest|', '1:1-2:5'],
        ['test|\n|test', '1:5-2:1'],
        ['tes|t\nt|est', '1:4-2:2'],
    ];

    test.each(cases)('given text %p it should return selection %p', (text, expected) => {
        const selection = getSelection(text);
        expect(selection).toMatchRange(expected);
    });
});

describe('renderSelection (meta)', () => {
    const cases = [
        ['test', '1:1-1:5', '|test|'],
        ['test', '1:2-1:4', 't|es|t'],
        ['test\nmore', '1:2-2:2', 't|est\nm|ore'],
    ];

    test.each(cases)('given text %p and selection %p it should render %p', (text, selection, expected) => {
        const { start, end } = parseRange(selection);
        if (!start || !end) {
            throw Error('range start and end cannot be empty');
        }

        const rendered = renderSelection(text, { start: Pos.fromPoint(start), end: Pos.fromPoint(end) });
        expect(rendered).toBe(expected);
    });
});
