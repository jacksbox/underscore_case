const assert = require('assert');
const underscoreCase = require('./index');

const testCases = {
  'testValue': 'TEST_VALUE',
  '-testValue': 'TEST_VALUE',
  '_testValue': 'TEST_VALUE',
  'test Value': 'TEST_VALUE',
  'test value': 'TEST_VALUE',
  'test  value': 'TEST_VALUE',
  'test-value': 'TEST_VALUE',
  'test--value': 'TEST_VALUE',
  'test -value': 'TEST_VALUE',
  'test_value': 'TEST_VALUE',
  'test__value': 'TEST_VALUE',
  'test_Value': 'TEST_VALUE',
  'testValue-': 'TEST_VALUE',
  'testValue ': 'TEST_VALUE',
  '1testValue ': '1_TEST_VALUE',
  '1test2Value ': '1_TEST2_VALUE',
  '123testValue ': '123_TEST_VALUE',
}

Object.entries(testCases).forEach(([inputValue, expectedResult]) => {
  console.log(inputValue, expectedResult)
  assert.strictEqual(underscoreCase(inputValue), expectedResult);
})

return true
