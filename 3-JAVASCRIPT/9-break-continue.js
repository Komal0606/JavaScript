// break : till we condition not become true
// continue : it continues the loop even after the complition of condition
// we can use the break and continue in both the loops

// break -- for loop 

for(let i = 1 ; i <= 20 ; i++){
    if(i == 5){
        //console.log(i) it will give value 5 so we need t console outside the if block
        break
    }
    console.log(i) // it will give the ans as 1,2, 3,4 and when 5 loop will break

}

for(let k = 1 ; k <= 14 ; k++){
    if(k == 7){
        break
    }
    console.log(k) // 1,2,3,4,5,6
}

// continue
console.log('continue')
for(let v = 1 ; v <= 9 ; v++){
    if(v == 5){
        continue
    }
    console.log(v) // 1, 2, 3, 4, at 5 condition become true then it will skip the 5 and continues the loop
}

for(let u = 11 ; u >= 1 ; u--){
    if(u == 6){
        continue
    }
    console.log(u)
}

console.log(' now while loop == for break')

let kk = 0
while(kk <= 20){
    if(kk == 6){
        break
    }
    console.log(kk)
    kk++
    //console.log(kk) do not console after increment
}

let oo = 1
while(oo <= 10){
    if(oo == 5){
        break
    }
    console.log(oo)
    oo++
}

let hh = 15
while(hh >= 0 ){
    if(hh == 8){
        break
    }
    console.log(hh) // 15, 14, 13, 12, 11, 10, 9 and at 8 it will break the loop
    hh--
}

console.log('while loop == for continue')


let gg1 = 1
while(gg1 <= 15){
    if(gg1 == 7){
        gg1++
        continue
    }
    console.log(gg1)
    gg1++
}
console.log('----- ex 2 -----')
let dd = 1
while(dd <= 13){
    if(dd == 10){
        dd++
        continue
    }
    console.log(dd)
    dd++
}

let rr = 1 
while(rr <= 8){
    if(rr == 5){
        rr++
        continue
    }
    console.log(rr)
    rr++
}

let u = 50
while(u >=  0){
    if(u == 44){
        break
    }
    console.log(u)
    u--
}