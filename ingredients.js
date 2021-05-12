const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let j = 0;
while(j < ingredients.length){
	console.log(ingredients[j]);
	j++;
}

for(let i = 0; i < ingredients.length; i++){
	console.log(ingredients[i]);
}

for(let i = ingredients.length; i > 0; i--){
	console.log(ingredients[i]);
}
