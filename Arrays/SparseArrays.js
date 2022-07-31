//Level medium

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

// function matchingStrings(strings, queries) {
//     // Write your code here
//     let arrayResults = [];
//     for(let i=0; i<strings.length; i++){
//         let sumPartial = 0;
//         console.log(strings[i]);
//         for(let j=0; j < queries.length; j++){
//             if(queries[j] === strings[i]){
//                 sumPartial += 1;
//             }
//         }
//         arrayResults.push(sumPartial);
//     }
//     return arrayResults;
// }

function matchingStrings(strings, queries) {
  // Write your code here
  let arrayResults = [];

  for (let j = 0; j < queries.length; j++) {
    let sumPartial = 0;
    for (let i = 0; i < strings.length; i++) {
      if (queries[j] === strings[i]) {
        sumPartial += 1;
      }
    }
    arrayResults.push(sumPartial);
  }
  return arrayResults;
}

// let array3 = [10, 11, 3, 20, 5, 10];
// let queries = [11, 5, 10];

let array3 = [10, 11, 3, 20, 5, 10];
let queries = [11, 5, 10];

matchingStrings(array3, queries);
