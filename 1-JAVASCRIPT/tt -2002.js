// MAP () , filter (), reduce(), forEach(),



let birthYear = [2000, 1999, 1998,1989]
// output [22,23,24,33]
let calAge = []  
for(let i = 0 ; i< birthYear.length ; i++){
   // console.log(2022-birthYear[i])
   let age = 2022 - birthYear[i]
   calAge.push(age)

}
console.log(calAge)

// * method - map()
// action -  works with every element of array.
// return : - new array

// el - current element 
// index - index
// array - [2000, 1999,1998,1989]

let aa = birthYear.map(function(el,ind,arr){
    return 2022 - el
})
console.log(aa)

let num = [3, 4, 8, 10]

let bb = num.map(function(el){
    return el * 2
})

console.log(bb)

console.log ('-------------------------------------------')


let ferAge = [22, 23, 25, 88, 66, 99]
let above60 = []

for(let i = 0 ; i < ferAge.length; i++){ 
//console.log(ferAge[i])
if(ferAge[i] > 60){
    above60.push(ferAge)
}
}
 console.log(above60)