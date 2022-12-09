// Name: No Conditionals?
// Platform: edabit
// My first solution
// Categorie: Logic
// Level: Easy
// https://edabit.com/challenge/WjXHgXLAvMxNvD6h2


function flip(y) {
    const action = y;
    switch (action) {
      case 0:
        return 1;
        break;
      case 1:
        return 0;    	
        break;
      default:
        console.log('Number no valid');
    }
    
}

console.log(flip(0));