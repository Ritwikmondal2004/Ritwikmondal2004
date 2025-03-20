//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// (function chai(){
// console.log(`DB CONNECTED`);
// })

(function chai(){
    console.log(`DE CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh');
