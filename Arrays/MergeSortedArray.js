// Merge Sorted Array
// My first solution
// Categorie: Array, sorted
// Level: easy
// https://leetcode.com/problems/merge-sorted-array/

// var merge = function(nums1, m, nums2, n) {    
//     let setNums1 = [...new Set (nums1)];
//     let newNums1 = setNums1;
//     //console.log(nums2)
//     for(let i=0; i < nums2.length; i++) {
//         //if()
//         newNums1.push(nums2[i])
//     }
//     newNums1 = newNums1.sort((a, b) => a - b);

//     if(newNums1[0] == 0) {
//         newNums1.shift();
//     }
//     nums1 = newNums1
    
//     return nums1;
// };


var merge = function(nums1, m, nums2, n) {   
    nums1.sort((a, b) => a - b); 
    
    //console.log(nums2)
    for(let i=0; i < nums2.length; i++) {
        if(nums1[i] == 0) {
            nums1[i] = nums2[i];
        }
        console.log(nums2[i])
    }
   
//    console.log(nums1)

    // if(newNums1[0] == 0) {
    //     newNums1.shift();
    // }
    
   return ( nums1.sort((a, b) => a - b));
};

// let nums1 = [1,2,3,0,0,0];
// let nums2 = [2,5,6];

let nums1 = [-1,0,0,3,3,3,0,0,0]
let nums2 = [1,2,2];
// Output:  [-1,0,0,1,2,2,3,3,3]


console.log((merge(nums1, 3, nums2, 3)))