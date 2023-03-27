// Fix the Broken Code
// Categorie: Sorting
// Level: Very Easy
// https://edabit.com/challenge/zct73iCmH3zZ4dcDY


function sortWordTS(word: string) {
    return word.split("").sort().join("");
}

console.log(sortWordTS("dcba"));