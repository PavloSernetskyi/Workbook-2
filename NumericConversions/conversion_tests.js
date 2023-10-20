"use strict"

let a = "   101.1   ";
let b = "55";
let c = "402 Stevens";
let d = "Number  5   ";
// before parsing.
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// //parsingInt.
// let parsedA = parseInt(a);
// let parsedB = parseInt(b);
// let parsedC = parseInt(c);
// let parsedD = parseInt(d);
// // after parsing.
// console.log(`After parsing int`);
// console.log(parsedA);
// console.log(parsedB);
// console.log(parsedC);
// console.log(parsedD);

// parse float.
console.log(`Parse float...`);
let parsedA = parseFloat(a);
let parsedB = parseFloat(b);
let parsedC = parseFloat(c);
let parsedD = parseFloat(d);

console.log(`After parsing float`);
console.log(parsedA);
console.log(parsedB);
console.log(parsedC);
console.log(parsedD);


// string to number.
console.log(`Using string to number conversion.`);
let stringToNumber = Number(a);
console.log(`string to number ${stringToNumber}`);

//using unary +.
let unary = +a;
console.log(`unary. string to number ${unary}`);
console.log(`unary. string to number ${+b}`);
console.log(`unary. string to number ${+c}`);
console.log(`unary. string to number ${+d}`);