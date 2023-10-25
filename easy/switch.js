
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

//Exercise: Age Categorization

//Objective:
//Write a JavaScript function that takes in an age as a parameter and returns a string categorizing the person based on their age using a switch statement.

//Categories:

//Child (0-12 years)
//Teenager (13-19 years)
//Adult (20-59 years)
//Senior (60+ years)
//Instructions:

//Create a function named categorizeAge.
//The function should accept one parameter: age.
//Use a switch statement to determine the age category.
//Return the appropriate category as a string.


function categorizeAge(age){
    let ageCategory= "cat";
    switch (true) {
        case (age <= 12):
            // console.log("Size is Small.");
            ageCategory = "Child";
            break;
        case (age <= 19):
            // console.log("Size is Medium.");
            ageCategory = "Teenager";
            break;
        case (age <= 59):
            // console.log("Size is .");
            ageCategory = "Adult";
            break;
        default:
            console.log("Senior");
    }
    return ageCategory;
}

categorizeAge(30);



function categorizeAge(age) {

    
    let ageCategory;
    let message;
    switch (true) {
        case age >= 0 &&  age <=12:
            ageCategory = "Child";
            break;
        case (age >= 13 &&  age <=19):
            ageCategory = "Teenager";
            break;
        case (age >= 20 &&  age <=59):
            ageCategory = "Adult";
            break;
        case (age >= 60):
            ageCategory = "Senior";
            break;
    }

    return message = `This person is a ${ageCategory}`;

}

console.log(categorizeAge(25));