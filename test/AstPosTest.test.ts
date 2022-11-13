import { AstPosMath } from '../src/AstPos';
import { TestUtil } from './util';
import parseRange = TestUtil.parseRange;
import parsePos = TestUtil.parsePos;

describe('Range comparisons', () => {
    it('should handle multi-line inclusive ranges', () => {
        const range = parseRange('1:8-2:10');

        expect(AstPosMath.inInclusiveRange(parsePos('1:5'), range)).toBeFalsy();
        expect(AstPosMath.inInclusiveRange(parsePos('1:8'), range)).toBeTruthy();
        expect(AstPosMath.inInclusiveRange(parsePos('2:3'), range)).toBeTruthy();
        expect(AstPosMath.inInclusiveRange(parsePos('2:10'), range)).toBeTruthy();
        expect(AstPosMath.inInclusiveRange(parsePos('2:15'), range)).toBeFalsy();
    });
});
