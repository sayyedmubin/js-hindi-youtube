//(1) primitive : all primitive datatypes are call by value(whenever we copy any data of primitive we cant get original data of refence will not give of memory it will give copy)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const another = Symbol('123')

console.log(id === anotherId);


//const bigNumber = 1216465323262323232n

// Reference (Non primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Mubin",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

//https://262.ecma-international.org.5.1/#sec-11.4.3


//******************************************************************** 

//Stack (Primitive), Heap (Non-Primititve)

let myYoutubename = "mubinsayyed.com"

let anothername =myYoutubename
anothername = "youtubepesikho"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mubinsayyed.com"

console.log(userOne.email);
console.log(userTwo.email);