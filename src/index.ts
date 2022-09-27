const regExp = /^[0-9]{3,4}$/;

export default function isValidAustralianPostcode(rawPostcode: string | number): boolean {
  if (!rawPostcode || !regExp.test(rawPostcode.toString())) {
    return false;
  }

  const numPostcode = Number(rawPostcode);

  if (numPostcode < 200 || (numPostcode >= 300 && numPostcode <= 799) || numPostcode > 9999) {
    return false;
  }

  return true;
}
