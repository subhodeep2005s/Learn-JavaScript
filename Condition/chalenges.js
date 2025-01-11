// Chack if an number is grater than another number
let num1 = 8;
let num2 = 8;

if (num2 > num1) {
  console.log(num2 + " Is grater ");
} else {
  console.log("Nope");
}

// Chack if user name equal to another User Name

// let userName="subhodeep";
// let anotherUsername="subhodeep";
// if (userName==anotherUsername) {
//     console.log("Pick Another User Name");

// }else{
//     console.log("U loged in");

// }

// chack if a variavble isa number
let score = 30;
if (typeof score === "number") {
  console.log(" is a number");
} else {
  console.log("Not a Number");
}

// chack if a Boolean is a  true or false
let isReady=true;
if (isReady) {
  console.log("True");
  
    
}else{
    console.log("False");
}

// chack if a array is empty or not
let arr=[];

if (arr.length==0) {
    console.log("Empty");
    
}else{
    console.log("not Empty");
    
}
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

