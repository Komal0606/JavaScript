// // sync - async 

// function number1() {
//     console.log(10 + 20)
// }

// function number2() {
//     console.log(50 + 60)
// }

// number2()
// number1()

// function check() {
//     setTimeout(function () {
//         console.log("making cup of tea")
//     }, 1000)

//     setTimeout(function () {
//         console.log("boil mixture")
//     }, 3000)
//     setTimeout(function () {
//         console.log("take water, sugar, tea powder")
//     }, 4000)

//     setTimeout(function () {
//         console.log("add milk")
//     }, 4000)

//     setTimeout(function () {
//         console.log("strain tea into the cup")
//     }, 4000)

// }

// check()

// // call back hell

// function check2() {
//     setTimeout(function () {
//         console.log("making cup of tea")
//         setTimeout(function () {
//             console.log("make mixture of water, sugar, tea powder")
//             setTimeout(function () {
//                 console.log("boil the mixture")
//                 setTimeout(function () {
//                     console.log("add milk")
//                     setTimeout(function () {
//                         console.log("strain the tea into the cup")
//                     }, 1000)
//                 }, 2000)
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }

// check2()

// // promise == reject , resole and pending
// // promises is the new way of handling async code for synchronous  execution

// let pro = new Promise(function (resolve, reject) {
//     let x = 10
//     let y = 100
//     if (x == y) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }

// })

// //consuming promise 
// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })

let pro22 = new Promise(function(reject, resolve){
    let  a = 25
    let  b = 50
    if(a == b){
        resolve("answer is correct")
    }
    else{
        reject("answer is incorrect")
    }
})
// consuming promise

pro22.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

let pro33 = new Promise(function(reject, resolve){
    let word = "komal"
    if (word.length = 5){
        resolve(["komal", "sanu","kajal"])
    }
    else{
        reject([11, 22,33])
    }
})
//consuming promise

pro33.then(function(str){
    console.log(str)

}).catch(function(str){
    console.log(str)
})