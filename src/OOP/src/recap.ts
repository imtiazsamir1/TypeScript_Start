//!class

class Person{
    constructor( public name:string, public age:number, public address:string){

    }
    getId(){
        console.log(` class component ::--user name is ${this.name} tar age is ${this.age} tar address ${this.address}`)
    }
}

const person1= new Person("tanvir", 29,"amulia")
person1.getId()
const person2=new Person("Imran-vhai",40,"mirPara")
person2.getId()
//!inheritance