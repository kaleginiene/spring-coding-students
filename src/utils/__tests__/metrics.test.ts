import { convertLbToKg } from '../metrics';

describe('Weight metrics testing', () => {
	it('Converts pounds to kg correctly', () => {
		expect(convertLbToKg(100)).toEqual(45.36);
		expect(convertLbToKg(150)).toEqual(68.04);
	});
});
