// Name: Missing Number
// My first solution
// Categorie: Binary Search
// Level: Easy
// Other solutions: https://leetcode.com/problems/missing-number/solutions/1043007/javascript-o-n-time-and-o-1-space/


// var missingNumber = function(nums) {
//     nums.sort((a, b) => a - b);
//     let min = 0;
//     let max = nums.length;
//     //console.log(nums[max -1])
//     if (nums[max -1] != max ) return max;
//     if(nums[0] != 0) return 0;

//     while(min < max) {
//         let middle = Math.floor((min + max) / 2);
//         // console.log(middle)
//         if((nums[middle] - nums[middle - 1]) != 1) {
//             return middle;
//         }
//         // if((nums[middle + 1] - nums[middle]) != 1) {
//         //     return middle + 1;
//         // }

//         if(nums[middle] == middle) {
//             min = nums[middle];
//         }
//         if(nums[middle] > middle) {
//             max = nums[middle]
//         }         
//     }
// };


// My solution 2
var missingNumber = function(nums) {
    let partialSum = 0;
    let sumNum   = 0;
    for(let i=0; i<=nums.length; i++) {
        partialSum += i;
    }
    for(num of nums) {
        sumNum = num + sumNum;
    }
    return partialSum - sumNum;
}    

let array = [2,6,4,3,8,5,7,0,1];
//let array = [1];

//sear
// [ 0, 1, 2, 3, 4, 5, 6, 7, 9 ]  =   9

// [ 0, 1, 2, 4, 5, 6, 7, 8, 9 ]  =   9

// [0, 1, 2]

// [0,1]

// nums[middle] == middle : min = 6 ? middle
// 5 == 4; max = nums[middle - 1]
//         max = 4 

// 
// [ 0, 1, 2, 3, 4]

console.log(missingNumber(array))
