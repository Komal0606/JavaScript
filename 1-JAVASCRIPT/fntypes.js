// function declaration --

let licenseAvailable = false 
const testPass = true

if(testPass)licenseAvailable = true
if(licenseAvailable) console.log('i can drive now')

let aa = 5
let bb = 6

console.log(aa+bb)
console.log(aa-bb)
console.log(aa*bb)
console.log(aa/bb)
console.log(aa%bb)

let x = 100
let y = 50 

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

// function 


function cal(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x*y)
    console.log(x%y)
}
cal(100,50)

 console.log("---------------------------------fn declla----------")

function add(){
    console.log(20+20)
}
add()

function printName(){
    console.log("my name is komal palke")
}

printName()
printName()
printName()


function bookey(flOne, flTwo){
    console.log(`the bookey is combination od ${flOne} and ${flTwo}`)
}

bookey("pink rose"," white rose")

/// string 

let firstName = "komal"
let lastName  = "palke"

console.log("my first name is " + firstName + "and last name is" + lastName)

let firstsalary = 200
let secondsalary  = 17005

console.log("my first salary is " + firstsalary + "and secondsalary is " + secondsalary)


// String interpolation
console.log(`My firstname is ${firstName} and lastName is ${lastName}`)

//   function expression

function calAge(birthYear){
    return 2022 - birthYear
}
 let age = calAge(1998)
 console.log(age)


 // function expression

let calAge2 = function(birthYear){
    return 2022 - birthYear
}
let age2 = calAge2(1995)
console.log(age2)

// Arrow functions

let calAge3 = (birthYear)=>{
    return 2022 - birthYear
}

let age3 = calAge3(1990)
 console.log(age3)

 let payments = function(amount){
     return 1000 - amount
 }

 let remamt = payments(500)
 console.log(remamt)

 // arrrow fn --

 let payments2 = (amount)=>{
     return 2000 - amount
 }
 let remamt2 = payments2(100)
 console.log(remamt2)

 //// function with if else statement

 if(age < 60 ){
    console.log(`Remaining years for retirement ${60-age}`)
}
else {
    console.log(`Already retired`)

}

let age4 = calAge3(1960)
//retirementAge(age4)
console.log(`The additon of one plus two is ${1+2}`)  // '3' // 3


// Marks 

let calAvg = (a,b,c)=> (a + b + c)/3

let avgAmol = calAvg(5,6,7)
let avgSarika = calAvg(7,8,9)
let avgPoorva = calAvg(5,6,7)

function getTopper(studentOne,studentTwo,studentThree){
    if(studentOne > studentTwo  && studentOne >studentThree){
        console.log(`Student one is Topper`)
    }
    else if(studentTwo > studentThree){
        console.log(`StudentTwo is Topper`)
    }
    else {
        console.log(`Student Three is Topper`)
    }
}
getTopper(avgAmol,avgSarika,avgPoorva)



//node fntypes.js