import { validateEmail } from '../validations';

describe('Email validator', () => {
	it('Returns true if value is correct', () => {
		expect(validateEmail('test@test.com')).toBeTruthy();
		expect(validateEmail('abc@abc.com.net')).toBeTruthy();
		expect(validateEmail('abc.abc@abc.lt')).toBeTruthy();
	});
	it('Returns false if value is incorrect', () => {
		expect(validateEmail('@abc.lt')).toBeFalsy();
		expect(validateEmail('abc@.lt')).toBeFalsy();
		expect(validateEmail('abcabc.lt')).toBeFalsy();
	});
});
