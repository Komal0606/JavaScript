// regular expression 

let sentence = "My favourite fruit is mango, ManGo is yellow in colour, MANGO contains so many nutritions"

let reg1 = /mango/gi
let a = reg1.exec(sentence)
console.log(a)
let b = reg1.exec(sentence)
let c = reg1.exec(sentence)
let d = reg1.exec(sentence)
console.log(b)
console.log(c)
console.log(d)

console.log('-------loop ------')

let result1 = reg1.exec(sentence)
while( result1 != null){
    console.log(result1)
    result1 = reg1.exec(sentence)

}

let name = "komAl Komal pooja KOMAL"
let reg2 = /komal/gi
let aa = reg2.exec(name)
console.log(aa) // first word
let bb = reg2.exec(name)
console.log(bb) // sencond
let cc = reg2.exec(name)
console.log(cc) // third
let dd = reg2.exec(name)
console.log(dd)  // null

console.log('-----------loop--------------------')
let result = reg2.exec(name)
while( result != null){
    console.log(result)
    result = reg2.exec(name)
}

let name2 = "Vishal , VISHAL, nikita, VIshal, pune, mumbai"
let reg3 = /vishal/gi
let aa1 = reg3.exec(name2)
console.log(aa1)
let bb2 = reg3.exec(name2)
console.log(bb2)
 let result3 = reg3.exec(name2)
 while( result3 != null){
    console.log(result3)
    result3 = reg3.exec(name2)
 }

 // search 
 let cc1 = name2.search(reg3)
 console.log(cc1)

 // match 
 let cc2 = name2.match(reg3)
 console.log(cc2)

 // replace
 let cc3 = name2.replace(reg3, 'RISHITA')
 console.log(cc3)

