// rest parameter --------

let array = [77,85,11,66]

// [11,22,33,33,44,55,66,77,88,9,900,0,88,99,00,223,44,55,66,77]
// rest operator 

function sumAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}
let aa = sumAll(44,55,66,88,99,00,223,44,55,66,77)
console.log(aa)

console.log("---------------------------")

function above(b,...arr){
    console.log(arr)
    console.log(b)
    
    return arr.filter(function(el){
        return el > b
    })
}

let bbbb = above(20, 56, 89, 55, 75, 69, 85, 42, 85, 96, 75, 56, 88, 97)
console.log(bbbb)


// spread operator 

let transactions = [22,44,55,66,77,88,99,99]

function lastFive(a,b,c,d,e){

    console.log(a+b+c+d+e)

}
lastFive(transactions[0],transactions[1],transactions[2],transactions[3],transactions[4])
lastFive(...transactions)


// 1,2,3,4 ====>  ...arr (rest)
// [1,3,4,5] ===>  ...arr(spread)














