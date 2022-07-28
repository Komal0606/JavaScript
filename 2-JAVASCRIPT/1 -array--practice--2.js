// array -- practice 
// map, filter, foreach, filter,

// MAP 
// OLD METHOD BY USING LOOP

let debit = [ 200, 50, 150, 300]
let remamt = []
for(let i = 0 ; i< debit.length ; i++){
    let rem = 1000 - debit[i]
    remamt.push(rem)
}
console.log(remamt)

// now using map method

let map1 = debit.map(function(el,index, array){
    return 800 - el
})
console.log(map1)

// filter 
// old method
let num = [ 12, 15, 20, 55, 66, 88, 78, 58]
let above50 = []

for(let i = 0 ; i < num.length ; i++){
    if(num[i] > 50){
        above50.push(num[i])
    }
}

console.log(above50)

let below50 = []

for(let i = 0 ; i < num.length ; i++){
    if(num[i] < 50){
        below50.push(num[i])
    }
}
console.log(below50)

// now by using filter method

let num55 = [ 12, 15, 60, 80, 75, 20]
let kk = num55.filter(function(el,index, array){
    return el > 50
})
console.log(kk)

let kk2 = num55.filter(function(el,index,array){
    return el < 50
})
console.log(kk2)

// REDUCE METHOD -- 

let num44 = [ 50, 40, 30, 80, 100]
// old method
let sum = 0
for(let i = 0 ; i < num44.length ; i++){
    sum = sum + num44[i]
}
console.log(sum)

let sum2 = num44.reduce(function(acc, el, index, array){
    return acc + el
})
console.log(sum2)


// forEach method --  with this method we can work with each element in the array.
// multiplication , addition, addition of string

 let gg4 = [ 10, 20, 30, 40, 50]

 gg4.forEach(function(el){
     console.log(el + 10)
 })

 let jjo = [ 10, 80, "THOUSAND", 200, 300]
 jjo.forEach(function(el){
     console.log(el + " is a number")
 })

 let kko = [ 10, 50, 80, 60]
 kko.forEach(function(el){
     console.log(el * 10)
 })

 // every ==  method gives bollean value for the condition 
 // if condition satisfy foe every elment then gives true or else false

 let number2 = [ 10, 50, 40, 60, 12, 40, 100, 80]
 let uu = number2.every(function(el){
     return el >= 10
 })
 console.log(uu) // true

 let uu2 = number2.every(function(el){
     return el >  500
 })
console.log(uu2)  // false

// Some method ==  method gives bollean value for the condition 
 // if condition satisfy for some of the elment then gives true or else false

 
let number3 = [ 10, 50, 40, 60, 12, 40, 100, 80]
let hhu = number3.some(function(el){
    return el > 50
})
console.log(hhu) // true

// find method ==  find method gives the first value that satisfy the condition in the array.

let hhuu = number3.find(function(el){
    return el > 90
})
console.log(hhuu) // 100

let hhuh = number3.find(function(el){
    return el > 12
})
console.log(hhuh)

// findindex method ==  gives the index of first value that satisfy the condition in the array.

let number4 = [ 50, 60, 40, 80, 90, 100]
let jji = number4.findIndex(function(el){
    return el > 90
})
console.log(jji) // 5 







