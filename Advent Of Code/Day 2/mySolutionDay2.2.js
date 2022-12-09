const fs = require("fs");

try {
  const data = fs.readFileSync("./data2.txt", "utf8");
  const lines = data.split("\n");

//  a = "rock";
//  b = "paper";
//  c = "Scissors";

//  x = "lose", "rock";
//  y = "draw", "paper";
//  z = "win", "Scissors";

// 1 for Rock, 2 for Paper, and 3 for Scissors

  const a = "A";
  const b = "B";
  const c = "C";

  const x = "X";
  const y = "Y";
  const z = "Z";

  let sumPlayer = 0;
  for (let i = 0; i < lines.length; i++) {
    const player = (lines[i].split(" "));
    if (player[0] == a && player[1] == x) {
      sumPlayer += 3 + 0;
    } else if (player[0] == a && player[1] == y) {
      sumPlayer += 1 + 3;
    } else if (player[0] == a && player[1] == z) {
      sumPlayer += 2 + 6;
    }
    // b
    else if (player[0] == b && player[1] == x) {
      sumPlayer += 1 + 0;
    } else if (player[0] == b && player[1] == y) {
      sumPlayer += 2 + 3;
    } else if (player[0] == b && player[1] == z) {
      sumPlayer += 3 + 6;
    }
    // c
    else if (player[0] == c && player[1] == x) {
      sumPlayer += 2 + 0;
    } else if (player[0] == c && player[1] == y) {
      sumPlayer += 3 + 3;
    } else if (player[0] == c && player[1] == z) {
      sumPlayer += 1 + 6;
    }
    else {
        sumPlayer += 0;
    }
}
console.log(`result: ${sumPlayer}`);
} catch (err) {
  console.error(err);
}
