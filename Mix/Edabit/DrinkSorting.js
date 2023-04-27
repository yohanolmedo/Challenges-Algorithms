// Drink Sorting
// Categorie: Sorting
// Level: Medium
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

//Solution 2:

function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}    
  


const drinks1 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
]

console.log(sortDrinkByPrice(drinks1));

//Complexity