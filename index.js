const camelCase = require('camelcase')

const isUpperCase = char =>
  char.toUpperCase() === char && char.toLowerCase() !== char

const underscoreCase = string => camelCase(string)
  .split('')
  .reduce(
    (str, char) => str + (isUpperCase(char) ? '_' : '') + char.toUpperCase(),
    ''
  )

module.exports = underscoreCase
module.exports.default = underscoreCase
