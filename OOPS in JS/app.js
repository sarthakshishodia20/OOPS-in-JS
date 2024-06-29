// function personMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk:function(){
//             console.log("hello");
//         }
//     };
//     return person;
// };
// let p1=personMaker("adam",20);
// console.log(p1);



// ---------------------------------------------------------------------------------------------------------
// More Better way than factory Function
// Constructor does not return anything and starts with Capital Letters

// function person(name,age){
//     this.name=name;
//     this.age=age;
// }
// person.prototype.talk=function(){
//     console.log(`Hello i can talk my name is ${this.name}`);
// }
// let p1=new person("sarthak",20);
// console.log(p1);
// let p2=new person("Shivay",21);
// console.log(p2);


// ----------------------------------------------------------------------------------------------------------------------
// Classes in Js 
// optimised way of defining object in Js

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hello my name is ${this.name}`);
    }
}
// let p1=new Person("adam",20);
// console.log(p1);


class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
    }
}
let s1=new Student("adam",20,90);
console.log(s1);

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);// parent class ke constructor ko call lgana 
        this.subject=subject;
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
    }
}
let s2=new Teacher("Shiv",34,"Hindi");
console.log(s2);


class Mammal{
    constructor(name){
        this.type="warm Blodded";
        this.name=name;
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);

    }
    bark(){
        console.log("bow bow");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow meow");
    }
}
let d=new Dog("Buggy");
let c=new Cat("billa");