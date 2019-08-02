Transforms strings to UNDERSCORE_CASE notation.

### Installation

```
$ npm install underscore_case
```

or

```
$ yarn add underscore_case --save
```

## Usage

```js
// result: TEST_VALUE
const newString = underscoreCase('testValue')
```

## Transformation examples

```js
underscoreCase('testValue')       // result: TEST_VALUE
underscoreCase('-testValue')      // result: TEST_VALUE
underscoreCase('_testValue')      // result: TEST_VALUE
underscoreCase('test Value')      // result: TEST_VALUE
underscoreCase('test value')      // result: TEST_VALUE
underscoreCase('test  value')     // result: TEST_VALUE
underscoreCase('test-value')      // result: TEST_VALUE
underscoreCase('test--value')     // result: TEST_VALUE
underscoreCase('test -value')     // result: TEST_VALUE
underscoreCase('test_value')      // result: TEST_VALUE
underscoreCase('test__value')     // result: TEST_VALUE
underscoreCase('test_Value')      // result: TEST_VALUE
underscoreCase('testValue-')      // result: TEST_VALUE
underscoreCase('testValue ')      // result: TEST_VALUE
underscoreCase('1testValue ')     // result: 1_TEST_VALUE
underscoreCase('1test2Value ')    // result: 1_TEST2_VALUE
underscoreCase('123testValue ')   // result: 123_TEST_VALUE
```