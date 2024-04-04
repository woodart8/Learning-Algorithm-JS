const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const maps = input.slice(1).map((map) => map.split(' ').map(Number));

const visited = new Array(n).fill(0).map(() => new Array(m).fill(0));
const answer = new Array(n).fill(0).map(() => new Array(m).fill(0));

const getAnswer = () => {
  for (const i in maps) {
    for (const j in maps[i]) {
      if (maps[i][j] === 2) {
        return [+i, +j];
      }
    }
  }
};

const bfs = (start) => {
  const [y, x] = start;
  visited[y][x] = 1;

  const queue = [];
  queue.push(start);

  while (queue.length) {
    const cur = queue.shift();
    const [y, x] = cur;
    const d = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];

    for (const item of d) {
      const [dx, dy] = item;
      if (
        x + dx >= 0 &&
        x + dx < m &&
        y + dy >= 0 &&
        y + dy < n &&
        maps[y + dy][x + dx]
      ) {
        if (!visited[y + dy][x + dx]) {
          answer[y + dy][x + dx] = answer[y][x] + 1;
          queue.push([y + dy, x + dx]);
          visited[y + dy][x + dx] = 1;
        }
      }
    }
  }
};

const start = getAnswer();
bfs(start);
answer.forEach((line, i) => {
  line.forEach((spot, j) => {
    if (!spot && maps[i][j] === 1) {
      answer[i][j] = -1;
    }
  });
  console.log(line.join(' '));
});