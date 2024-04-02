const fs = require('fs')

const inputData = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
let sum = 0;
for(var i=0; i<3; i++) {
    sum += parseInt(inputData[i]);
}
console.log(sum);