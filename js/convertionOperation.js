// number case
let score = 33


console.log(typeof score)
console.log(typeof(score));

//string case
let value1 ="33abc";
console.log(typeof(value1));

// string to number 
let String_to_number=Number(value1); //  this way to convert string to number;
console.log(typeof(String_to_number));
console.log(String_to_number);

// convertion
// "33"=>33;
// "33abc"=>NaN;
// true=>1;  false=>0;
// ""=>string empty then false
// "hitesh"=>true;
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion