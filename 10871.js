const fs = require("fs");
//const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N,X] = input[0].split(' ').map(x => Number(x));
const arr = input[1].split(' ').map(x => Number(x));

const answer = [];

arr.forEach(e => {
    if(e < X) answer.push(e);
});

console.log(answer.join(' '));