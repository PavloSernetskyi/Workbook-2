"use strict"

let payRateUnder40 = 12.50;
let payRate40 = 25.00;
let payRateOver40 = 17.30;
let hoursWorked20 = 20;
let hoursWorked40 = 40;
let hoursWorked45 = 45;
let hoursWorked = 40;  // change this value to see diferent results when different blocks of if else statement get executed.
let grossPay = null;

if (hoursWorked == 40) {
    grossPay = payRate40 * hoursWorked40;
    console.log(`Gross pay for 40 hours is ${grossPay}`);
}

else if (hoursWorked > 40) {

    let overtimeHours = hoursWorked45 - hoursWorked40;
    let overtimePayment = overtimeHours * payRateOver40;
    let grossPay2 = (payRate40 * hoursWorked40) + (overtimeHours * overtimePayment);
    console.log(`Gross pay for 45 hours is ${grossPay2}`);
}

else
{
    grossPay = payRateUnder40 * hoursWorked20;
    console.log(`Gross pay for 20 hours is ${grossPay}`);
}
