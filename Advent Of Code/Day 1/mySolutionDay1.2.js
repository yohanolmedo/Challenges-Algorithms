const fs = require("fs");

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  const lines = data.split("\n");

  const numsArray = lines.map((num) => parseInt(num, 10));

  let acumulator = 0;
  let arrayOfNumbers = [];
  for (let i = 0; i < numsArray.length; i++) {
    let number = numsArray[i];
    if (!isNaN(number)) {
      acumulator += numsArray[i];
    } else {
      arrayOfNumbers.push(acumulator);
      acumulator = 0;
    }
  }

  arrayOfNumbers.sort((a,b) => {return  b - a})
  let finalSum = arrayOfNumbers[0] + arrayOfNumbers[1] + arrayOfNumbers[2];

  console.log(arrayOfNumbers, finalSum);
} catch (err) {
  console.error(err);
}