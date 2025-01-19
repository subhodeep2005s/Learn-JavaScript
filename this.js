const Person ={

name:"Subhodeep",
greet(){
console.log(`Hello ${this.name}`);

}

}

Person.greet()
const greetFunction=Person.greet;
greetFunction()
const Bound=Person.greet.bind({name:"John"});
Bound();