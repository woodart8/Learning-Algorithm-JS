const fs = require("fs");
//const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N,M] = input[0].split(' ').map(x => Number(x));
let matrix1 = [];
let matrix2 = [];

for(let i=1; i<=N; i++) {
    matrix1.push(input[i].split(' ').map(x => Number(x)));
    matrix2.push(input[i+N].split(' ').map(x => Number(x)));
}

for(let i=0; i<N; i++) {
    for(let j=0; j<M; j++) {
        matrix1[i][j] += matrix2[i][j];
    }
}

for(let i=0; i<N; i++) {
    console.log(matrix1[i].join(' '));
}