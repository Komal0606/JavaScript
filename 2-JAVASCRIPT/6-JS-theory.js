console.log("hello world")
//process.stdout.write("good morning")//We can use the stdout (as in C/C++) 
//child of the process object and call its write method to write into the console explicitly.

// variables 
var variable;
variable = 10
console.log(variable);

var name // variable declaration
name = "komal" // variable assignment
console.log(name)  // // variable printing
console.log("name", name) // // variable printing

var num1 = 100
console.log(num1)
var num2 = 500 
console.log(num2)

var variable_1 = 100
let variable_2 = 200
const variable_3 = 300
variable_4 = 400

console.log(variable_1)
console.log(variable_2)
console.log(variable_3)
console.log(variable_4)

var1 = 20
var2 = 30
var3 = 10

console.log("Original Values:"); 
console.log(`var1:${var1}, var2:${var2}, var3:${var3}`); // print values
// Solution is below
var temp = var1; // store var1 value temoporary
var1= var3; // overwrite var1 with var3
var3= var2; // overwrite var3 with var2
var2= temp; // overwrite var2 with temp (old var1 value)

console.log("New Values:");
console.log(`var1:${var1}, var2:${var2}, var3:${var3}`); // print values

// Loops need a dependent condition as it continues to iterate the same set 
//of instructions until the condition fails.

// loop

// Types of JavaScript loops#
// So far we have seen only one type of loop, the while loop. Below is a list of all loops in JavaScript:

// while – While loop
// do/while – Do - While loop
// for – For loop
// for/in – For - in loop
// for/of – For - of loop
// forEach – For each loop
// Each of these offers of its own convenience.

var count = 0 
while(count < 5){
    console.log(++count )
}
console.log(count)

// function 
function sum(a,b){
   console.log(a+b)
}
sum(10,20)

// by using var and assinging function to variables

function sum1(x, y){
    var ans = (x+y)
    return ans
}

var var1 = 100
var var2 = 200
var3 = sum1(var1, var2)
console.log(var3)

// assigning var to the function 
var var4 = 10
var var5 = 20
var var6 = function sum3(a, b){
    var ans1 = a+b
    return ans1
}
//console.log(var6(var4, var5))


// proto type
// prototype is a property and __proto__ its name of property

let vehicle = {
    wheels : 4
}

let car = {
    seats : 5
}

let driver = {

}

console.log(`vehicle:`, vehicle, vehicle.__proto__)
console.log(`car:`, car, car.__proto__)
console.log(`driver:`, driver, driver.__proto__)

let car1 = {
    seats : 5,
    __proto__ : vehicle
}

console.log(`car:`, car1, car1.__proto__)

let student = {
    name : "komal"
    
}


let clg = {
    name : "mit kothrud",
    __proto__ : student
}

console.log(student)
console.log(clg)
console.log(student.__proto__)
console.log(clg.__proto__)

let vehicle11 = { wheels : 4 }; // object assigned to variable named vehicle
let car11 = { 
    seats : 5, 
    __proto__ : vehicle11, // __proto__ property assigned to vehicle
    wheels : 6,
}; // object assigned to variable named car

// Print all objects and __proto__ property for each variable
console.log(`vehicle11:`, vehicle11, vehicle11.__proto__);
console.log(`car11:`, car11, car11.__proto__);
console.log(`car11 wheels:`, car11.wheels);





