function Car(make,model){
    this.make=make;
    this.model=model;
};




let myCar=new Car("tata","Safari");
// console.log(myCar);

let myNewCar=new Car("Tesla","Tesala-2.0");
// console.log(myNewCar);


function Tea(teaType){
    this.teaType=teaType;
    this.Description=function(){
        return `This is a ${this.teaType}`
    }
};


let myTea= new Tea("oolong-Tea")
let myNewTea=new Tea("Green Tea")
// console.log(myTea.Description());
// console.log(myNewTea.Description());

function Animal(species){
    this.species=species;
};
Animal.prototype.sound=function(){
    return `${this.species } makes a sound`;

}
let Dog= new Animal("Dog");
// console.log(Dog.sound());

function Drink(Drink_name){
    if(!new.target){
 throw new Error(`u should use a new keyard in `)
    }
    this.Drink_name=Drink_name;

}

let drink=  new  Drink("Old Monk")
console.log(drink.Drink_name);


