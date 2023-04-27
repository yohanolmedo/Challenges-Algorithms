// Drink Sorting
// Categorie: Sorting
// Level: Medium
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

//Solution 1:

class Drink {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name;
        this.price;
    }
}

function sortDrinkByPrice2(drinks: Drink[]): Drink[] {
    return drinks.sort((a,b) => a.price - b.price)
}

function sortDrinkByPrice2(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
}


const drinks2 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
]

console.log(sortDrinkByPrice(drinks2));
    

