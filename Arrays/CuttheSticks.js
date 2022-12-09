// Name: Cut the sticks
// Platform: Hackerrank
// My first solution
// Categorie: Sorting
// Level: Easy
// https://www.hackerrank.com/challenges/cut-the-sticks/problem

// Other solutions: https://medium.com/@jayram_manale/hackerrank-31-cut-the-sticks-easy-308010f57829


let array = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
  // Write your code here
  let arrayOutput = [];
  //I order the previous array
  let arrayNumberOrden = arr.sort((a, b) => a - b);
  for (let i = 0; i <= arrayNumberOrden.length - 1; i++) {
    let partialArray = arrayNumberOrden;
    let firstElement = partialArray[i];
    let lastArray = [];

    for (let j = 0; j <= partialArray.length - 1; j++) {
      if (partialArray[j] >= firstElement) {
        lastArray.push(partialArray);
      }
    }
    arrayOutput.push(lastArray.length)
  }

  return [...new Set(arrayOutput)];
}

console.log(cutTheSticks(array));
