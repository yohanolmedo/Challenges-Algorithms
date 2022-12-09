// Name: Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
// My first solution
// Categorie: Binary Search
// Level: Easy
// Other solutions: 


// var intersection = function(nums1, nums2) {
//     // let nums1 = [...new Set(nums1)];
//     // let nums2 = [...new Set(nums2)];

//     let array1, array2;
//     if(nums1.length < nums2.length) {
//         array1 = nums1;
//         array2 = nums2;
//     } else if(nums1.length > nums2.length) {
//         array1 = nums2;
//         array2 = nums1;
//     } else {
//         array1 = nums1;
//         array2 = nums2;
//     }

//     let interArray = [];

//     for(let i=0; i < array1.length; i++) {
//         if((array2.indexOf(array1[i])) != -1) {
//             interArray.push(array1[i])
//         }
//     }

//     return [...new Set(interArray)];
    
// };

// Solution 2

var intersection = function(nums1, nums2) {
    let interArray = [];

    for(let i=0; i < nums1.length; i++) {
        if((nums2.indexOf(nums1[i])) != -1) {
            interArray.push(nums1[i])
        }
    }
    return [...new Set(interArray)];
}    

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4]

console.log(intersection(nums1, nums2))
