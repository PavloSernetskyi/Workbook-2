// Exercise 2.2: Storing and Updating Shoe Price (Intermediate)
// Objective: Understand how to declare and update numeric variables.

//Example:
let examplePrice = 100;
examplePrice = 110;
console.log("The updated example price is " + examplePrice);


//declaration allocates memory and the definition assigns a value to this allocated memory.
let number;
number = 10;

//Instructions: Declare a numeric variable for shoePrice, update it, and then display the updated value.
let shoePrice = 200;
shoePrice = 220;
console.log("The updated shoe price is " + shoePrice);


// Example 1: Using string concatenation
let customerName = "John";
console.log("My customerName is " + customerName);

// Example 2: Using template literals
console.log(`My customerName is ${customerName}`);

// Example 3: Combining variables and literals
let age = 30;
console.log(`My customerName is ${customerName} and I am ${age} years old.`);

//The desired output: "Hi customerName customer, thank you for buying (customerName shoe) for (price).
let customerName2 = "Pavlo";
let shoeName = "Nike Air Max";
let shoePrice2 = 110;
console.log(`Hi ${customerName2} customer, thank you for buying ${shoeName} for $${shoePrice2}`);