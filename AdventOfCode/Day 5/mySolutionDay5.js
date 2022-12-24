const fs = require("fs");

let data2 = {
  1: ["Z", "N"],
  2: ["M", "C", "D"],
  3: ["P"],
};

// let data2 = {
//   1: ["H", "R", "B", "D", "Z", "F", "L", "S"],
//   2: ["T", "B", "M", "Z", "R"],
//   3: ["Z", "L", "C", "H", "N", "S"],
//   4: ["S", "C", "F", "J"],
//   5: ["P", "G", "H", "W", "R", "Z", "B"],
//   6: ["V", "J", "Z", "G", "D", "N", "M", "T"],
//   7: ["G", "L", "N", "W", "F", "S", "P", "Q"],
//   8: ["M", "Z", "R"],
//   9: ["M", "C", "L", "G", "V", "R", "T"],
// };

try {

const data = fs.readFileSync("./data2.txt", "utf8").replace(/\r/g, "").trimEnd();
//const data = fs.readFileSync("./data.txt", "utf8");
  
const [rawStacks] = data.split("\n\n").map((x) => x.split("\n"));

const parsedStacks = rawStacks.map((line) =>
  [...line].filter((value, index) => index % 4 === 1)
);

const indexes = parsedStacks.pop();

const stacks = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      // Add line[i] to the stack indexes[i]
      if (!stacks[indexes[i]]) {
        stacks[indexes[i]] = [];
      }
      stacks[indexes[i]].unshift(line[i]);
    }
  }
}
console.log(stacks);

  function movesStack(move, from, to) {
    const keys = Object.keys(data2);

    let partial = [];
    keys.forEach((key) => {
      if (key == from) {
        const length = move;
        partial = data2[key].splice(data2[key].length - length, length);
        console.log(partial, "partiaaa");

        let partial2 = data2[to].concat(partial.reverse());
        data2[to] = partial2;
        console.log(data2[3], "oeoe");
      }
    });
  }

  // for (let i = 0; i < lines.length - 1; i++) {
  //   let move = lines[i][1];
  //   const from = lines[i][3];
  //   const to = lines[i][5];
  // }

  function lastLetters(array) {
    const keys = Object.keys(data2);
    let arrayPush = [];
    keys.forEach((key, index) => {
      arrayPush.push(data2[key][data2[key].length - 1]);
    });
    console.log(arrayPush, arrayPush.join(""));
  }


  //console.log(lastLetters(data2));
  //console.log(data2);
} catch (err) {
  console.error(err);
}
