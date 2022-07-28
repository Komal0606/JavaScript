// // loops
// // 1 - for loop = we use for-loop  = for definite no 

// for(let i = 0 ; i < 5 ; i++){
//     console.log(i)
// }

// for (let i = 5 ; i > 0 ; i--){
//     console.log(i)
// }

// // to print odd and even no '= use condition using if else 
// // even no ==

// for (i = 1 ; i<=30 ; i++){
//     if(i%2 == 0){
//         console.log('even no', i)
//     }
//     else{
//         console.log('odd no ', i)
//     }
// }

// // table of 2 

// for(let i = 1 ; i <=20 ; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// // reverse table of 2
// for (let i = 20 ; i >= 1 ; i--){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// console.log('************** while loop ******************')

// // while = in while loop u have to put while word then condition and in { } console the ans
// // below that mention increment/ decrement else it will check for infinite condition

// let aa = 1
// while(aa <= 10){
//     console.log(aa)
//     aa++
// }
// let bb = 12
// while(bb >= 1){
//     console.log(bb)
//     bb--
// }

// table 2
console.log('-------table of 2 -------------')
let cc = 1 
while(cc <= 30){
    if(cc%2 == 0){
        console.log(cc)
    }
    cc++
}

// table of 2 prac by using for and while loop 
console.log('for loop == table of 2')
// using for loop 
for(let i = 1 ; i <=20 ; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

// using while loop 
console.log('while loop = table of 2')
let kk = 1
while(kk <= 20){
    if(kk%2 == 0){
        console.log(kk)
    }
    kk++
}

// even and odd no by using for and while loop 
console.log('for loop == even and odd no ')

for(let i = 1 ; i <= 20 ; i++){
    if(i%2 == 0){
        console.log('even no', i)
    }
    else{
        console.log('odd no', i)
    }

}

console.log('using while loop get odd and even no ')
let gg = 1
while(gg <= 25){
    if(gg%2 == 0){
        console.log('whileloop even no', gg)
    }
    else{
        console.log('whileloop odd no', gg)
    }
    gg++
}

