// Example 1: Storing product name as a string 
let shoeName = "Air Max";
console.log(`Product: ${shoeName}`);

// Example 2: Storing product price as a number 
let shoePrice = 120;
console.log(`Price: $${shoePrice}`);

// Example 3: Storing availability as a boolean 
let isAvailable = true;
console.log(`Available: ${isAvailable}`);

// Example 4: Storing shoe sizes as an array 
let availableSizes = [6, 7, 8, 9, 10];
console.log(`Available sizes: ${availableSizes}`);

// Example 5: Storing shoe details as an object 
let shoeDetails =   // object.
{                   // properties of the object down below.
    name: "Air Max",
    price: 120,
    availableSizes: [6, 7, 8, 9, 10]
};

console.log(`Shoe Details: ${JSON.stringify(shoeDetails)}`);
console.log(`Shoe Details: ${JSON.stringify(shoeDetails.name)}`); // displays name with quotations/stringify.
console.log(`Shoe Details: ${(shoeDetails.name)}`); // dispalys name without quotations.

