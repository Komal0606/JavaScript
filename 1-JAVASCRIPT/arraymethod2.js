/// method -- slice()
// action - divides the array based on index 
// return - array 

let friends = [ "snehal", "goshiya", "aayush", "saba", "prathmesh"]

let arrOne = friends.slice(2)
console.log(arrOne)  // [ 'aayush', 'saba', 'prathmesh' ]

let arrTwo = friends.slice(1)
console.log(arrTwo)  // [ 'goshiya', 'aayush', 'saba', 'prathmesh' ]

//                   0        1           2       3
//let friends = [ "snehal", "goshiya", "aayush", "saba", "prathmesh"]
//                  -4         -3         -2        -1
let arrThree = friends.slice(-2)
console.log(arrThree)  // [ 'saba', 'prathmesh' ]

let arrThree2 = friends.slice(-4)
console.log(arrThree2)  // [ 'goshiya', 'aayush', 'saba', 'prathmesh' ]

let arr4 = friends.slice(0,2)
console.log(arr4) // [ 'snehal', 'goshiya' ]

let arr5 = friends.slice(1,3)
console.log(arr5)   // [ 'goshiya', 'aayush' ]

let arr7 = friends.slice(-4, -1)
console.log(arr7)  // [ 'goshiya', 'aayush', 'saba' ]

     //          0      1         2        3        4
// let koko = ["ram ", "sham", "chintu", "pintu", "mintu"]
//    //        -4       -3       -2        -1       0
//    console.log(koko.slice(1))
//    console.log(koko.slice(2))
//    console.log(koko.slice(3))
//    console.log(koko.slice(1 , 4))
//    console.log(koko.slice(0, 3))
//    console.log(koko.slice(0, 1))
//    console.log(koko.slice(2, 4))
//    console.log(koko.slice(-3))
//    console.log(koko.slice(-4))
//    console.log(koko.slice(-1))
//    console.log(koko.slice(-4, -1))
//    console.log(koko.slice(-2, -1))




// // map() , filter() ,reduce() , forEach() , some(), every(),find (),findex()

let birthYear = [1998, 1999, 2000, 2001]
 //   output  = [ 24, 23, 22, 21]

 let calAge = [] // [ 24, 23, 22, 21]
 for(let i = 0 ; i < birthYear.length ; i++){
    let age = 2022 - birthYear[i]
    calAge.push(age)
 }
 console.log(calAge)

//  let nummm = [ 10, 20, 30, 40]
//  let newnum = []
//   for(let i = 0 ; i < num.length ; i++){
//       let num1 = 100 - nummm[i]
//       newnum.push(num1)
//   }
//   console.log(newnum)

console.log('------------map -------------------')
// Method - map()
// Action - works with every element of array
// Return- new Array

// el - currentElement
// index  - index 
// arr - [2000, 1999,1998,1989]

let birthYear44 = [1998, 1999, 2000, 2001]
 //   output  = [ 24, 23, 22, 21]

let aab = birthYear.map(function(el,ind,arr){
    // console.log(el,ind,arr)
    return 2024 - el
})
console.log(aab)  // [ 24, 23, 22, 21 ]

let bbc = birthYear.map(function(el,ind,arr){
    return 2000 + el
})
console.log(bbc)

// practice ex - 
// let num = [5, 6, 7 ,8 ]
// let zzz = num.map(function(el){
//     return el * 2
// })
// console.log(zzz)

let amount = [ 200, 100, 80, 60, 50, 20, 10, 30]
// output [200,100,80,60]
let above50 = []
for(let i = 0 ; i < 7 ; i++){
    if(amount[i] > 50){
        above50.push(amount[i])
    }
}
console.log(above50)

console.log('----------filter----------')

let ccgg = amount.filter(function(el,ind,arr){
    return el > 60
})
console.log(ccgg)

let hhoo = amount.filter(function(el,ind,arr){
    return el < 50
})
console.log(hhoo)

let payment5 = [10, 20, 30, 40, 50]
let sum = 0 
for(let i = 0 ; i < payment5.length ; i++){
    sum = sum + payment5[i]
}
console.log(sum)

console.log('-----------reduce -----------------------')

 // Method - Reduce 
 // Adds up every element 
 // Return single

 let ccff = payment5.reduce(function(acc,el,ind,arr){
     return acc + el // 150
 },0)
 console.log(ccff)

//  let a = [ 10, 20, 40]
//  let ccxx = a.reduce(function(acc,el,ind,arr){
//      return acc + el
//  },0)
// console.log(a)



// //  node arraymethod2.js


// practise 

let kpkp = [10, 20,15, 22]
let gg = kpkp.map(function(el){
    return el + 100
})

console.log(gg)

let gg2 = kpkp.filter(function(el){
    return el <= 20
})
console.log(gg2)



 
