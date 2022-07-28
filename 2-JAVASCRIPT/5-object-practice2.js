// types of object
// object literal , class, using constrctor, ES6 class, create object

// OBJECT LITRAL
let obj1 = {
    name : "komal",
    lastname : "palke",
    age : 23
}

console.log(obj1)
console.log(obj1.name)
console.log(obj1["age"])
console.log(obj1.name = "pooja")
console.log(obj1.brach = "pharmacy")
delete obj1.lastname
console.log(obj1)

// class 
class Person{
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln
        this.age = age 
    }
}
let komal = new Person("komal", "palke", "23")
console.log(komal)
let aayush = new Person("aayush", "agrwal", "24")
console.log(aayush)
console.log(aayush.firstName)
console.log(komal.lastName)

// Using constructor == 

let Info = function(fn,ln,age){
    this.firstName = fn
    this.lastName = ln 
    this.age = age
}

let raghav = new Info("raghav", "juyal", "32")
console.log(raghav)
let Rashmi = new Info("rashmi", "kanitkar", "65")
console.log(Rashmi)

//ES6 class
class info2 {
    name = undefined
    lastName = undefined
    age = undefined
}
let chaitanya = new info2()
console.log(chaitanya)

