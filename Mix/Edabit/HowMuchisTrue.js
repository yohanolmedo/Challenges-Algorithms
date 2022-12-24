//Platform: Edabit
//Dificult: Medium
//Challenge's name: How Much is True?
//Link: https://edabit.com/challenge/GLbuMfTtDWwDv2F73


//Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let sum =0; 
    let trues = arr.filter(element => element == true);
    return trues.length;
}