//Level,medium
// My first solution
// Categorie: Arrays
// Level: Medium
// https://www.hackerrank.com/challenges/triple-sum/problem?isFullScreen=true

//Other solutions: https://programs.programmingoneonone.com/2021/03/hackerRank-triple-sum-solution.html

/*Function Description

Complete the triplets function in the editor below. It must return the number of distinct triplets that can be formed from the given arrays.*/

// let a = [3, 3, 3];
// let b = [1, 4, 5];
// let c = [2, 3, 3];

let a = [1, 3, 5];
let b = [2, 3];
let c = [1, 2, 3]


// Complete the triplets function below.
function triplets(a, b, c) {
  let tripletsList = [];
  //triplets(p, q, r)
  //(p <= q >= r )
  for (let i = 0; i <= a.length - 1; i++) {
    let p = a[i];
    //console.log(p)
    for (let j = 0; j < b.length; j++) {
      let q = b[j];
      if (p <= q) {
        for (let k = 0; k < c.length; k++) {
          let r = c[k];
          //console.log(c[k]);
          if (q >= r) {
            tripletsList.push([p, q, r]);
          } else {
            k++;
          }
        }
      } else {
        i++;
        //j++;
      }
    }
  }

  let SetTripletsList = tripletsList
    .map(JSON.stringify)
    .filter((e, i, a) => i === a.indexOf(e))
    .map(JSON.parse);

  return SetTripletsList.length;
}

console.log(triplets(a, b, c));

//Revisar este input, debe retornar 184

/*
[10,9,8]
[41705157,97849134,45597343,16768845,22004255,8599189,2105694,89992290,67225143,89110311]
[13272876,84702911,8455586,8597056,131603,80740505,44236720,92144494,57795598]
[82044489,35357393,83576278,87430244,76673809,10617871,83652958,21631708]

*/
