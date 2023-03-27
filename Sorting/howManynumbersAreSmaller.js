// How Many Numbers Are Smaller Than the Current Number
// Platform: LeetCode
// Categorie: Sorting
// Level: easy
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

const nums = [8, 1, 2, 2, 3];

function smaller(array, element) {
  let j = 0;
  let acc = 0;
  while (j < array.length) {
    if (element > array[j]) acc += 1;
    j++;
  }
  return acc;
}

var smallerNumbersThanCurrent = function (nums) {
  let finalNums = [];
  for (let i=0; i < nums.length; i++) {
    console.log(nums[i], "Nums");
    const value = smaller(nums, nums[i]);
    finalNums.push(value);
  }

  return finalNums;
};

console.log(smallerNumbersThanCurrent(nums));