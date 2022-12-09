var searchInsert = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let notFound = 0;
  for(let i=0; i<nums.length; i++) {
    let middle = Math.round((min+max) / 2);
    if(nums[0] >= target) return 0;
    if(nums[middle] == target) return middle;
    (nums[middle] < target) ? min = middle : max = middle;  
    if(nums[middle] == target - 1) {
        notFound = middle;
    } 
    if(target > nums[nums.length - 1]) {
        return nums.length;
    }
  }
  return notFound + 1;
};

let array = [2,3,4,7,8,9];

console.log(searchInsert(array, 1));