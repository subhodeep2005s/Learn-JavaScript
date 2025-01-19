// let Cars ={
//     make:"Toyota",
//     model:"camry",
//     year:2020,
//     start:function(){
//         return `${this.make} make this car in ${this.year}`
//     }
// }

// console.log(Cars.start());
class Vehical{
    constructor (make,model) {
            this.make=make;
            this.model=model;
    }
    start(){
        return `${this.make} make this car ${this.model} `
    }
};

class Car extends Vehical{
    Drive(){
            return `${this.make}:this is an iheritance example`
    }
}

let myCar=new Car("Toyota","Corrola")
// console.log(myCar.start());
// console.log(myCar.Drive());


class BankAccount{
    #Balance=20000
     

    Deposit(Amount){
        return  this.#Balance+=Amount;
        
    }
    getBalanc(){
        return `this is your Balance $${this.#Balance}`
    }
}

let myAccount = new BankAccount()
// console.log(myAccount.Deposit(2000));


// Abstraction
class CofeeMachine{
    start(){
        return `Starting the machine....`
    }

    brewingCofee(){
                return `brewing cofee..`
    }

    presStartButton(name){
        this.name=name;
        let msg=this.start()
        let msg2=this.brewingCofee()
        return `  ${msg} \n ${msg2}  \n  Done  your \n ${this.name} `
    }

}

let cup=new CofeeMachine()
// console.log(cup.presStartButton("Capachino"));


// polymorphisom

class Bird{

    fly(){
        return`Bird is flying...`
    }
}

class Penguine extends Bird{
    fly(){
        return  `Penguins Can't Fly`
    }
}

let bird= new Bird()
let pengine=new Penguine()
// console.log(bird.fly());
// console.log(pengine.fly());



// getters  setters

class Employe{
    #salary
    constructor (name,salary){
        this.name=name;
        this.#salary=salary;
    }


    get salary(){
      
        return `You are not able to see the salary`
       
    }

    set salary(value){
        if( value<0){
           console.error("Invaild salary");
           
        }else{
            return this._salary=value;
        }
    }
     
}
let emp=new Employe("Alice",-50000)

console.log(emp.salary);
