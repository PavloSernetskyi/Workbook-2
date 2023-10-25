"use strict"
//Global variables is not wrapped in a function and can be used by many functions

//Shoe is the objectname
//brand is a property of the object Shoe

let shoe = {
    brand: "Nike",
    model: "Air Max",
    size: 42,
    price: 120.5,
    isAvailable: true,
    isSaleActive: true,
    colors: ["Red", "Blue", "Black"], // Array of strings
    discount: function () {
        // Method in an object
        if (this.isSaleActive) {
            return this.price * 0.9;
        }
        return this.price;
    },
};

function displayShoeInfo() {
    console.log(
        `The brand is called ${shoe.brand} and this product's model is ${shoe.model}. and the available colours are ${shoe.colors} and discount price is $${shoe.discount()}`
    );
}
displayShoeInfo();
// let myprice = shoe
//console.log(`Shoe discount is ${shoe.discount()}`);