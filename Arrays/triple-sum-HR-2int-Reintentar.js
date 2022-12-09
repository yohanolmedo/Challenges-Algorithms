//Level,medium
// My first solution
// Categorie: Arrays
// Level: Medium
// https://www.hackerrank.com/challenges/triple-sum/problem?isFullScreen=true

//Other solutions: https://programs.programmingoneonone.com/2021/03/hackerRank-triple-sum-solution.html

/*Function Description

Complete the triplets function in the editor below. It must return the number of distinct triplets that can be formed from the given arrays.*/

let a = [1, 3, 5];
let b = [2, 3];
let c = [1, 2, 3]

function triplets(a, b, c) {
    a = [... new Set(a)];
    b = [... new Set(b)];
    c = [... new Set(c)];

    let ai = 0;
    let bi = 0;
    let ci = 0;
    let ans = 0;

    
    while(bi < b.length) {
        while((ai < a.length) && (a[ai] <= b[bi])) {  
            ai += 1;
        }
        while((ci < c.length) && (c[ci] <= b[bi])) {
            ci += 1;
        }
        ans += (ai * ci);
        bi += 1;        
        //console.log(ai, ci)
    }
    //console.log(ans)
    return ans;
}

console.log(triplets(a, b, c));