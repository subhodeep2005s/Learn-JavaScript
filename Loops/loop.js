// // sum of 1 to 5 using while loop
// let sum=0;
// // let i=0;

// while (i<=5) {
//    sum=sum+i;
//     i++
// }
// console.log(sum);

// let arr=[];
// let i=0;

// while (i<=5) {
//     arr.push(i);
//     i++
    
// }
// console.log(arr);



// let Teas=["greenTea","BlackTea","Chai","oolongTea"]
// let SelectedTeas=[];

// for (let i = 0; i < Teas.length; i++) {
//     if (Teas[i]==="Chai") {
//         console.log(i);
        
//         console.log(Teas[i]+" found");
//         break;
        
//     }
//     SelectedTeas.push(Teas[i])

    
// }
// console.log(SelectedTeas);


// let Cities=["London","Newyork","Paris","Berlin"]
// let VisitedCites=[];
// for(let i=0; i<Cities.length;i++ ){
//     if(Cities[i]==="Paris"){
//             continue;
//     }
//     VisitedCites.push(Cities[i])

// }
// console.log(VisitedCites);


// forof loop
// let Numbers=[1,2,3,4,5]
// let SmallNumbers=[];

// for (const num of Numbers) {
//     if (num===4) {
//         break;
//     }
//     SmallNumbers.push(num);
    
    
// }
// console.log(SmallNumbers);

// let citiesPopulation={
//     "NewYork":99399348,
//     "London":9939799348,
//     "Paris":99393089348,
//     "Berlin":99393549348,
//     "Mumbai":993932199348,
// }
// let citiesNewPopulations={};
// // console.log(Object.values(citiesPopulation));
// for (const city in citiesPopulation) {
//     if (city==="Berlin") {
//         break
//     }
// citiesNewPopulations[city]=citiesPopulation[city]   

// }
// console.log(citiesNewPopulations);


// let citiesPopulation={
//     "NewYork":99399348,
//     "London":9939799348,
//     "Paris":99393089348,
//     "Berlin":99393549348,
//     "Mumbai":2000,
// }
// let citiesNewPopulations={};
// // console.log(Object.values(citiesPopulation));
// for (const city in citiesPopulation) {
//     if (citiesPopulation[city]<3000) {
//         break
//     }
// citiesNewPopulations[city]=Object.values[citiesPopulation]  

// }
// console.log(citiesNewPopulations);


// forEach loop

// let Teas=["greenTea","BlackTea","Chai","oolongTea","LemontEA"]
// let availableTeas=[];
// Teas.forEach((item) => {
//   if (item==='Chai') {
//       return;
//   }
//   availableTeas.push(item)
    
// });
// console.log(availableTeas);








// let Numbers=[2,5,7,9];
// let dubleNumbers=[];

// for (let i = 0; i < Numbers.length; i++) {
//     if (Numbers[i]===7) {
//         continue
//     }

// dubleNumbers.push(Numbers[i]*2);

// }
// console.log(dubleNumbers);

// let Teas=["greenTea","subhodeeps","BlackTea","Chai","oolongTea","tuyetfbuefucyueycf","LemontEA"]
// let shortTeas=[];
// for (const tea of Teas) {
//     if (tea.length>10) {
//         break
//     }
//    shortTeas.push(tea)
    
// };
// console.log(shortTeas);

