// Logical proramm ====

let names = ["komal", "samiran", "abhidyana","nivedita", "chivu"]
// find out the longest word 

 let longest = names.reduce(function(acc,el){

    if(el.length > acc.length){
        return el
    }

    else {
        return acc
    }
}, " ")

console.log(longest)

let shortest = names.reduce(function(acc,el){
    if(el.length <= acc.length){
        return el
    }
    else{
        return acc
    }
}, names[0])
console.log(shortest)

// number -- maximum value of array 

let number = [10, 20, 25, 45, 78, 98 ,200, 5]

let max = number.reduce(function(acc,el){
    if( el > acc ){ 
        return el
    }
    else{
        return acc 
    }
}, number[0])
console.log(max)

let min = number.reduce(function(acc,el){
    if(el < acc){
        return el 
    }
    else{
        return acc
    }
}, number[0])

console.log(min)

// -------------------------------------->
// // passing number to  a function 

function numb( a, b ){
    console.log(a+b)
}

numb(10, 50)

function numb2(x,y){
    //let x = undefined
    // let y = undefined
    console.log(x+y) // undefined + undefined // NaN
} 
numb()

function numb3(x= 85,y=10){
    //let x = 85
    // let y = 10
    console.log(x+y) // undefined + undefined // NaN
} 
numb3()

// passing string to the function 

function greet(word){
    console.log('preety'  +  word)
}
greet("swara")
greet('mona')

// passing array to the function 
 let values = [ 50, 20, 60, 30 , 40]
 function addArray(arr){
     let sum = arr.reduce(function(acc,el){
         return acc + el 
     })
     console.log(sum)
 }

 addArray(values)

 let paid = [ 2000, 4000, 1000]
 function addarray22(arr1){
     let sum2 = arr1.reduce(function(acc,el){
         return acc + el
     })
     console.log(sum2)
 }
 addarray22(paid)

  // passing array to the function 

  let debit = [500, 1000, 5000, 2000]
   function firstTwo([x,y]){
        console.log(x)// 500
        console.log(y)// 1000

   }
   firstTwo(debit)


   // passing object to the function 

   let student = {
       name : "komal",
       age : 23
   }

   function printKeyVal(obj){
       for(let key in obj){
           console.log(key, obj[key])
       }
   }
   printKeyVal(student)

   let person2 = {
    firstName:"pranjal",
    lastName:"sutar",
    marks:[16,55,88]
}

function printName({firstName:ab,lastName:cd}){
    console.log(ab + " "+ cd)
}
printName(person2)

// passing function as parameter to another function

// let add3 = function(x,y){
//     console.log(x+y)
// }
// add3(12,13) // calling the function

// console.log(add3)

// let x = 10
// console.log(x)

let add3 = function(x,y){
    console.log(x+y)
}

function addition3(fn,a,b){

    // let fn = function(x,y){
    //     console.log(x+y)
    // }
    // let a = 12
    // let b = 13

    fn(a,b)


}
addition3(add3,12,13)