// 26. Remove Duplicates from Sorted Array
// Category: Array  
// Level: Easy
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
*/

let nums = [0,0,1,1,1,2,2,3,3,4];

// var removeDuplicates = function(nums) {
//     let result = nums.filter((item, index) => {
//         return nums.indexOf(item) === index;
//     })
//     return result;
// };

var removeDuplicates = function(nums) {
    let i = 0;
    for(let j=1; j<nums.length;){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
            j++;
        }else{
            j++
        }
        console.log(nums[j], nums[i])
    }
    return i+1;
};

var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    while(j<nums.length){
        if(nums[j] !== nums[i]){
            i++;                        
            nums[i] = nums[j];
            j++;
        }else{
            j++
        }
    }
    return i+1;
};
i = 1
j = 5
// [0,0,1,1,1,2,2,3,3,4]; 
//[0, 1, 2, ]