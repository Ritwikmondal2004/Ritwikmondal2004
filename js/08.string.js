let name = "ritwik";
let age = 22;

// this is the original string structure which any one write this formate;
console.log(`hello my name is ${name} and my age is ${age}`);


const gameName = new String('ritwik');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));