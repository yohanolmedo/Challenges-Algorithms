// Name: Remove Element
// Platform: LeetCode
// My first solution
// Categorie: Arrays
// Level: Easy
// https://leetcode.com/problems/remove-element/

/*Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed....*/

// let numsArray = [0,1,2,2,3,0,4,2];
//      [ 0, 0, 1, 2, 2, 2, 3, 4 ]
// var removeElement = function(nums, val) {
//     let targetNumber = 0;
//     if( nums.indexOf(val) != -1) {
//         //return nums.splice(val)
//         //return nums.sort()
//     }
//     for(let i=0; i <= numsArray.length - 1; i++){
//         if(numsArray[i] == val) {
//             targetNumber += 1;
//         }
//     }
//     return nums.slice(nums.sort().indexOf(val));
// };

let numsArray = [0,1,2,2,3,0,4,2];

var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            console.log( nums[j], nums[i])
            j++;
        }
    }
    return j;
}; 

console.log(removeElement(numsArray, 2))
