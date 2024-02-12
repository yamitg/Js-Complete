let myDate=new Date()
let Daate=new Date("12-02-2024")

console.log(myDate);
console.log(`To Date: ${myDate.getDate()}`);
console.log(`To String: ${myDate.toDateString()}`);
console.log(`To JSON :${myDate.toJSON()}`);
console.log(`ISO string: ${myDate.toISOString()}`);
console.log(` Local Date: ${Daate.toLocaleString}`);


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/100000000));