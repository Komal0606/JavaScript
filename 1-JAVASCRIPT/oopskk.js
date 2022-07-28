//4 ways to create Object = 
// 1) - object literal
// 2) - function constructor
// 3) -ES6 class
// 4) object create method

let Student = function(firstName,lastName,clg, sub){

    this.firstName = firstName
    this.lastName = lastName
    this.clg = clg
    this.sub = sub
}
let komal = new Student ("komal", "palke", "mit pune", "pharmaceutics")
//console.log(komal)
let vishal = new Student ("vishal", "palke", "A.M clg", "account")

Student.prototype.display= function(){
    console.log(this.lastName)
}

Student.prototype.marks = "80%"
console.log(komal)
let k2 = Student.marks
console.log(k2)
 komal.display()
 vishal.display()


 console.log(komal._proto_ === Student.prototype) // false 
 console.log(komal instanceof Student) // true
 console.log(vishal instanceof Student) // true
 console.log(komal.marks)
 console.log(vishal.marks)

 console.log(komal.hasOwnProperty('firstName'))
 console.log(vishal.hasOwnProperty("clg"))

let Student1 = function(name , clg, marks){

    this.name = name 
    this.clg = clg
    this.marks = marks
}

Student1.prototype.display = function(){
    console.log(this.clg)
}

Student1.prototype.class = "12th"

let aayush = new Student1( "aayush", "jspm", "90%")
let tanu = new Student1('Tanuja', 'jspm', "95%")

console.log(aayush.clg)
console.log(aayush.marks)
console.log(aayush.class)
console.log(tanu.class)
console.log(tanu instanceof Student1)
console.log(tanu.hasOwnProperty('clg'))

// program 2 

class Person {

    constuctor(name , age , clg ){
        this.name = name
        this.age = age 
        this.clg = clg 
    }

    display(){
        console.log(this.name)
        }
}

let nirali = new Person("nirali", "jspm", "23")
let jostna = new Person( "Jostna ", "MIT", "35")
console.log(nirali)
console.log(jostna)
jostna.display()
console.log(jostna instanceof Person)
console.log(nirali.hasOwnProperty("clg")) // false in terminal

// program 3 = 

let protoobject = {

    display : function(){
        console.log("good morning")
    }
}

let hhy = Object.create(protoobject)
console.log(hhy)

// _proto_

hhy.name = "palke"
hhy.age = "23"
hhy.clg = "r. r. shinde"

console.log(hhy)
hhy.display()

let kko = {
    display(){
        console.log("hellooooooo")
    }

}

let hh = Object.create(kko)
hh.display()

hh.name = "virat"
hh.age = "20"
hh.passion = "cricket"

console.log(kko)

