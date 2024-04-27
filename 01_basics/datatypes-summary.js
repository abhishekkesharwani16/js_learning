// Primitive

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt


// const score =100
// const scoreValue = 100.3

// const isLoogedIn = false
// const outsideTemp = null
// let userEmail;


// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id== anotherId)

// const bigNumber = 287568376538577n


// Reference (Non primitive

// Array, Objects, Functions)

// const heors = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "Abhishek",
//     age: 23,
// }

// const myFunction = function(){
//     console.log("Hello wolrd");

//}

// console.log(typeof bigNumber);



// **********************************************************************

// stack (Primitive), Heap (Non-primitive)
// In stack used copy data
// and In Heap used as a reference of main data  

let myYoutubename = "#Mathgyan"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
    
userTwo.email = "abhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);