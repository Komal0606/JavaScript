// rest 
let number = [10, 20, 25, 30, 40, 60, 80, 65]
function sumAll(...num){
    return num.reduce((acc, el)=>{
        return acc + el
    },0)
}
let aa = sumAll(10, 40, 100, 60)
console.log(aa)


function sum(...num2){
    return num2.reduce((acc, el)=>{
        return acc + el
    }, 0)
}
let bb = sum(100, 200, 500)
console.log(bb)

function sum3(...num3){
    return num3.reduce((acc, el)=>{
        return acc + el
    },0)
}
let cc = sum3(100, 800, 1100, 2000, 1000)
console.log(cc)


function above(a,...arr){
    return arr.filter((el)=>{
        return el > a
    })
}
let dd = above(10, 20, 30, 40, 800, 90)
console.log(dd)

function above1(b,...arr2){
    return arr2.filter((el)=>{
        return el > b
    })
}

let ee = above1(10, 500, 200, 300, 5, 2, 4, 400, 800, 1000)
console.log(ee)

// spread 

let number1 = [ 10, 20, 30, 40, 50, 60, 70]

function firstFour(a,b,c,d){
    console.log(a+b+c+d)
}

firstFour(...number1)


