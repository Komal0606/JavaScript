// logical program


let marks = [10, 20, 30, 40, 60, 55, 23, 11, 22, 33]
let count = 0

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] === 55) {
        count = count + 1

    }

}
console.log(count)

// program 1 

let name = [ 'k', 'o', 'm', 'a', 'l']
let result = {}
console.log(result)

for(let i = 0 ; i < name.length ;i++){

      if(result[name[i]]){ 
            result[name[i]] = result[name[i]] + 1
      }
      else {
        result[name[i]] = 1
      }
      
    }
    console.log(name)

    let word =['b','o','o','k']
 let result1 = {}
 let countOfb=0
 let countOfo=0
 let countOfk=0

 for (let i = 0; i <= word.length; i++) {
    let XX = word[i]
    switch (XX) {
        case 'b':
            countOfb++;
            break;

        case 'o':
            countOfo++;
            break;

        case 'k':
            countOfk++;
            break;
    }
}

result[word[0]]=countOfb
result[word[1]]=countOfo
result[word[2]]=countOfo
result[word[3]]=countOfk

// program 2

let numbers = {

    a:3,
    b:4,
    c:8


}

// let numbers2 = {

//     a:3,
//     b:4,
//     c:8,
//     a:7


// }



//console.log(numbers2)

// console.log(numbers['b'])
for(let key in numbers){
    numbers['a'] = numbers[key] *numbers[key]
}
console.log(numbers)

// numbers = {
//     a:3,
//     b:4,
//     c:8

// }

// program 3

let a = [22,33,44,11,22,17,88,99,11]
let eventCount  = 0 
let oddCount = 0


// for(let i = 0 ; i < a.length ; i++){
//         if(a[i] % 2 == 0){
//             eventCount ++
//         }
//         else {
//             oddCount ++
//         }
// }

// console.log(eventCount)
// console.log(oddCount)


// for(let i = 0 ; i < a.length ; i++){   
//     a[i] % 2 == 0 ? eventCount++:oddCount ++
// }

// console.log(eventCount)
// console.log(oddCount)


a = [22,33,44,11,22,17,88,99,11]

let evenCount = a.reduce(function(acc,el){
    let a = el % 2 === 0?1:0
    //console.log(a)
    return acc + a
},0)
console.log(evenCount)

let oddCount2 = a.reduce(function(acc,el){
    let a = el % 2 !== 0?1:0
    //console.log(a)
    return acc + a
},0)
console.log(oddCount2)

// program3
let r = ['red','red','green','red','blue','blue','red','red']
let result2 = {}

for(let i = 0 ; i < r.length ;i++){

  if(result2[r[i]]){ 
        result2[r[i]] = result2[r[i]] + 1
  }
  else {
    result2[r[i]] = 1
  }
}
console.log(result2)

for(let key in result2){

    result2[key] = Math.floor(result2[key] /2)

}

console.log(result2)
    