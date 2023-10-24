// Calculation or algoritme
function calculateRetirementAge(currentAge, retirementAge = 65) {
    let yearsLeftToRetirement = retirementAge - currentAge;
    let message = `Hi, I'm am ${currentAge} years old and I still have to work for ${yearsLeftToRetirement} before I can retire`;
    return message;
}


function DisplayRetirementMessage() {
    // get my age
    let currentAge = parseInt(document.getElementById("myAge").value);
    let myMessage = calculateRetirementAge(currentAge)
    document.getElementById("result").innerHTML = myMessage;
}