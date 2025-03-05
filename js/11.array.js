//array


const myarray = [1,2,3,4,5];
const myhero=["saktiman","munnavai"];
console.log(myhero);
console.log(myarray);


//----------------push one element-------------
myarray.push(6);
console.log(myarray);

myarray.pop(6);

console.log(myarray);
//-------------------shifthing array------------------

// myarray.unshift(6);
// //myarray.shift();
// console.log(myarray);

//----------------join--------------------------------
const newarray =myarray.join()

console.log(myarray);
console.log( typeof newarray);
console.log(newarray);

//------------------slice,splice------------------

console.log("A ", myarray);

const myn1 = myarray.slice(1, 3)

console.log(myn1);
console.log("B ",myarray);


const myn2 = myarray.splice(1, 3)
console.log("C ",myarray);
console.log(myn2);