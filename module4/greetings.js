"use strict";
function showGreeting() {
    let messageDiv = document.getElementById("messageDiv");
    messageDiv.innerHTML = "Hello World!";
}
//showGreeting();


function displayAge(myAge) {

    //calculate
    // let yearsToWork = 65 - myAge;

    // input.
    let messageDiv = document.getElementById("messageDiv");

    // calculation
    let yearsToWork = 65 - myAge;

    
    // output.
    
    messageDiv.innerHTML = `Hi, I'm ${myAge} years old and I have to work ${yearsToWork} years more before I get retired`;




    //desired output.
    // Hi I'm 28 years old.
}

// displayAge(60);