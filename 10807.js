const fs = require("fs");
//const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let arr = input[1].split(' ').map(x => Number(x));
let answer = 0;

arr.forEach(e => {
    if(e === Number(input[2])) answer++;
})

console.log(answer);

