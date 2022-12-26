// Valid Anagram
// Categorie: Sorting
// Level: easy
// https://leetcode.com/problems/valid-anagram/

let s = "anagram"; 
let t = "nagaram";

var isAnagram = function(s, t) {
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");
    return (sortedS == sortedT)
};

console.log(isAnagram(s, t));
