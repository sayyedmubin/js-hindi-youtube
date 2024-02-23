//array 
const myArr = [0, 1, 2, 3,]
const myHeros = ["shaktiman", "Shahrukh"]
//console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop() // this will remove last value like 7

//myArr.unshift(8) // this will use when we have to use something written in bracket into beginning of output
//myArr.shift() // this will remove first  value

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

//const newArr = myArr.join()

//console.log(myArr)
//console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)

console.log("c", myArr);
console.log(myn2);