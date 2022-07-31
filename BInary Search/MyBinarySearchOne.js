var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    while(min <= max){
        guess = Math.floor((max + min) / 2);
        if(targetValue === array[guess]){ return guess; }
        nVeces = 0;
        console.log(nVeces);
        else if(targetValue < array[guess]){ max = guess - 1; }
        else{ min = guess + 1; }
        println()
    }
    return -1;
};


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

doSearch(primes, 73);












function BinarySearch(array, target){
    min = 0;
    max = array.length - 1;
    while(min <= max){
        let guess = Math.floor(max - min)/2;
        if(target === array[guess]) return guess;
        (target > array[guess]) ? min = guess + 1 : max = guess -1;
    }
    return -1;
}