// function FetchUserData(){
//     return new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                     resolve({name:"Subhodeep",url:"https://youtube.com"})
//                 }, 3000);
//     })
// }

// async function getUserData(){
//     try {
//         console.log("fetching user data....");
//        const userData= await FetchUserData();
//        console.log("usser Data Fetched Sucessfully.");
       
//        console.log("user Data:" ,userData);
       
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getUserData()


function* numberGenrator(){
    yield 1;
    yield 2;
    yield 3;
};


let genn=numberGenrator();
console.log(genn.next().value);
console.log(genn.next().value);
console.log(genn.next().value);
