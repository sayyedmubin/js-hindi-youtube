const name = "mubin"
const repocount = 50

//console.log(name + repocount + " Value")

console.log('Hello my name is ${name} and my repo count is $ {repocount}');

const gameName = new String('mubin-nn')

// console.log(gameName[0]);
//console.log(gameName._proto_);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(''2));  // to know whic charact is @ 2nd position
console.log(gameName.indexOf('b'));  // to know  which character is reverse of b.

const newString = gameName.substring(0, 4)  // to print first 3 numbers
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // which print revers by minus.
console.log(anotherString);

const newStringOne = "  mubinnn   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mubin.com/mubin%sayyed"

console.log(url.replace('%20' , '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

