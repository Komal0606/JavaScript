// map , find, reduce, filter each, 

// map method ==  in map we work with every element and we get a new array
let koko = [10, 20, 30, 40]
let gg = koko.map(function(el){
    return 1000 - el
})
console.log(gg)
 let gg1 = koko.map(function(el){
    return 200 * el
 })
 console.log(gg1)

 let gg2 = koko.map(function(el){
    return 200 - el
 })
 console.log(gg2)

 // reduce 

 let koko2 = [100, 200, 50, 80, 120]
 let ee1 = koko2.reduce(function(acc, el){
    return acc + el
 })
 console.log(ee1) // 550

 let ee2 = koko2.reduce(function(acc, el){
    return acc * el
 }, 1)
console.log(ee2) 

// find 
// find method ==  find method gives the first value that satisfy the condition in the array.
let koko3 = [40, 50, 20, 30, 80]
let ff1 = koko3.find(function(el){
    return el > 50
})
console.log(ff1) // 80

let ff2 = koko3.find(function(el){
    return el < 50
}) 
console.log(ff2) // 40

// filter 

let koko4 = [ 100, 20, 50, 80, , 120, 150, 190, 195]
let hh1 = koko4.filter(function(el){
    return el < 100
})
console.log(hh1)

let hh2 = koko4.filter(function(el){
    return el > 100
})
console.log(hh2)

//  forEach  // work with every element and gives value one after one
let koko5 = [100, 200, 50, 60, 80, 55, 1000, 5000]
let kk1 = koko5.forEach(function(el){
    console.log( el + "_its number")
})
console.log(kk1)
let kk2  = koko5.forEach(function(el){
    console.log(el + 10)
})
console.log(kk2)

// every = gives boolean value when condition satisfy with every el
let koko6 = [10, 50, 60, 80, 90, 35, 60]
let kk3 = koko6.every(function(el){
    return el < 100
})
console.log(kk3) // true
let kk4 = koko6.every(function(el){
    return el >50
})
console.log(kk4) // false

let koko7 = [ 40, 50, 60, 100, 5000, 1000]
let kk5 = koko7.some(function(el){
    return el > 100
})
console.log(kk5) // true

let kk6 =  koko7.some(function(el){
    return el > 10000
})
console.log(kk6) // false