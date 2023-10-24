"use strict";
function showGreeting() {
    let messageDiv = document.getElementById("messageDiv");
    messageDiv.innerHTML = "Hello World!";
}
//showGreeting();


function retiermentCalculator(myAge) {

    // input.
        myAge = document.getElementById('myAge').value;

    //calculate
    let yearsToWork = 65 - myAge;


    // output. 2 parts.
    let message = `I am ${myAge} years old and have to work ${yearsToWork} before i get retired`;
    
    document.getElementById('messageDiv').innerText = message;

    //desired output.
    // Hi I'm 28 years old.
}

// displayAge(60);