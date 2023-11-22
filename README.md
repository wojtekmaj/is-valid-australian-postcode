[![npm](https://img.shields.io/npm/v/is-valid-australian-postcode.svg)](https://www.npmjs.com/package/is-valid-australian-postcode) ![downloads](https://img.shields.io/npm/dt/is-valid-australian-postcode.svg) [![CI](https://github.com/wojtekmaj/is-valid-australian-postcode/actions/workflows/ci.yml/badge.svg)](https://github.com/wojtekmaj/is-valid-australian-postcode/actions)

# Is-Valid-Australian-Postcode

Check if a number is a valid Australian postcode.

## tl;dr

- Install by executing `npm install is-valid-australian-postcode` or `yarn add is-valid-australian-postcode`.
- Import by adding `import isValidAustralianPostcode from 'is-valid-australian-postcode'`.
- Use it by writing `const valid = isValidAustralianPostcode('0919')`

## Examples

```ts
isValidAustralianPostcode('0872'); // true

isValidAustralianPostcode(872); // true

isValidAustralianPostcode('0112'); // false

isValidAustralianPostcode('12345'); // false
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
