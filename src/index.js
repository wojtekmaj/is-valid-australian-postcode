const regExp = /^[0-9]{3,4}$/;

export default function isValidAustralianPostcode(rawPostcode) {
  if (!rawPostcode || !regExp.test(rawPostcode)) {
    return false;
  }

  const numPostcode = parseInt(rawPostcode, 10);

  if (numPostcode < 200 || (numPostcode >= 300 && numPostcode <= 799) || numPostcode > 9999) {
    return false;
  }

  return true;
}
