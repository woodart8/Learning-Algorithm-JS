const fs = require("fs");
//const input = fs.readFileSync("./input.txt").toString().trim().split(' ');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
const [N,M] = input;
console.log(Math.abs(N-M));

