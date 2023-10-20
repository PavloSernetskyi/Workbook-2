"use strict"

let num1 = 2;
let num2 = "2"

// == allows to compare int and string?
if (num1 == num2)
{
    console.log(`2 == '2' is True`);
}
else
{
    console.log(`False`);
}

if (num1 === num2)
{
    console.log(`True`);
}
else
{
    console.log(`2 === '2' is False`);
}