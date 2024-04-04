const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input[0][Number(input[1])-1]);
