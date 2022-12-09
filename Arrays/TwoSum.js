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
    for (let i = 0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                let output = [i, j];
                return output;
            }    
        }
    }    
};

/*Runtime: 114 ms, faster than 58.92% of JavaScript online submissions for Two Sum.
Memory Usage: 42.3 MB, less than 75.31% of JavaScript online submissions for Two Sum.
*/

var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i)
    }
}    


twoSum(nums, 6);
