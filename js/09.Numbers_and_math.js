const score = 400

console.log(score);

const balance = new Number(198);

console.log(balance);


//convert int to string 
console.log (balance.toString());
console.log (balance.toString().length);

// example 

const value= 3400;
const  value2=new Number(569.00000);

console.log(value2.toFixed(2));

//using precision => exact majerment

const number= 123.575464847;
console.log("-----------presition-------");
console.log(number.toPrecision(3));
console.log(number.toPrecision(2));

// using to local string
const hundrades= 10000000;
console.log("--------toLocalString-------------")
console.log(hundrades.toLocaleString('en-In'));



//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++



console.log(Math);

let num1=4.6;
let num2=5.5;

console.log(Math.round(num1));
console.log(Math.round(num2));

//ceil value;
console.log("--------------ceil value------------------")
console.log(Math.ceil(num1));
console.log(Math.ceil(num2));

console.log(Math.floor(num1));

