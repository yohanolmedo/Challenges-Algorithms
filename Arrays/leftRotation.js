function rotateLeft(d, arr) {
    // Write your code here
    let newArray = [...arr];
    for(let i=0; i<d; i++){
        newArray.push(arr[i]);
    }
    return newArray.slice(d);
}

let array  = [1, 2, 3, 4, 5];
rotateLeft(2, array);