// Contains Duplicate
// Categorie: Sorting
// Level: easy
// https://leetcode.com/problems/contains-duplicate/


let nums = [1,2,3,1];

var containsDuplicate = function(nums) {
  const numsSet = [...new Set(nums)];
  return numsSet.length === nums.length ?  false : true;
};

containsDuplicate(nums);