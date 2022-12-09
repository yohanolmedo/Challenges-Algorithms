//Link: https://stackoverflow.com/questions/74200528/loops-control-flow

function mergingTripletsAndQuints(array1, array2) {
    let result = [];    
    let x = 0;
  
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        let ctr = array1[i];
        console.log(ctr, array2[i]);
        if (ctr % 3 === 0 || ctr % 5 === 0) {
            result.push(ctr + array2[i]);
          } else {
            result.push(ctr);
        }
    }
    return result;
  }
  console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]


