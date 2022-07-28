// for  -- for definite no 

for (let i = 0 ; i < 4 ; i++){
    console.log(i)

}

for (let i = 5 ; i>=0 ; i--){
    console.log(i)
}

// for(initilization ; conditioncheck ; increment / decrement ){
     
    // statements
// }

/// %
console.log(20%3) /// 2

console.log(20%2) // 0 

// even - divisible by 2 
// odd - not divisible by 2

for ( let i = 1 ; i <=50 ; i ++){
    
     if(i % 2 == 0){
         console.log('even no', i)
     }

    else {
        console.log('odd no ', i)
    }
}

console.log("--------while--------------------------")
// while -- till the condition not become true

// program 1 --
let  aa = 7
while(aa <=7){
    console.log(aa) // 1,2,3,4,5,6,7, -- at 8 it will  break becoz condition false ( 8 <=7)
    aa++
}

// program --- even odd
 
let bb = 1
while(bb <= 20){
    
    if(bb % 2 == 0){
        console.log("even no",bb)
    }
    else {
        console.log("odd no", bb)
    }
     bb = bb +1
}

console.log("-----------break --------------------------------")
// Break = break the loop till condition bcomes true

for( let i = 0 ; i < 7 ; i++){
    if(i == 4){
        break
    }

    console.log(i)
}
 
 // ex -- 
 for (let i = 20 ; i <= 26 ; i++){
     if(i == 24){
         break
     }
     console.log(i) // ans 20, 21, 22, 23 and at 24 loop will break 
 }


 // continue -- loop run ---- skip the true condition and again continue the loop
 

 for( let i = 0 ; i < 7 ; i++){
    if(i == 4){
        continue
    }

    console.log(i)
}

// ex - 

for(i = 30 ; i < 40 ; i++){
    if(i == 35){
        continue
    
    }
    console.log(i)
}

 // using while 

 let ab = 1

 while(ab <= 7){
     if(ab == 5){
         break
     }
     console.log(ab)

     ab++
 }
 
 console.log(" -------------pppppppppppppp-----------------")

let bbd = 1 
while(bbd <= 12){

    if(bbd == 6){
        bbd++
        continue
    }
    console.log(bbd)
    bbd++
}
