const accountId = 123456
let accountEmail = "mubin@google.com"
var accountPassword = "1234"
accountCity ="Pune"
let accountState;

//accountId = 2  //not allowed

accountEmail = "idfc@bank.com"
accountPassword = "214562"
accountCity = "Solapur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(accountId);