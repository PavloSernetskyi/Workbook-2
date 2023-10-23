//Exercise 2.1: Checking Availability (Beginner)
//Objective: Use if-else to check shoe availability.
//Instructions: Declare a boolean variable inStock and use an if-else statement to check availability.
//Desired Output:

// "This shoe is in stock." or "This shoe is out of stock."

let inStock = true; // declare bool variable.
if (inStock) {
    console.log("The product is available");
}
else {
    console.log("The product is NOT available");
}

// // let shoeDetails to be an object.
// let shoeDetails = 
// {
//     shoeAvailable = false;
// };

// if (shoeDetails.shoeAvailable) {
//     console.log(`this shoe is in stock.`);
// }
// else {
//     console.log(`This shoe is out of stock.`);
// };



//Exercise 2.2: Using If-Else (Intermediate, 10 mins) 

//Objective: Understand how to use if-else statements. 

//Instructions: Check if a user is logged in and log a message. 

//Desired Output: 

// "Welcome back, user!" 





//Use an IF ELSE IF ELSE Statement
//IF price is 300 give 10% discount
//if price between 200 and 300 give 5% discount
//if less, not discount. Calculate the new price

let price = 200;
let discountRate1 = 0.10;
let discountRate2 = 0.05;
let totalPrice = 0;
if (price == 300) {
    let discount1 = price * discountRate1;
    totalPrice = price - discount1;
    console.log(`The total price is $${totalPrice} with % 10 discount applied.`);
}
else if (price <= 300 && price >= 200) {
    let discount2 = price * discountRate2;
    totalPrice = price - discount2;
    console.log(`The total price is $${totalPrice} with % 5 discount applied.`);
}
else {
    console.log(`The total price is $${price}`);
}


//optimized solution.
let rice = 350;  // For example, the price is $350
let discount = 0;
let newPrice;

if (price > 300) {
    discount = rice * 0.10;
} else if (rice >= 200 && rice <= 300) {
    discount = rice * 0.05;
} else {
    discount = 0;
}

newPrice = rice - discount;

console.log(`The original price is: $${rice}`);
console.log(`The discount is: $${discount}`);
console.log(`The new price after discount is: $${newPrice}`);

console.log();
console.log("Temperature conversions and weather");
// temperature .
let temperatureCelsius = 28;
let temperature = (temperatureCelsius * 9 / 5) + 32;  // Convert to Fahrenheit
console.log("The temperature is F " + temperature);
if (temperature <= 80 && temperature >= 70) {
    console.log("The weather is pleasant");
}
else if (temperature > 80) {
    console.log("It's a hot day!");
}
else{
    console.log("It's a cold day!");
}
