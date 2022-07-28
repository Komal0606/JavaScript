// OOP ==
// Object orianted programming 
// the main purpose of OOP is to deal with real world entity using programing language
// OOP features== 
// Class 
// object
// Inheritance
// Polymorphism 
// Encapsulation 
// Abstraction 

// Program 01 
// using function constructor

let Info = function(fn, ln , age, clg){
    this.firstName = fn
    this.lastName = ln 
    this.age  = age 
    this.clg = clg
    // this.display = function(){
    //      console.log(this.clg)
    // }
}

let Anavi = new Info("Anavi", "Patil", "23", "MIT PUNE")
let Rudra = new Info("Rudra", "Kulkarni", "25", "MIT PUNE")

console.log(Anavi)
console.log(Rudra)

Info.prototype.favSubject = "Maths"
console.log(Anavi)
// when u add new properties into the prototype that will inherited by Anvi and rudra and shows into _proto_
Info.prototype.display = function(){
   console.log("HELLOOOOOOOO")
} 
Anavi.display()
Rudra.display()
//console.log(Anavi)
//console.log(Rudra)// display not showing into proto of anavi and rudra ?

console.log(Info.prototype === Anavi.__proto__) // TRUE
console.log(Info.prototype === Rudra.__proto__) // true
console.log(Anavi instanceof Info) // true
console.log(Rudra instanceof Info) // true
console.log(Anavi.hasOwnProperty("firstName")) // true
console.log(Rudra.hasOwnProperty('age')) // true

// Program 02
// using ES6 class

class Person {
    constructor(fn, ln ,age){
        this.firstName = fn
        this.lastName = ln
        this.age = age
    }
}

let Sagrika = new Person ("Sagrika", "Katkar", "21")
console.log(Sagrika)
console.log(Person.prototype === Sagrika.__proto__) // true
console.log(Sagrika.hasOwnProperty('age')) // true
console.log(Sagrika instanceof Person) // true

//Program 03
// By using Object.creat()

let payal = {
    display : function(){
        console.log("hello good morning")
    }
}

let koko = Object.create(payal) // when we pass object (e.g. payal) that will shows into the __prototype__
console.log(koko)
koko.name = "komal"
koko.age = "24"
koko.clg = "MIT"
console.log(koko)

let prathmesh = {
    name : "prathmesh",
    clg : "BCP",
    age : '24'
}

let kk  = Object.create(prathmesh) 
console.log(kk)
