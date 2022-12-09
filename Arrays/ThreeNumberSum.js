// View Example: https://javascript.plainenglish.io/three-number-sum-problem-52840b032801
let listNumber = [-7, -1, 8, -10, 6, 4, -8, 1, 7];
let sumObject = 0;

[-10, -8, -7, -1, 1, 4, 6, 7, 8]

function treeNumberSum(list) {
  let arrayEnd = [];
    let listNumberOrden =  list.sort((a, b) => a - b);
    for(let i=0; i < listNumber.length; i++) {
        let left = i+1;
        let right = listNumber.length - 1;
      while(left < right) {
        const currentSum = listNumberOrden[i] + listNumberOrden[left] + listNumberOrden[right];
        if(currentSum == sumObject) {
          arrayEnd.push([listNumberOrden[i], listNumberOrden[left], listNumberOrden[right]])
          left++;                        
        }else if (currentSum < sumObject) {
            left++;            
        } else {
          right--
        }              
      }      
    }
   return arrayEnd;
}

treeNumberSum(listNumber);

