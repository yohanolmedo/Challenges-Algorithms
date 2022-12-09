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
    let letters = [...new Set(lines[i].split(''))];
    const firstArray = [...new Set(lines[i])];
    const secondArray = [...new Set(lines[i+1])];
    const thirdArray = [...new Set(lines[i+2])];

    const hasElement = firstArray.some(element => {
      if (secondArray.includes(element) && thirdArray.includes(element)) {        
        acumulator += letterToPriority(element);
      };
    });  
    i = i + 2;
  }

  console.log(acumulator);
  
} catch (err) {
  console.error(err);
}
