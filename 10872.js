const fs = require("fs");
//const input = fs.readFileSync("./input.txt").toString().trim();
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(factorial(parseInt(input)));

function factorial(n) {
    if(n === 0) return 1;
    if(n === 1) return 1;
    return n * factorial(n-1);
}