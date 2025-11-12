type User={
    name:string;
    age:number;
};
// interface : object type: array, object , function 

interface IUser{
    name:string,
    age:number
}





type Role={
    role:"admin"|"user",

}


interface IUserWithRole extends IUser{
 role:"admin"|"user"
}

type UserWithRole=User & Role;

const user1:IUserWithRole={
    name:"imtiaz",
    age:28,
    role:'admin'
}
const user2:IUser={
    name:"samir",
    age:27,
}

//! primitive data not allow interface. only object,array,function type

type isAdmin=boolean;
const isAdmin:isAdmin=true


//function
type Add=(num1:number,num2:number)=>number;

interface IAdd{
    (num1:number,num2:number):number;


}

const add:IAdd=(num1,num2)=>num1+num2