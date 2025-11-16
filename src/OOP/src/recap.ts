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
class Animal{
    constructor(public name:string,public spasis:string,public sound:string){
        

    }
    makeSound(){
        console.log(`the animal name is${this.name}spsis is ${this.spasis} and sound is ${this.sound}`)
    }
}
class Dog extends Animal{
    constructor(public name:string,public spasis:string,public sound:string, public age:number){
        super(name,spasis,sound)
        this.age=age;

    }
    getDog(){
        console.log('this is dog class')
    }
}

class Cat extends Animal{
    constructor(public name:string,public spasis:string,public sound:string, public color:string){
        super(name,spasis,sound)
        this.color=color;

    }
    getCat(){
        console.log(`this cat name is ${this.name } and her color is ${this.color}`)
    }
}

const cat1=new Cat('bilai','animal','meaw','white');
cat1.getCat()
