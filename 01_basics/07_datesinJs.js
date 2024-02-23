// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 1, 23)
//let myCreatedDate = new Date(2024, 1, 23, 23, 41)
//let myCreatedDate = new Date("2024-02-23")
let myCreatedDate = new Date("01-23-23-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); it get time in milisecond
//console.log(Math.floor(Date.now()/1000)); it get time in seconds

let newDate = new Date()
console.log(newDate);
//console.log(newDate.getMonth() + 1); to get month
console.log(newDate.getDay());

 //'${newDate.getDay()} and Time '

 newDate.toLocaleString('default', {
    weekday: "long",
    
 })

