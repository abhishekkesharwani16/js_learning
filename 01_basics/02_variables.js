const accountId = 17654
let accountEmail = "abhishekkesharwani16@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 3  // Not allowed

accountEmail = "abs@gmail.com"
accountPassword = "87655"
accountCity = "Bengluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/