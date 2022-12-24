const fs = require("fs");

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  const lines = data.split("\n").map((line) => line.split(""));
  let sum = 0;

  const firstRow = lines[0].join("");
  const lastRow = lines[lines.length - 1].join("");

  function SearchElement(numbers, indexAll) {
    for (i = 0; i < numbers.length; i++) {
      let element;
      if (i > 0 && i < numbers.length - 1) {
        element = numbers[i];
      }

      if (element != null) {
        let indexElement = i;
        switch (true) {
          case searchLeft(element, indexElement, numbers.split("")) > 0:
            sum += 1;
            indexElement++;
            break;
          case searchRight(element, indexElement, numbers.split("")) > 0:
            sum += 1;
            indexElement++;
            break;
          case searchUp(element, indexElement, indexAll) > 0:
            sum += 1;
            indexElement++;
            break;
          case searchDown(element, indexElement, indexAll) > 0:
            sum += 1;
            indexElement++;
            break;
        }        
      }
    }
  }

  function searchLeft(element, indexElement, row) {
    let rowLeft = row.slice(0, indexElement);
    rowLeft.sort((a, b) => b - a);
    return element > rowLeft[0] ? 1 : 0;
  }

  function searchRight(element, indexElement, row) {
    let rowRight = row.slice(indexElement + 1, row.length);
    rowRight.sort((a, b) => b - a);
    return element > rowRight[0] ? 1 : 0;
  }

  function searchUp(element, indexElement, indexAll) {
    let arrayPartial = [];    
    for (let i = 0; i < indexAll; i++) {
      arrayPartial.push(lines[i][indexElement]);
    }
    arrayPartial.sort((a, b) => b - a);
    return element > arrayPartial[0] ? 1 : 0;
  }

  function searchDown(element, indexElement, indexAll) {
    let arrayPartial = [];    
    for (let i = indexAll + 1; i < lines.length; i++) {
      arrayPartial.push(lines[i][indexElement]);
    }
    arrayPartial.sort((a, b) => b - a);
    return element > arrayPartial[0] ? 1 : 0;
  }

  sum += firstRow.length + lastRow.length;
  for (let i = 1; i < lines.length - 1; i++) {
    const elements = lines[i].join("");
    let indexElement = lines.indexOf(lines[i]);
    SearchElement(elements, indexElement);
    sum += elements[0].length + elements[elements.length - 1].length;
  }

  console.log(sum);
} catch (err) {
  console.error(err);
}
