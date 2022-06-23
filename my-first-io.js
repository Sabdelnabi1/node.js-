const fs = require('fs');

let nope = fs.readFileSync(process.argv[2]);
let str = nope.toString();
let strArray = str.split('\n');

console.log(strArray.length - 1); 