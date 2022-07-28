// Ascii values 
// string --

let aa = "komal"
console.log(aa)

// string is immutable -- means can't change single word with other word
//ex .
// let name = "pranjal"
// name[1] = k
// console.log(name)// can't change r to k

// Ascii values = "American Standard Code for Information Interchange."
// ASCII is a character encoding that uses numeric codes to represent ...
// a to z = 97 to 122 and A to Z = 65 to 90


//charAt-- find the character or word of that index 

let flower = "Rose"
let bb = flower.charAt(2)
console.log(bb)

//charCodeAt --- finds the ascii value for word 

let cc = flower.charCodeAt(1)
console.log(cc)  // 111

// program - 1

let sentence  = " INDIA is my Country"
count = 0

// for(let i = 0 ; i <= sentence.length ; i++){

//     if(sentence.charCodeAt(i)>= 65 && sentence.charCodeAt(i) <= 90){
//         count = count + 1
//     }
// }

// console.log(count) // 6

// program 2 

for(let i = 0 ; i <= sentence.length ; i++){
    if(sentence[i] >= "A" && sentence[i] <= "Z")
    count = count + 1
}

console.log(count)  // 110

// program 3 

let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


//--------------------------------->

// Number + Number = Number 
// Number + String = String
// String + Number = String
// String + String = String

// calculate from left side 

let x = 85
let y = 25
let z = "aayushi"

console.log(x+y) // 110
console.log(x+z) // 85aayushi
console.log(z+y)  // aayushi25
console.log(x+y+z) // 110aayushi
console.log(z+y+x) // aayushi2585
console.log(x+z+y) // 85aayushi25


// concatation --

let name = "komal palke"
let cource = "B Pharmacy"

console.log("my name is "+name+" grauated in "+cource )// old method
console.log(`my name is ${name} and graduated in ${cource}`)

console.log(`${10+30}`) // gives string 
console.log(10+30)  // gives number ( in yellow color)

// replace -- 
 let koko = "My favorite city is pune and i lived in pune"
 let gg = koko.replace("pune", "Mumbai")
 console.log(gg)

 let sent2 = "National fruit of india is mango and also mango is my favorite fruit."

 function replaceAll(sentence, word, replW){
     let arrayOne = sentence.split('')
     console.log(arrayOne)
     let replWRD =  arrayOne.map(function(el){
          if(el == word ){
              return el = replW
          }
         else{
             return el
         }
          
      })
      console.log(replWRD.join(' '))
 }

 replaceAll(sent2,"mango","apple")

 // search --- returns index 

 let dd3 = "Something is better than nothing"
 let d1 = dd3.search("is")
 let d2 = dd3.search(4)
 console.log(d1)
 console.log(d2)

 // match --

 let dd4 = "Something is better than nothing"
 let d5 = dd4.match("than")
 console.log(d5)

 // substring -- gives the values of index 

let dd6 = "Something is better than nothing"
let d6 = dd6.substring(1, 8)
console.log(d6)

 