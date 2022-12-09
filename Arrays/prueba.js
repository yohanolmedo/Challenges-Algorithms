'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}3

// Complete the triplets function below.
function triplets(a, b, c) {
  let tripletsList = [];
  //triplets(p, q, r)
  //(p <= q >= r )
  for (let i = 0; i <= a.length-1; i++) {
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
 return tripletsList.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const lenaLenbLenc = readLine().split(' ');

    const lena = parseInt(lenaLenbLenc[0], 10);

    const lenb = parseInt(lenaLenbLenc[1], 10);

    const lenc = parseInt(lenaLenbLenc[2], 10);

    const arra = readLine().split(' ').map(arraTemp => parseInt(arraTemp, 10));

    const arrb = readLine().split(' ').map(arrbTemp => parseInt(arrbTemp, 10));

    const arrc = readLine().split(' ').map(arrcTemp => parseInt(arrcTemp, 10));

    const ans = triplets(arra, arrb, arrc);

    ws.write(ans + '\n');

    ws.end();
}
