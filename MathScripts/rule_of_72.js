"use strict"

let principal = 200; // initial amount of money.
let interestRate = 0.06; // 6% rate.
let t = 72 / interestRate;  // number of years.
let totalSavings = principal * t * 3 + principal;
console.log(`At interest rate of 6%, your saving account will be worth $${totalSavings.toFixed(2)} in ${t.toFixed(1)} years.`);