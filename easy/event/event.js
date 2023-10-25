// Event listener for a button click (assuming there's a button with id 'btnNumber2' in the HTML)
document.getElementById("btnNumber1").addEventListener("click", function () {
    alert("Thank you for clicking button number 1");
});


// Event listener for a button click (assuming there's a button with id 'btnNumber2' in the HTML)
document.getElementById("btnNumber2").addEventListener("mouseover", function () {
    alert("Thank you for hovering over button 2");
});

// // Event listener for a button click (assuming there's a button with id 'btnNumber2' in the HTML)
// document.getElementById("myAge").addEventListener("keydown", function () {
//     alert("You pressed a key");
// });


//three steps. to do same thing as above but more clear and structured way.

//1)grab input.
const myAge = document.getElementById("myAge");
//2)add event listener with type keydown/oncklic etc. 3) and call func.
myAge.addEventListener("keydown", showKeyPressedMessage);
//4) have funct.
function showKeyPressedMessage() {
    alert("You pressed a key");
}

//extra feaure
const myAge2 = document.getElementById("myAge2");

myAge2.addEventListener("keydown", showKeyPressedMessage2);

function showKeyPressedMessage2(e) {
  alert("You pressed" + e.code);
}