"use strict"

let xPeople = 38;
let charterVans = 15;
let vanCostPerDay = 250;

let vansNeeded = xPeople /charterVans;
let costToRentVans = vanCostPerDay * Math.ceil(vansNeeded); 


console.log(`We need ${Math.ceil(vansNeeded)} vans for ${xPeople} people.`);