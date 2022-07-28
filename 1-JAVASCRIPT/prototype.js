// object 
// object literal
let a = {
    name : "komal palke",
    clg :"mit kothrud",
    age : 23
}


let Person = function(song, movie){
    this.song = song
    this.movie = movie
}

Person.prototype.display = function(){
    console.log(this.song)
}


let mtv = new Person("all is well", " 3 idiots")
console.log(mtv)
let mtv2 = new Person("hud hud dabbang", "Dabang")
console.log(mtv2)
mtv.display()
mtv2.display()

// Person's prototype is equals to the mtv and mtv 2 __Protototype__
// display method which is added into the prototype of person that will 
//inherited by mtv and mtv2 objects 

Person.prototype.actor = "Amir Khan "
console.log(mtv.actor)
console.log(mtv2.actor)

Person.prototype.actor1 = "Salman Khan"
console.log(mtv2.actor1)

console.log(mtv.hasOwnProperty("actor")) // false
console.log(Person.prototype.hasOwnProperty("actor")) // true

console.log(mtv instanceof Person)  // true
console.log(mtv2 instanceof Person)  // true

// Array 
// singers is object of array
// prototype of Array is equals to the __Prototype__ of singers
// array has differnt methods e.g push, pop , map etc so this method are saved under prototype of array.

let singers = [ " kishorkumar", "lata", "rafi", "aasha"]

console.log(singers instanceof Array) // true
console.log(singers.__proto__ == Array.prototype) // true

console.log(new Set([10, 20, 20, 30, 50, 50]))
console.log(Array.from(new Set([10,20,30,50])))






