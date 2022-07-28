//  - DAY 2 
// Array - Array stores more than 1 value.

// stores the value in index 

// Index =       0          1        2         3
let menu = [ "panipuri", "pizza", "burger","sandwich"]

console.log(menu)
console.log(menu[0])
console.log(menu[2])

// loop 
// Initilization ; condition check ; increment/decrement

for (let i = 0 ; i < 3 ; i++)

console.log(i)

for (let i = 3 ; i > 0 ; i--){

    console.log(i)
    console.log(menu[1])
    console.log(menu[0])
}


// Everything in JS is an object
// person :
// property - weight height age
// method walk , talk 

// vehicle : 
// property - type, colour, reg 
// method - start , stop




//------------------------------------>>

// in JS everthing is object 
// Object has property method 
// In JS ARRAY is an object then array will property and method.

// method - fitness
// action - gym
//return type - muscles


let fruits = [ "mango", "grapes", "apple", "banana"]

// PUSH : 
// ACTION : add the element at the end 
// return new lenght of array 

let a = fruits.push("chiku")
console.log(a) // [ 'mango', 'grapes', 'apple', 'banana', 'chiku' ]
console.log(fruits) // 5

// Unshift :
// action : add the element at the beginning 
// return the new length

let b = fruits.unshift("cherry")
 console.log(b)  //[ 'cherry', 'mango', 'grapes', 'apple', 'banana', 'chiku' ]
 console.log(fruits)  // 6

 // Pop : 
 // action : removes the element from last
 // return the same element

 let c = fruits.pop("chiku")
 console.log(c) // chiku
 console.log(fruits) // [ 'cherry', 'mango', 'grapes', 'apple', 'banana' ]


 // Shift :

// Action - removes the element from beginning 
// and return th same element

let d = fruits.shift("cherry")
console.log(d) // cherry
console.log(fruits) // [ 'mango', 'grapes', 'apple', 'banana' ]

// --------------------------------------------->
//               0        1       2
let mobile = ["iphone","vivo","samsung"]

// indexOf 
// action = search for the element in array 

//return index of same, else return -1

let fff = mobile.indexOf("iphone")

console.log(fff)

console.log(mobile[2])