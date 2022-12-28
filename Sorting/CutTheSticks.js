// Valid Anagram
// Platform: HackerRank
// Categorie: Sorting
// Level: easy
// https://www.hackerrank.com/challenges/cut-the-sticks/problem

const arraySearch = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
  // Write your code here
  let arrayOutput = [];
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
console.log(cutTheSticks(arraySearch));
