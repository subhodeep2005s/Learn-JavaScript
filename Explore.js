function fetchData(){
  return new Promise((resolve,rejected)=> {
    setTimeout(() => {
        let sucess=true;
        if (sucess) {
            resolve("DAta fetched sucessfully ")
        }else{
             rejected("Unsucessfull")
        }
        
    }, 2000);
  })
}
fetchData()
    .then((data)=>console.log(data))
    .catch((error)=>console.warn(error))




    function Person(name){
        this.name=name;
    }
    Person.prototype.greet=function(){
        console.log(`hello how are you ${this.name}`);
        
    }

    let myName=new Person("subhodeep");
    myName.greet()
    