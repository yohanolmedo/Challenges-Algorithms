// Sort the following array with Insertion:
const arr = [64, 34, 25, 12, 22, 90, 11];

// //function mergeSort(arr) {
//     if(arr.length == 1) {
//         return arr;
//     } else {
//         let numberSplit = Math.round(arr.length / 2);
//         let leftArray = arr.slice(arr, numberSplit);
//         let rightArray = arr.slice(numberSplit, arr.length);

//         const leftSort = mergeSort(leftArray);
//         const rightSort = mergeSort(rightArray);
//         console.log(leftSort, rightSort, "ss")
//         return merge(leftSort, rightSort)
//     }

//     function merge(left, right) {
//         const result = [];
//         //console.log(left, right)
//         while(left.length && right.length) {

//             if(left[0] <= right[0]) {
//                 result.push(left.shift())
//             } else {
//                 result.push(right.shift())
//             }
//         }
//         return result.concat(left, right);
//     }
// //}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = Math.round(arr.length / 2);
    const left = arr.slice(arr, middle);
    const right = arr.slice(middle);

    const leftMerge = mergeSort(left);
    const rightMerge = mergeSort(right);
    console.log("====================================");
    console.log(leftMerge, rightMerge, "sss");
    console.log("====================================");
    return merge(leftMerge, rightMerge);
  }

  function merge(left, right) {
    //const result = [];
    // while (left.length && right.length) {
    //   if (left[0] <= right[0]) {
    //     result.push(left.shift());
    //   } else {
    //     result.push(right.shift());
    //   }
    // }
    return left.concat(right);
  }
}
console.log(mergeSort(arr));
