const fs = require("fs");

try {
  const data = fs.readFileSync("./data2.txt", "utf8");
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

  const max = Math.max.apply(null, arrayOfNumbers);
  console.log(arrayOfNumbers);
  console.log(`Total: ${max}`);
} catch (err) {
  console.error(err);
}