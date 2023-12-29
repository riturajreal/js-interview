// write two method of convert negative number to positive
let num1  = -9;
let num2  = -8;


// 1
if(num1 < 0)
    num1 = num1 * -1;

// 2
num2 = Math.abs(num2);

console.log(num1);
console.log(num2);