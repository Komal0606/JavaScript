// ways to define function in javascript

// different types of functions

let x = 20
let y = 10

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

// DRY ----- DO NOT REPEAT yuorself

// 1 method -funcyion declaration 
// program 1
 console.log("*************************")


 function calculator(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
 }
 calculator(25,20)
 console.log("*************************************")
 calculator(80,20)

 // setting default values via parameter
 // program 3 
 function add (x,y,z){
     console.log(x+y+z)
 }

 add(10,15,20)
 add(45,20)

 console.log("*****************************")
 // method - 2 - function expression
//in javascript function expression function is first class function 

let calculator2 =  function(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
 }

 calculator2(35,6)
 calculator2(50,26)

 // method - 3 - arrow method

 let calculator3 = (a,b)=>{
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
 }
 calculator3(60,30)
 console.log("******************")
 calculator3(80,62)

 