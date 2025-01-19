// function MakeTea(TypeofTea) {
//    return `Make ${TypeofTea}`;

// }
// console.log(MakeTea("Leamon tea"));

// function orderTea(teaType) {
//   function cinformOrder() {
//     return "Order cinformation for Chai";
//   }
//   return cinformOrder()
// }

// console.log(orderTea("lemon tea"));

// const greet=(s_name)=>{
// console.log(s_name);

// }
// greet("chai")

// const calculateTotal = (price, quantity) =>  price * quantity;


// let totaCost=calculateTotal(500,100);

// console.log(totaCost);



// First class Functio || highert order function 


// function makeTea(TypeofTea){
//  return TypeofTea
// }

// function processTeaOrder(TeaFunction){
//    return TeaFunction("earl greay")
// }

// let order =processTeaOrder(makeTea);
// console.log(order);
// function makerTea(typeofTea){
//     return `making ${typeofTea}`
// }

// function creatTeaMaker(){
//     return function (typeofTea){
//         return `making ${typeofTea}`
//     }
// }

// let teaMaker= creatTeaMaker()
// console.log(teaMaker("leamon Tea"));
// function isItTruthy(input) {
//     if(Boolean(input)==="true"){
//         return "It's truthy!";
//     }else if (Boolean(input)==="false"){
//         return "It's falsey!"
//     }
    
// }

// console.log(isItTruthy("hello"));
// let as=Boolean(3);
// console.log(as!='true');

function countVowels(str) {
    let count=0;
    for(let i=0; i < str.length ;i++){
        if (str[i].toLowerCase() ==='a' || str[i].toLowerCase() ==='e' || str[i].toLowerCase() ==='i' || str[i].toLowerCase() ==='o' || str[i].toLowerCase() ==='u') {
             count++
        }
    }
    
  return count;
}


console.log(countVowels("hello"));

