function sayMyname() {
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");


}
// sayMyname()

// function addTwoNumbers(number1, number2){    //parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)  // arguments

function addTwoNumbers(number1, number2) {    //parameters
    //   let result = number1+number2
    //   return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "same") {        // if give only username then only the name print if you are given otherwise give undefined and if you give some value here called default value (like username= "same") then its print it's value or print what you give on code "console.log(loginUserMessage());"
    if (username === undefined) {           // (username === undefined) can be written as (!username)  , both are same 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());

function calculatedCarPrice(val1, val2, ...num1){     // "..." called rest operator
    return num1
}

console.log(calculatedCarPrice(200, 400, 500, 2000));

const user = {
    username: "Abhishek",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 379
})

const myNewArray =[200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 600, 700]));