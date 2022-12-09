//Level: medium
// 3Sum
// Categorie: Arrays
// Level: Medium
// https://leetcode.com/problems/3sum/

/* Other solutions
* https://leetcode.com/problems/3sum/solutions/7648/javascript-solution-beats-100/
* https://leetcode.com/problems/3sum/solutions/7407/javascript-beat-94-29/
* Backtracking: https://leetcode.com/problems/3sum/solutions/7696/javascript-solution-sharing-backtracking/
* Varios: https://leetcode.com/problems/3sum/solutions/2674501/js-bad-solution-but-easy-to-understand-o-n-2/
*/

// [-1,0,1,2,-1,-4,-2,-3,3,0,4]
// let numsArray = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
//[ -4, -3, -2, -1, -1, 0,  0,  1,  2,  3, 4 ]


// var threeSum = function(nums) {
//     let listNumber = nums.sort((a,b) => a - b);
//     console.log(listNumber);
//     let arrayDef = [];

//     for(let i=0; i<nums.length; i++) {
//         for(j=i + 1; j<listNumber.length - 1; j++) {    
//             let k = nums.length - 1;
            
            
//             // for(let k=; k>j; k--){
//             //     //console.log(listNumber[i], listNumber[j], listNumber[k]);  
//             //     if ((nums[i] + nums[j] + nums[k]) == 0){                    
//             //         arrayDef.push([nums[i], nums[j], nums[k]]);                    
//             //         k--              
//             //     }                                    
//             // }
//         }
//     }    

//     let SetThreeSum = arrayDef
//     .map(JSON.stringify)
//     .filter((e, i, a) => i === a.indexOf(e))
//     .map(JSON.parse);

//     return SetThreeSum;

// }    



/*  NO funciona en grandes inputs
var threeSum = function(nums) {
    let listNumber = nums.sort((a,b) => a - b);
    console.log(listNumber);
    let arrayDef = [];

    for(let i=0; i<nums.length; i++) {
        let k = nums.length;
        let j = i + 1;  

        for(j; j<listNumber.length - 1; j++) {            
            for(let k=nums.length - 1; k>j; k--){
                //console.log(listNumber[i], listNumber[j], listNumber[k]);  
                if ((nums[i] + nums[j] + nums[k]) == 0){                    
                    arrayDef.push([nums[i], nums[j], nums[k]]);                    
                    k--              
                }                                    
            }
        }
    }    

    let SetThreeSum = arrayDef
    .map(JSON.stringify)
    .filter((e, i, a) => i === a.indexOf(e))
    .map(JSON.parse);

    return SetThreeSum;
};
*/
let numsArray = [-1,0,1,2,-1,-4,-2,-3,3,0,4];

var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    const output = [5, 6];

    for (let i = 0; i < nums.length; i++) {
        let cursor1 = i + 1;
        let cursor2 = nums.length - 1;
        const newTarget = -nums[i];
        //console.log(cursor1, cursor2)
        while (cursor1 < cursor2) {
            if (output.length && output[output.length - 1][0] === nums[i] && output[output.length - 1][1] === nums[cursor1] && output[output.length - 1][2] === nums[cursor2]) {
                console.log(output[output.length - 1][0])
                cursor1++;
                cursor2--;
                continue;
            }
            if (nums[cursor1] + nums[cursor2] === newTarget) {
                const value = [nums[i], nums[cursor1], nums[cursor2]];
                output.push(value);
                cursor1++;
                cursor2--;
            } else if (nums[cursor1] + nums[cursor2] > newTarget)  {
                cursor2--;
            } else {
                cursor1++;
            }
        }
        while(nums[i+1] === nums[i]) i++;
    }

   // return output;
};


console.log(threeSum(numsArray))
