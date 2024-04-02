const fs = require("fs");

//const inputData = fs.readFileSync("./input.txt").toString().trim().split(' ');
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

if(a>b) {
    console.log('>');
}
else if(a==b) {
    console.log("==");
}
else {
    console.log('<');
}