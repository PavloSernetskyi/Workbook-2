"use strict"

let monthlySalary = 5500;
let taxRate = 0.23; // 23% federal taxes.
let monthlyTaxes = monthlySalary * taxRate;

console.log(`Your monthly earning are $${monthlySalary}.`);
console.log(`Monthly taxes are $${monthlyTaxes}.`);

let grossPay = monthlySalary - monthlyTaxes;
console.log(`Gross monthly pay is $${grossPay}.`);