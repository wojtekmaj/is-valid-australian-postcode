import { describe, expect, it } from 'vitest';
import isValidAustralianPostcode from './index.js';

describe('isValidAustralianPostcode', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidAustralianPostcode();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidAustralianPostcode('fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidAustralianPostcode('999fox');

    expect(result).toBe(false);
  });

  it('returns false for too short input', () => {
    const result = isValidAustralianPostcode('12');

    expect(result).toBe(false);
  });

  it('returns false for too long input', () => {
    const result = isValidAustralianPostcode('12456');

    expect(result).toBe(false);
  });

  it.each`
    input    | expectedResult
    ${0}     | ${false}
    ${199}   | ${false}
    ${200}   | ${true}
    ${300}   | ${false}
    ${799}   | ${false}
    ${800}   | ${true}
    ${899}   | ${true}
    ${900}   | ${true}
    ${999}   | ${true}
    ${1000}  | ${true}
    ${2999}  | ${true}
    ${3000}  | ${true}
    ${3999}  | ${true}
    ${4000}  | ${true}
    ${4999}  | ${true}
    ${5000}  | ${true}
    ${5799}  | ${true}
    ${5800}  | ${true}
    ${5999}  | ${true}
    ${6000}  | ${true}
    ${6799}  | ${true}
    ${6800}  | ${true}
    ${6999}  | ${true}
    ${7000}  | ${true}
    ${7799}  | ${true}
    ${7800}  | ${true}
    ${7999}  | ${true}
    ${8000}  | ${true}
    ${8999}  | ${true}
    ${9000}  | ${true}
    ${9999}  | ${true}
    ${10000} | ${false}
  `('returns $expectedResult for $input (postcodes as numbers)', ({ input, expectedResult }) => {
    const result = isValidAustralianPostcode(input);

    expect(result).toBe(expectedResult);
  });

  it.each`
    input      | expectedResult
    ${'0000'}  | ${false}
    ${'0199'}  | ${false}
    ${'0200'}  | ${true}
    ${'0300'}  | ${false}
    ${'0799'}  | ${false}
    ${'0800'}  | ${true}
    ${'0899'}  | ${true}
    ${'0900'}  | ${true}
    ${'0999'}  | ${true}
    ${'1000'}  | ${true}
    ${'2999'}  | ${true}
    ${'3000'}  | ${true}
    ${'3999'}  | ${true}
    ${'4000'}  | ${true}
    ${'4999'}  | ${true}
    ${'5000'}  | ${true}
    ${'5799'}  | ${true}
    ${'5800'}  | ${true}
    ${'5999'}  | ${true}
    ${'6000'}  | ${true}
    ${'6799'}  | ${true}
    ${'6800'}  | ${true}
    ${'6999'}  | ${true}
    ${'7000'}  | ${true}
    ${'7799'}  | ${true}
    ${'7800'}  | ${true}
    ${'7999'}  | ${true}
    ${'8000'}  | ${true}
    ${'8999'}  | ${true}
    ${'9000'}  | ${true}
    ${'9999'}  | ${true}
    ${'10000'} | ${false}
  `(
    'returns $expectedResult for $input (4-digit postcodes as strings)',
    ({ input, expectedResult }) => {
      const result = isValidAustralianPostcode(input);

      expect(result).toBe(expectedResult);
    },
  );

  it.each`
    input    | expectedResult
    ${'000'} | ${false}
    ${'199'} | ${false}
    ${'200'} | ${true}
    ${'300'} | ${false}
    ${'799'} | ${false}
    ${'800'} | ${true}
    ${'899'} | ${true}
    ${'900'} | ${true}
    ${'999'} | ${true}
  `(
    'returns $expectedResult for $input (3-digit postcodes as strings without leading zeros)',
    ({ input, expectedResult }) => {
      const result = isValidAustralianPostcode(input);

      expect(result).toBe(expectedResult);
    },
  );
});
