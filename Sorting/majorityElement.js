// 169. Majority Element
// My first solution
// Categorie: Array, Sorting
// Level: easy
// https://leetcode.com/problems/majority-element/

/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.*/

var majorityElement = function(nums) {
    nums.sort((a,b) => a - b);
    let numsMap = new Map();
    for(let i=0; i<nums.length; i++) {
        let acumulator = 1;
        let number = nums[i];   
        console.log(number)
     
        
        if(number === nums[i+1]){
            acumulator += 1;
            //console.log(acumulator)
            numsMap.set(number, acumulator)
        } else {
           // numsMap.set(number, acumulator)
        }
    }
    return numsMap;
};

let nums = [3, 3, 3, 4, 4, 5]
//          ^

console.log(majorityElement(nums));