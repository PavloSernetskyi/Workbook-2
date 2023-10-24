"use strict"

function displayName() {
    // Get the input field's value
    var name = document.getElementById("nameInput").value;

    // Display the name in the output paragraph
    document.getElementById("output").textContent = "Hello I'm in JS, " + name + "!";
}