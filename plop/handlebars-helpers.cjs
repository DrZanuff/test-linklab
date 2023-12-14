// handlebars-helpers.js
const Handlebars = require('handlebars')

Handlebars.registerHelper('lowerCaseFirst', function (input) {
  return input.charAt(0).toLowerCase() + input.slice(1)
})

module.exports = Handlebars
