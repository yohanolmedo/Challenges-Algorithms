const myArray = [2, 4, 5, 6, 8, 10, 12, 14, 16];
let min = 0;
let max = myArray.length-1;
console.log(max)


let doSearch2 = function MyfirstBinarySearch(array, target) {
    while( min <= max ){
        let guess = Math.floor((min + max)/2);
        console.log(guess);
        if(array[guess] === target) return guess;    
        (array(guess) > target) ? max = guess - 1: min = guess + 1; 
    }
    return -1
}

doSearch2(myArray, 4)
