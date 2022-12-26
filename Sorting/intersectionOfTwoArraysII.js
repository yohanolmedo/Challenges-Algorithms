//Intersection of Two Arrays II
// Categorie: Sorting
// Level: easy
// https://leetcode.com/problems/intersection-of-two-arrays-ii/


let nums1 = [4,4,9,5];
let nums2 = [9,4,9,8,4];

//Function that return an array with repeated elements 
function countOccurrences(array, element) {
    return array.filter(e => e === element);
}

var intersect = function(nums1, nums2) {
    //Order the array from smallest to largest
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    let finalArray = [];

    for(let i=0; i<nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            const nums1Index = countOccurrences(nums1, nums1[i]);
            const nums2Index = countOccurrences(nums2, nums1[i]);
           
            //Compare the length of repeated elementes
            if(nums1Index.length <= nums2Index.length) {
                finalArray.push(nums1Index); 
                i = i + (nums1Index.length - 1);                  
            } else {
                finalArray.push(nums2Index); 
                i = i + (nums1Index.length - 1);  
            }
        }    
    }
    // Return finalArray as a single array
    return finalArray.flat();;
};

console.log(intersect(nums1, nums2));
