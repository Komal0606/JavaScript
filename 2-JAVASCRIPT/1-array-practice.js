// ARRAY ---  
// push, pop, unshift, shift 

let fruits = ["maango", "banana", "apple"]
console.log(fruits)

let aa = fruits.push("watermelon")
console.log(aa)
console.log(fruits)

let bb = fruits.unshift("lichi")
console.log(bb)
console.log(fruits)
  
console.log("**********************************")
let cc = fruits.pop()
console.log(cc)
console.log(fruits)

let dd = fruits.shift()
console.log(fruits)
console.log(dd)


console.log("******************-------------------------****************")

//  join , concat, reverse, sort 

let names = [ "abhinav", "danny", "isha", "bobby"]
let aaa = names.sort()
console.log(aaa)
console.log(names)

let ddd = names.reverse()
console.log(ddd)

//join 

let gg = names.join("__")
console.log(gg)
console.log(names)

//concat 

let firstname = ["komal", "vishal", "suvarna", "ashwini"]
let lastname = [ "palke", "palke", "sutar", "landge"]

let hh = firstname.concat(lastname)
console.log(hh)
let oo = lastname.concat(firstname)
console.log(oo)

console.log("**************____________________****************")

//slice --
  //            0        1        2        3       4          5
let name22 = ["komal", "pooja", "priya", "soni", "kartiki", "pranjal"]
//           -5         -4      -3        -2      -1          0
let ko = name22.slice(2)
console.log(ko)             // [ 'priya', 'soni', 'kartiki', 'pranjal' ]

let ko1 = name22.slice(3)
console.log(ko1)     // [ 'soni', 'kartiki', 'pranjal' ]

let ko2 = name22.slice(1,4)
console.log(ko2)     // [ 'pooja', 'priya', 'soni' ]

let ko3 = name22.slice(-4, -1)
console.log(ko3)      // [ 'priya', 'soni', 'kartiki' ]

let ko4 = name22.slice(-5,-1)
console.log(ko4)     // [ 'pooja', 'priya', 'soni', 'kartiki' ]

// Splice method == it is opposite to `
//               0    1   2  3   4    5 
let number78 = [ 10, 50, 60, 80, 40, 5656]
number78.splice(1,3)
console.log(number78)
number78.splice(2,4)
console.log(number78)

// indexof method 

let number8 = [ 10, 45, 50, 60, "komal"]
let g1 = number8.indexOf("komal")
console.log(g1)  // 4
let g2 = number8.indexOf(60)
console.log(g2)  // 3

// includes ==  gives bollean value

let names44 = [ "komal", "janhvi", "urvashi","vartika"]
let hh1 = names44.includes("komal")
console.log(hh1)
let h2 = names44.includes("ram")
console.log(h2) 

