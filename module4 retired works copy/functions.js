"use strict"
// Calculation or algoritme
function calculateRetirementAge(currentAge, retirementAge = 65) {
    let yearsLeftToRetirement = retirementAge - currentAge;
    return yearsLeftToRetirement;
}

//Output
function DisplayRetirementMessage() {
    
    // get my age
    let currentAge = parseInt(document.getElementById("myAge").value);

    //store the result of the calculate retirement
    let yearsleft = calculateRetirementAge(currentAge)

    //display message
    let message = `Hi, I'm am ${currentAge} years old and I still have to work for ${yearsleft} before I can retire`;
    document.getElementById("result").innerHTML = message;
}