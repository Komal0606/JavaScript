//methods of array 
// array stores the values by index 

// index         0        1          2       3
let class1 = ["komal", "snehal","rishita","pooja"]

// length = no of elements in array 

console.log(0)
console.log(class1[0])

for (let i = 0; i < class1.length ; i++){
//    console.log(i)
console.log(class1[2])
}

for (let i = 0; i >=0 ; i--){
    //console.log(i)
    console.log(class1[1])
}


// everything in js is object 
// person 
//property  - weight , heigth, age 
// method - walk, talk 

// vehicle -
// property - type colour, reg
// method - start , stop 

 let colour = ["pink", "red","green","black"]

 let aaa = colour.length
 console.log(aaa)

 //methods  ----> action ------> return

let colour1 = ["white", "red","green","black"]

// methods 
// 1 ) PUSH() = add the element at last
// return new length of array 

let bbb = colour1.push("yellow")
console.log(bbb)
console.log(colour1)

// 2) unshift() = add the elemnts at start 
// return the new length

let ccc = colour1.unshift("pink")

console.log(ccc)
console.log(colour1)


// 3) pop() = 
// action : removes the value from last 
// return the same elements

let ddd = colour1.pop("yellow")
console.log(ddd)
console.log(colour1)

// 4) shift() = 
// action : removes the elements from start 
// return the same element

let eee = colour1.shift("pink")
console.log(eee)
console.log(colour1)

// 5) indexOf()
// action - search for the element in array 
// returns index of same , else return -1

let flowers = ["rose", "lily","lotus","jsmin"]

let kkk = flowers.indexOf("lily")

console.log(kkk) 

let ggg = flowers.indexOf("jsmin")
console.log(ggg)

let ooo = flowers.indexOf("marigold")
console.log(ooo)

// push - add the element at last 
// unshift - add  the element at start 
// pop - removes the element from last 
// shift - removes the element from begining 


// 6) Includes() : gives bollean value if acc to presence of element in array 

let singers = ["aasha","kishore","rafi","lata"]
let uu7 = singers.includes("kishore")
console.log(uu7)

let uur = singers.includes("kakkar")
console.log(uur)

// 7) reverse() --- it will reverse the array 

let singers4 = ["aasha","kishore","rafi","lata"]
 let koko = singers4.reverse()
 console.log(singers4)
 console.log(koko)


 // 8) sort() -- sorts the elements by alphabets 
 singers4.sort()
 console.log(singers4)

 // 9) Join() -- join the element 

 let person = [ "komal","palke", "9607262607"]

let uuo = person.join("-")
console.log(uuo)

let oop = person.join("#")
console.log(oop)


// 10) concat() --- joins two array and gives new single array 

let number1 = [10, 20, 30, 40]
let number2 = [ 100,200,300,400]
let mm2 = number1.concat(number2)
console.log(mm2)

let nnk = number2.concat(number1)
console.log(nnk)