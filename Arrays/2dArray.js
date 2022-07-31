let items2 = [[1, 2, 3, 0, 1, 9], [1, 3, 4, 0, 1, 9], [4, 5, 6, 0, 1, 9], [7, 8, 9, 0, 1, 9],[1, 2, 3, 0, 1, 9], [1, 3, 4, 0, 1, 9]];
let items = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
    ]

function sumArray(array) {
    let newArray = [];
    for(r=0; r < 4; r++){
        let suma = 0;
        for(c=0; c < 4; c++){
           let sumTop = array[r][c] + array[r][c + 1] + array[r][c + 2]
           let medium = array[r+1][c+1]
           let sumBottom = array[r+2][c] + array[r+2][c + 1] + array[r+2][c + 2]
           suma = sumTop + medium + sumBottom;
           newArray.push(suma)
        }
    }; 
    console.log(Math.max(...newArray));
    console.log(newArray);
    return array;
}