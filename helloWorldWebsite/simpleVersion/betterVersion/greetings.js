"use strict";

function showGreeting() {
    let messageDiv = document.getElementById("greet");
    messageDiv.innerHTML = "Hello World from external JS!";
}


// // p 117.
// // We would want this code to run when the user clicks the Show button
// const nameField = document.getElementById("nameField");
// const ageField = document.getElementById("ageField");
// let name = nameField.value;
// let age = ageField.value; // age is a string here
// let message =
//     `Hi ${name}! I hear you are ${age} years old!`;
// const messagePara = document.getElementById("messagePara");
// messagePara.innerHTML = message

// // We would want this code to run when the user clicks the
// // "Calculate Your Pay" button
// const hrsWorkedField =
//     document.getElementById("hrsWorkedField");
// const payRateField = document.getElementById("payRateField");
// let hrsWorked = Number(hrsWorkedField.value);
// let payRate = Number(payRateField.value);
// let pay = hrsWorked * payRate;
// const resultPara = document.getElementById("resultPara");
// resultPara.innerHTML = `Pay is $${pay.toFixed(2)}`;

window.onload = init;
function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked() {
    alert("Hi there!");
}