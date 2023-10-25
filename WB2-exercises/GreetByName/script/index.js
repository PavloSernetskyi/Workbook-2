"use strict";
// window.onload = onHelloBtnClicked;
window.onload = init;
function init() {
    //grabbing click me button by id using greetBtn id.
    const helloBtn = document.getElementById("greetBtn");

    //this line will triger onHelloBtnClicked() function on click.
    helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked() {
    const storeUserName = document.getElementById("userInput").value;
    //extract the name from name var.
    
    let message = `Hi ${storeUserName}`;
    document.getElementById('output').innerText = message;
    // alert("Hi"+ name + "there!");
}



// //1)grab input.
// const name = document.getElementById("nameField");
// //2)add event listener with type keydown/oncklic etc. 3) and call func.
// name.addEventListener("onclick", showKeyPressedMessage);
// //4) have funct.
// function showKeyPressedMessage() {
//     alert("You pressed a key");
// }
