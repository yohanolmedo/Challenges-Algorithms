const fs = require("fs");

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  const lines = data.split("\n");

  function genCharArray(charA, charZ) {
    let a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; i++) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }

  let alphaArray = genCharArray("a", "z").concat(genCharArray("A", "Z"));
  let repeatedArrays = [];

  // function repeatedLetters(word1, word2) {
  //   for (let i = 0; i < word1.length; i++) {
  //     if (word2.indexOf(word1[i]) !== -1) {
  //       repeatedArrays.push(word1[i]);
  //     }
  //   }
  // }

  function letterToPriority(letter) {
    if (/[a-z]/.test(letter)) {
      //lowercase
      return letter.charCodeAt(0) - 96;
    } else {
      return letter.charCodeAt(0) - 65 + 27;
    }
  }
  let acumulator = 0;
  for (let i = 0; i < lines.length; i++) {
    let letters = lines[i].split('');
    //console.log(letters);
    const middle = Math.round(letters.length / 2);
    let firstSubstring = letters.slice(0, middle);
    //let firstSubstring = [...letters]
    let secondSubstring = letters.slice(middle);

    let firstSubstringSet = [...new Set(firstSubstring)];
    let intersection = secondSubstring.filter((x) => firstSubstringSet.includes(x))
    console.log(intersection);
    //const instersection = secondSubstring.filter((x) => firstSubstringSet.has(x));
    //console.log(firstSubstring, secondSubstring);
    if(intersection.length != 0) {
      acumulator += (letterToPriority(intersection.join("")))
    }
  }

  console.log(acumulator);
  let setRepeatedArrays = new Set(repeatedArrays);
  //console.log(repeatedArrays);

  let lettersSum = 0;

  setRepeatedArrays.forEach(letter => {
    let index = alphaArray.indexOf(letter) + 1;
    //console.log(index)
    lettersSum += index;
  })

  //console.log(setRepeatedArrays)

  //console.log(lettersSum); ;
  
} catch (err) {
  console.error(err);
}

//https://github.com/tpatel/advent-of-code-2022/blob/main/day03.mjs