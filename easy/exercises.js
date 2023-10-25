"use strict"

// A method is a function that can be called on variables.
//create a variable with your birthdate and set hours of when you where born (if you know it). if not, just make it upt:
let peakTrafficDayStart = new Date("2023-11-24");
peakTrafficDayStart.setHours(0, 0, 0, 0);

// make us of the Method setHours
let birthdate = new Date("1995-08-01 ");

let time = birthdate.setHours(9, 5, 0, 0);
console.log(`Was born on ${time}`);

// 1. Full Date and Time: "Friday, October 25, 2023, 12:30:45 PM"
let fullBirthDay = birthdate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

console.log(`Was born on ${fullBirthDay}`);
console.log();

// Mini Exercise: 
// Display Brand and model in a message in console log based on my objec

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

console.log(`The brand is ${shoe.brand} and the model is ${shoe.model}`);
console.log();


//example // Array of shoe products
let shoes = [
    { brand: "Adidas", model: "Ultraboost", size: 40, price: 140.0 },
    { brand: "Puma", model: "Rebel", size: 41, price: 90.0 },
    { brand: "New Balance", model: "Fresh Foam", size: 42, price: 110.0 },
];
//   Create an array of students. Add firstname and lastname
let students = [
    // index 0, 0 
    { firstname: "John", lastname: "Cena" },
    // index 1, 1 
    { firstname: "Pavlo", lastname: "Sernetskyi" },
    // index 2, 2 
    { firstname: "Edson", lastname: "Peraza" },

];

//for loop display array.
console.log("The names in array are: ");
for (let index = 0; index < students.length; index++) {
    console.log(`First name is ${students[index].firstname}`);
    console.log(`Last name is ${students[index].lastname}`);
    console.log();
}

// example. for each loop.
console.log("For each student...");
//preffered way.
//for each
shoes.forEach(shoe => {
    if (shoe.price <= maxPrice) {
        console.log(shoe.model);
    }
});

// for each student.
console.log("For each student...");
//preffered way.
//for each
shoes.forEach(shoe => {
    if (shoe.price <= maxPrice) {
        console.log(shoe.model);
    }
});
