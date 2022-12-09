// 1. Two Sum - Challenge of LeetCode
// My first solution
// Categorie: Arrays
// Level: Easy
// https://leetcode.com/problems/two-sum/

/*Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order. */

let nums = [3,2,3];

var twoSum = function(nums, target) {
    // We create an instance of Map 
    let map = new Map();
    // We iterate over the array nums
    for(let i=0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)) {
            return [i, map.get(num2)];
        }
        // We add the values to map
        map.set(num1, i)
    }
}    


twoSum(nums, 6);

/*Runtime: 99 ms, faster than 72.96% of JavaScript online submissions for Two Sum.
Memory Usage: 43.7 MB, less than 19.24% of JavaScript online submissions for Two Sum.
*/