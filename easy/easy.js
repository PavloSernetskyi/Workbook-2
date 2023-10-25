"use strict";

// This is a single-line comment.

/* This is a multi-line comment.
   It spans several lines. */

// Variables and Datatypes
var websiteName = "ShoeStore"; // String datatype
let totalProducts = 100; // Number datatype
const TAX_RATE = 0.07; // Constant for tax rate (7%)
let isSaleActive = true; // Boolean datatype
let featuredShoe = null; // Null datatype
let customerInfo; // Undefined datatype
let purchaseDate = new Date();
let tomorrowDate = new Date(2023, 9, 26);

// Object for a shoe product
let shoe = {
  brand: "Nike",
  model: "Air Max",
  size: 42,
  price: 120.5,
  isAvailable: true,
  colors: ["Red", "Blue", "Black"], // Array of strings
  discount: function () {
    // Method in an object
    if (isSaleActive) {
      return this.price * 0.9;
    }
    return this.price;
  },
};

// Array of shoe products
let shoes = [
    { brand: "Adidas", model: "Ultraboost", size: 40, price: 140.0 },
    { brand: "Puma", model: "Rebel", size: 41, price: 90.0 },
    { brand: "New Balance", model: "Fresh Foam", size: 42, price: 110.0 },
  ];

  
// For loop to list all shoe brands available
for (let i = 0; i < shoes.length; i++) {
    console.log(shoes[i].brand);
  }
  
  // While loop to list all shoe models until a certain price point is reached
  let maxPrice = 100;
  let index = 0;
  while (shoes[index] && shoes[index].price <= maxPrice) {
    console.log(shoes[index].model);
    index++;
  }
  
  // Do-while loop to suggest at least one shoe model even if none meet the price criteria
  do {
    console.log(`Suggested Shoe: ${shoes[index].model}`);
    index++;
  } while (shoes[index] && shoes[index].price <= maxPrice);
  
  // For...of loop to iterate over shoe array
  for (let shoeItem of shoes) {
    console.log(`Brand: ${shoeItem.brand}, Model: ${shoeItem.model}`);
  }
  
  // For...in loop to iterate over properties of a shoe object
  for (let property in shoe) {
    console.log(`${property}: ${shoe[property]}`);
  }
  
  // Conditional statements
  if (shoe.isAvailable) {
    console.log("This shoe is available for purchase.");
  } else {
    console.log("Sorry, this shoe is out of stock.");
  }
  
  // Switch case for handling different shoe sizes
  switch (shoe.size) {
    case 40:
      console.log("Size is Small.");
      break;
    case 41:
      console.log("Size is Medium.");
      break;
    case 42:
      console.log("Size is Large.");
      break;
    default:
      console.log("Size not available.");
  }
  
  // Function to calculate total price including tax
function calculateTotal(price) {
    return price + price * TAX_RATE;
  }

  
  // Event listener for a button click (assuming there's a button with id 'buyButton' in the HTML)
  document.getElementById("buyButton").addEventListener("click", function () {
    alert("Thank you for purchasing!");
  });
// Event listener for mouseover on a shoe image (assuming there's an image with id 'shoeImage' in the HTML)
document.getElementById("shoeImage").addEventListener("mouseover", function () {
    alert("This is our top-selling shoe!");
  });  
// Your provided JavaScript code goes here...