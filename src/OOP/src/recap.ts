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
// class Animal{
//     constructor(public name:string,public spasis:string,public sound:string){
        

//     }
//     makeSound(){
//         console.log(`the animal name is${this.name}spsis is ${this.spasis} and sound is ${this.sound}`)
//     }
// }
// class Dog extends Animal{
//     constructor(public name:string,public spasis:string,public sound:string, public age:number){
//         super(name,spasis,sound)
//         this.age=age;

//     }
//     getDog(){
//         console.log('this is dog class')
//     }
// }

// class Cat extends Animal{
//     constructor(public name:string,public spasis:string,public sound:string, public color:string){
//         super(name,spasis,sound)
//         this.color=color;

//     }
//     getCat(){
//         console.log(`this cat name is ${this.name } and her color is ${this.color}`)
//     }
// }

// const cat1=new Cat('bilai','animal','meaw','white');
// cat1.getCat()


//! polimarphism

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
     makeSound(){
        console.log(`the name is ${this.name} & age is ${this.age}`)
    }
}

class Cat extends Animal{
    constructor(public name:string,public spasis:string,public sound:string, public color:string){
        super(name,spasis,sound)
        this.color=color;

    }
    makeSound(){
        console.log(`this cat name is ${this.name } and her color is ${this.color}`)
    }
}

const cat1=new Cat('bilai','animal','meaw','white');
const dog1=new Dog('kutta','animal','burk burk',12);
cat1.makeSound()
dog1.makeSound()

//!Abstruction

// interface Multimedia{
//   play():void;
//   puse():void;
//   stop():void;
// }

// class  Musicplayer implements Multimedia{
//     play(): void {
//         console.log('this is play......')
//     }
//     puse(): void {
//         console.log("this is puse...")
//     }
//     stop(): void {
//         console.log("this is stop")
//     }
// }
// const musicPlayer1=new Musicplayer()
// musicPlayer1.play()
//? abastrac class

abstract class MediaPlayer{
    abstract play():void
    abstract puse():void
    abstract stop():void
}
class SamirPlayer extends MediaPlayer{
    play(): void {
        console.log("this is paly...")
    }
    puse(): void {
        console.log("this is puse...")
    }
    stop(): void {
        console.log("this is stop...")
    }
}
const samirPlayer1 = new SamirPlayer()
samirPlayer1.play()

//!