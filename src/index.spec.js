import isValidAustralianPostcode from './index';

describe('isValidAustralianPostcode', () => {
  it('returns false for no input', () => {
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
    ${200}   | ${true} // ACT
    ${300}   | ${false}
    ${799}   | ${false}
    ${800}   | ${true} // NT
    ${899}   | ${true}
    ${900}   | ${true} // NT - LVRs & PO
    ${999}   | ${true}
    ${1000}  | ${true} // NSW
    ${2999}  | ${true}
    ${3000}  | ${true} // VIC
    ${3999}  | ${true}
    ${4000}  | ${true} // QLD
    ${4999}  | ${true}
    ${5000}  | ${true} // SA
    ${5799}  | ${true}
    ${5800}  | ${true} // SA - LVRs & PO
    ${5999}  | ${true}
    ${6000}  | ${true} // WA
    ${6799}  | ${true}
    ${6800}  | ${true} // WA - LVRs & PO
    ${6999}  | ${true}
    ${7000}  | ${true} // TAS
    ${7799}  | ${true}
    ${7800}  | ${true} // TAS - LVRs & PO
    ${7999}  | ${true}
    ${8000}  | ${true} // VIC - LVRs & PO
    ${8999}  | ${true}
    ${9000}  | ${true} // QLD - LVRs & PO
    ${9999}  | ${true}
    ${10000} | ${false}
  `('returns $expectedResult for $input (postcodes as numbers)',
  ({ input, expectedResult }) => {
    const result = isValidAustralianPostcode(input);

    expect(result).toBe(expectedResult);
  });

  it.each`
    input      | expectedResult
    ${'0000'}  | ${false}
    ${'0199'}  | ${false}
    ${'0200'}  | ${true} // ACT
    ${'0300'}  | ${false}
    ${'0799'}  | ${false}
    ${'0800'}  | ${true} // NT
    ${'0899'}  | ${true}
    ${'0900'}  | ${true} // NT - LVRs & PO
    ${'0999'}  | ${true}
    ${'1000'}  | ${true} // NSW
    ${'2999'}  | ${true}
    ${'3000'}  | ${true} // VIC
    ${'3999'}  | ${true}
    ${'4000'}  | ${true} // QLD
    ${'4999'}  | ${true}
    ${'5000'}  | ${true} // SA
    ${'5799'}  | ${true}
    ${'5800'}  | ${true} // SA - LVRs & PO
    ${'5999'}  | ${true}
    ${'6000'}  | ${true} // WA
    ${'6799'}  | ${true}
    ${'6800'}  | ${true} // WA - LVRs & PO
    ${'6999'}  | ${true}
    ${'7000'}  | ${true} // TAS
    ${'7799'}  | ${true}
    ${'7800'}  | ${true} // TAS - LVRs & PO
    ${'7999'}  | ${true}
    ${'8000'}  | ${true} // VIC - LVRs & PO
    ${'8999'}  | ${true}
    ${'9000'}  | ${true} // QLD - LVRs & PO
    ${'9999'}  | ${true}
    ${'10000'} | ${false}
  `('returns $expectedResult for $input (4-digit postcodes as strings)',
  ({ input, expectedResult }) => {
    const result = isValidAustralianPostcode(input);

    expect(result).toBe(expectedResult);
  });

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
  `('returns $expectedResult for $input (3-digit postcodes as strings without leading zeros)',
  ({ input, expectedResult }) => {
    const result = isValidAustralianPostcode(input);

    expect(result).toBe(expectedResult);
  });
});
