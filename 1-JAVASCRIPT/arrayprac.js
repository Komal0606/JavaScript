// map, reduce, filter

let num1 = [ 10, 20, 30 ,40]
let aa = num1.map(function(el){
    return el * 2
})
console.log(aa)  //  20, 40, 60, 80 ]

let bb = num1.map(function(el){
    return el + 100
})
console.log(bb)  // [ 110, 120, 130, 140 ]

// reduce 

let num2 = [ 40, 50, 60, 80]
let cc = num2.reduce(function(acc , el){
    return acc + el
}, 1)

console.log(cc)

let num3 = [ 2, 3, 4]
let dd = num3.reduce(function(acc , el){
    return acc * el
}, 1)

console.log(dd)

// filter 
 let num5 = [ 100, 200, 10, 20, 30, 40, 50, 60, 70 , 80, 90]
 let ee = num5.filter(function (el){
     return el > 40 
 })

 console.log(ee)

 let ff = num5.filter(function (el){
    return el < 70 
})
console.log(ff)

    

