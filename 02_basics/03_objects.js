// sngleton
// object create


// objects literals

const mySym = Symbol("key1")


const jsUser = {
    name:"Abhishek",
    "full name":"Abhishek Keahrawani",
    [mySym]:"myKey1",
    Age: 20,
    location: "delhi",
    email: "abhishekkesharwani@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Abhishke@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "abhishekglamour@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());