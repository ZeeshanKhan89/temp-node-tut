// commonJS - every file is module (by default)
// modules - encapsulated code (only share minimum)

const names = require('./4-names')
const sayhi = require('./5-utils')
console.log(names)
const data = require('./6-alternative-flavor')
// console.log(data)
require('./7-mind-grenage')
// sayhi('susan')
// sayhi(names.zee)
// sayhi(names.ali)