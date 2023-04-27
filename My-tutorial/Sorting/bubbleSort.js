// Sort the following array:
const arr = [64, 34, 25, 12, 22, 11, 90];

function arraySorting(array) {
  for (let i = 0; i < array.length; i++) {
    for(let j=0; j < array.length - i - 1; j++) {
        console.log(array[j], array[j+1]);
        if(array[j] > array[j+1]) {
            [array[j], array[j+1]] = [array[j+1], array[j]];
            //console.log(array[i], array);
        }
    }
  }
  return array;
}

console.log(arraySorting(arr));
