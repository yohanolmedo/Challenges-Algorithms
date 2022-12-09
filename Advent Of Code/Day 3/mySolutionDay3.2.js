const fs = require("fs");

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  const lines = data.split("\n");


  function letterToPriority(letter) {
    if (/[a-z]/.test(letter)) {
      return letter.charCodeAt(0) - 96;
    } else {
      return letter.charCodeAt(0) - 65 + 27;
    }
  }
  let acumulator = 0;
  for (let i = 0; i < lines.length; i++) {
    let letters = lines[i].split('');
    const middle = Math.round(letters.length / 2);
    let firstSubstring = letters.slice(0, middle);
    let secondSubstring = letters.slice(middle);

    let firstSubstringSet = [...new Set(firstSubstring)];
    let intersection = secondSubstring.filter((x) => firstSubstringSet.includes(x))
    if(intersection.length != 0) {
      acumulator += (letterToPriority(intersection.join("")))
    }
  }

  console.log(acumulator);

  
} catch (err) {
  console.error(err);
}

//https://github.com/tpatel/advent-of-code-2022/blob/main/day03.mjs