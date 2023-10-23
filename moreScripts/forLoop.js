let numbers = [5, 4, 3, 2, 1];
for (let index = 0; index < numbers.length; index++) {
    console.log("Numbers are " + (index + 1) + ": " + numbers[index]);

}
console.log();


let numbers2 = [2, 1, 7, 3, 1];
for (let index = 0; index < numbers.length; index++) {
    console.log(`Numbers are ${index + 1}: ${numbers2[index]}`);

}
console.log();

// Array representing the number of shoes in each of 10 boxes 

const shoeCounts = [4, 2, 6, 1, 9, 3, 7, 5, 8, 10];

// Using a for loop to count the number of shoes in each box 

for (let i = 0; i < shoeCounts.length; i++) {

    console.log(`Box ${i + 1} has ${shoeCounts[i]} shoes.`);

}

console.log("Array of shoes");
// Array of shoes.
// Create an array of shoe sizes
const shoeSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10];
// Iterate over the array of shoe sizes and print each size to the console
for (let index = 0; index < shoeSizes.length; index++) {
    if (shoeSizes[index] >= 2 && shoeSizes[index] <= 4) {
        console.log(`The shoe sizes are ${index + 1}: ${shoeSizes[index]}`);
    }
}
//prefered way. to display 3 to 5 items in the list. 
//     const shoeSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10];
// for (let j = 0; j < shoeSizes.length; j++) {
// 	if (j >= 3 && j <= 5) {
// 		console.log(`Shoe size: ${shoeSizes[j]} is available.`);
// 	}
// }

console.log();
console.log("Calculate sum of array");
// Example 3: For loop to calculate total price of items in cart
let cart = [120, 80, 200];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i];
}
console.log(`Total price: $${total}`);
// Output: "Total price: $400"

console.log();
console.log("Exercise 3.3");
//Exercise 3.3: Calculating Total Price (Advanced, 15 mins)

//Objective: Understand how to use a for loop for calculations.
//Instructions: Use a for loop to calculate the total price of items in a cart.

let myCartList = [200, 30, 12, 40, 20];
let totalPrice = 0;
for (let index = 0; index < myCartList.length; index++) {
    totalPrice = totalPrice + myCartList[index];
    //totalPrice += myCartList[index]; //shortcut.
}
console.log("Total price is: " + totalPrice);
