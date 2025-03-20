// define function

// function addnumber(num1,num2){
//     console.log(num1+num2);

// }
// addnumber(3,null);

//step-2;
// function add(num1,num2){
//     let result=num1+num2;
//     return result;
// }

// const e=add(3,4);
// console.log("result--",e);
// step-3
// function add(num1,num2){
//     let result=num1+num2;
//     return result;
//     let result=num2+num2; // this is incurrect because of return;
// }

// const e=add(3,4);
// console.log("result--",e);


// step--4
// function loginUSername(username){
//     if(username==undefined){
//         console.log("please enter user name");
//         return;
//     }
//     return `${username} just log in`

// }

// let find = loginUSername();
// console.log(find);

// step--5
function loginUSername(username){
    if(!username){                   // adance procidure;
        console.log("please enter user name");
        return;
    }
    return `${username} just log in`

}

let find = loginUSername();
console.log(find);
