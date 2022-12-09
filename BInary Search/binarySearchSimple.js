// //const myArray = [2, 4, 5, 6, 8, 10, 12, 14, 16];
const myArray = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

// let doSearch2 = function MyfirstBinarySearch(array, target) {
//     while( min <= max ){
//         let guess = Math.floor((min + max)/2);
//         console.log(guess);
//         if(array[guess] === target) return guess;
//         (array[guess] > target) ? max = guess - 1: min = guess + 1;
//     }
//     return -1
// }

// function doSearch(array, target) {
//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//    let middle = Math.floor((min + max)/2);
//     if(array[middle] === target) return middle;
//     if (array[middle] < target) {
//         min = middle;
//     } else {
//         max = middle - 1
//     }
//     console.log(min)
//   }

//   return -1;
// }

function doSearch(array, target) {
  let min = 0;
  let max = array.length - 1;

  for (let i = min; i < max; i++) {
    let middle = Math.round((min + max) / 2);
    if (array[middle] == target) {
      return middle;
    }
    if (array[middle] < target) {
      min = middle + 1;
      //console.log(array[middle], array[min]);
    } else {
      max = middle;
    }
    console.log(array[middle])
  }
  return -1;
}

console.log(doSearch(myArray, 31));

// const myArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// function findBinary(arr, neddle) {
//     var min = 0,
//     max = arr.length - 1;
//     while (min <= max){
//     var guess = Math.floor((min+max) / 2);
//     if (arr[guess] === neddle ) return guess;
//     (arr[guess] < neddle) ? min = guess + 1 : max = guess - 1;
//     console.log(min)
//     }
//     return -1;
// }

// findBinary(myArray, 83)
