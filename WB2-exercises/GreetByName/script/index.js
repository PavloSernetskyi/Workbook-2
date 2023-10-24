"use strict";
window.onload = init;
function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked() {
    alert("Hi there!");
}


//////////////////////////////////////////

// // We would want this code to run when the user clicks the Show button
// const nameField = document.getElementById("nameField");
// const ageField = document.getElementById("ageField");
// let name = nameField.value;
// let age = ageField.value; // age is a string here
// let message =
//     `Hi ${name}! I hear you are ${age} years old!`;
// const messagePara = document.getElementById("messagePara");
// messagePara.innerHTML = message