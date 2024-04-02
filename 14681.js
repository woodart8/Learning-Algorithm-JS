const fs = require("fs");

//const inputData = fs.readFileSync("./input.txt").toString().trim().split('\n');
const inputData = fs.readFileSync(0).toString().trim().split('\n');

const [x,y] = inputData;

if(x>0 && y>0) console.log("1");
else if(x>0 && y<0) console.log("4");
else if(x<0 && y>0) console.log("2");
else console.log("3");