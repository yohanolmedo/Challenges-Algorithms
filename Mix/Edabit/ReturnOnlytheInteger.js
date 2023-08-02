//Level: Very easy
// Return Only the Integer
// Categorie: Sorting
// Level: Very Easy
// https://edabit.com/challenge/3xqP79TrHiwnwGizj

function returnOnlyInteger(arr) {
    let listNumber = [];
    arr.map((element) =>{
        if(typeof element === 'number' &&  element % 1 === 0) {
            listNumber.push(element);
        } 
    });
    return listNumber;
}

console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));