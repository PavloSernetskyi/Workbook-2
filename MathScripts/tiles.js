"use strict"

let length = 9; //foot.
let width = 4; //foot.
let areaOfRoom = width * length; // squared foot. 36.

let tilesInBox = 12;
let rate = 0.10; // 10 more tiles.
let boxesNeeded = (areaOfRoom / tilesInBox);
let boxesNeededTotal = (boxesNeeded * rate) + boxesNeeded;
console.log(boxesNeededTotal);
console.log(`If one box has ${tilesInBox} tiles in the box, then you need ${boxesNeeded} full boxes of tiles to cover room with area of ${areaOfRoom} squared feets but to cover all mess ups you actually need to buy ${Math.ceil(boxesNeededTotal)} boxes`);



//mod 
// const totalSeconds = 125;
// const minutes = Math.floor(totalSeconds / 60);
// const seconds = totalSeconds % 60;
// console.log(`Find modulus of 125 / 60: Remainder/modulus is: ${seconds} seconds, since 125/60 = 2 min with remainder of 5 seconds.`);

