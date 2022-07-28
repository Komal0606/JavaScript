let names = ["komal", "meer", "prathmesh"]
console.log(names)
console.log(names[0])
console.log(names[2])
//1 =  push
let aa = names.push("Sourabh") 
console.log(aa) // gives length
console.log(names)
// unshift
let bb = names.unshift("Pratiksha")
console.log(bb) // gives length
console.log(names)
// pop
let cc = names.pop()
console.log(cc) // gives deleted element
console.log(names)
// shift 
let dd = names.shift()
console.log(dd) // gives deleted element 
console.log(names)

let name2 = ["diksha", "sanvi", "radhika", "rani"]
console.log(name2)

let aa1 = name2.includes("raja")
console.log(aa1) // false
aa2 = name2.includes("sanvi")
console.log(aa2) // true

let aa3 = name2.indexOf("diksha")
console.log(aa3) // 0
console.log(name2.indexOf("radhika")) // 2

let aa4 = name2.join('@')
console.log(aa4)  // diksha@sanvi@radhika@rani
console.log(name2.join('_')) // diksha_sanvi_radhika_rani

let aa5 = name2.sort()
console.log(aa5)  //   sort by alphabetically

let aa6 = name2.reverse()
console.log(aa6) // reverse the  array 

let name3 = [ "karnatak" , "kashmir", "rajstan", "delhi"]
let name4 = [ 20, 500, 4000, 5000]
let bb1 = name3.concat(name4)
console.log(bb1)
let bb2 = name4.concat(name3)
console.log(bb2)
  
//             0       1        2     3         4       5
let name5 = ["lili", "jack", "alex", "john", "robin", "lee"]
//            -5       -4      -3      -2      -1       0               

let cc1 = name5.slice(0, 3)
console.log(cc1) // [lili, jack, alex]
let cc2 = name5.slice(1,4)
console.log(cc2) //[  "jack", "alex", "john", ]
let cc3 = name5.slice(2,5)
console.log(cc3) // ["alex", "john", "robin"]
let cc4 = name5.slice(-4, -2)
console.log(cc4) // ["alex", "john"]
let cc5 = name5.slice(-5, -2)
console.log(cc5) // ["jack", "alex", "john"]
let cc6 = name5.slice(-2, 0)
console.log(cc6) // ["robin", "lee"]

//             0         1         2       3         4
let name6 = ["chinku", "pinku", "mintu", "chikki", "mikki"]
//             -4       -3        -2        -1       0
let dd1 = name6.splice(1, 3) 
console.log(dd1) //["pinku", "mintu", "chikki"]

let dd2 = name6.splice(0,2)
console.log(dd2)

let dd3 = name6.splice(1,4)
console.log(dd3)

let dd4 = name6.splice(-3, -1)
console.log(dd4)