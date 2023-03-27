//Level: easy
// Return types
// Categorie: Sorting
// Level: Very Easy
// https://edabit.com/challenge/QWmvQsrSuQRmEN8ne

function arrayValuesTypes(arr) {
    let newArray = [];
    arr.map(number => {
        newArray.push(typeof number);
    });
    return newArray;
}
console.log(arrayValuesTypes([1, 10]))
