const path = require('path')
const pathSep = path.sep
console.log(pathSep)

const filepath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filepath);

const base = path.basename(filepath)
console.log(base); 

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)