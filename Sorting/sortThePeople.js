// Sort the People
// My first solution
// Categorie: Array, Sort
// Level: easy
// https://leetcode.com/problems/sort-the-people/


// var sortPeople = function(names, heights) {
//     let newArray = [];
//     for(let i=0; i < heights.length; i++){
//         newArray.push([names[i], heights[i]])       
//     }
//     newArray.sort((a,b) => b[1] - a[1]);
//     console.log(newArray)
//     return newArray.map((e) => e[0]);
// };

var sortPeople = function(names, heights) {
    let newArray = new Map();
    for(let i=0; i < heights.length; i++){
        newArray.set([names[i], heights[i]])       
    }
    //  newArray.sort((a,b) => b[1] - a[1]);
    //  console.log(newArray)
    // return newArray.map((e) => e[0]);
    console.log(newArray[0])
};

let names = ["Alice","Bob","Bob"];
let heights = [155,185,150];

console.log(sortPeople(names, heights))