/// logical program

let x = [20,30,40,50]
let y = x
y[1] = 30

console.log(x)
console.log(y)

// ---------------------->

let credit = [100, 200, 300, 400]

function kkk(value){
    value[2] = 555
    console.log(kkk)
}
kkk(credit)
console.log(credit)


// function add1(bbb){
//     bbb[1] = 5000
//     console.log(bbb)
// }
// console.log(credit) //  [100, 200, 300, 400]
// add1(credit)
// console.log(credit)

let marks = [ 50, 80, 70, 90]

function add2(arr){
    arr[3] = 80
    console.log(arr)
}
console.log(marks)
add2(marks)
console.log(marks)

///--------------------------->

let student = {
    name : "komalpalke",
    age : 23,
    clg : "mit kothrud"
}
 
function studentchange(add8){
    console.log(add8)
    add8["name"] = "vishal"
    return add8
    
}
console.log(student)
studentchange(student)
console.log(student)

// --------------------------------->

let bbbb = [ 50, 60, 70, 40]

function printArray(arr, fn){
    let newArray = []
    for(let i = 0 ; i < arr.length ; i++){
        let newele = fn(arr[i])
        newArray.push(newele)
    }

    return newArray
}

let ddd = function (el){
    return el / 2
}

 let ff = function (el){
     return 2025 - el
 }


 let kk = function (el){
    return " komal " + el
}


let cccc = printArray(bbbb, ddd)
console.log(cccc)

let rr = printArray(bbbb, ff)
console.log(rr)

let sss = printArray(bbbb, kk)
console.log(sss)


 


























 let deposit = [ 6000, 5000, 4000, 2000]

 function newdeposit(array1,fn1){
     newArray1 = []
     for(let i = 0 ; i < array1.length ; i ++){
         t2 = fn1(array1[i])
         newArray1.push(t2)


     }
     return newArray1

 }

let jkjk = function (pkpk){
    return pkpk + 150
}

newdeposit(deposit , jkjk)
console.log(newArray1)

let bangar = [ 10, 20, 30, 40]

function komal( arr , fn){

    newbangar = []
    for(let i = 0; i< bangar.length ; i++){

        let gg1 = fn(bangar[i])
        newbangar.push(gg1)

    }

    return newbangar
}


let snehal = function ( el){ // [ 30, 60, 90, 120]
    return el * 3
}

let hhj = function(el){
    return "rishita" + el
}

let gg2 = komal(bangar, snehal)
console.log(gg2)

let oooo = komal(bangar, hhj)
console.log(oooo)




///   node logicalpro2.js