//Level: easy
// Return types
// Categorie: Sorting
// Level: Very Easy
// https://edabit.com/challenge/QWmvQsrSuQRmEN8ne

function arrayValuesTypesTS(arr: any[]) {
    let newArray: any[] = [];
    arr.map(number => {
        newArray.push(typeof number);
    })
    return newArray;
}
  

console.log(arrayValuesTypesTS([1, 10]))

