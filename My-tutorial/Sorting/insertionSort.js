// Sort the following array with Insertion:
const arr = [64, 34, 25, 12, 22, 90, 11];
//const arr = [11, 22, 25, 12, 34, 64, 90];

// function insertionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let nextNumber = i + 1;
//     for (let j = i; j >= 0; j--) {
//       if (array[nextNumber] < array[j]) {
//         [array[j], array[nextNumber]] = [array[nextNumber], array[j]];
//         nextNumber = j;
//       }
//     }
//   }
//   return array;
// }


function insertionSort(array) {
  for(let i=1; i<array.length; i++) {
    let current = array[i];
    let j = i-1;
    while(j>=0 && array[j] > current) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = current;
  }
  return array;
}

console.log(insertionSort(arr));
