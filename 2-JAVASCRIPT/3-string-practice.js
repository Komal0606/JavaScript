// STRING

let name = "kartiki"
console.log(name)

for(let i = 0 ; i< name.length ; i++){
    console.log(name[i])
}

// reverse the string

let rev = " "
for (let i = 0 ; i < name.length ; i++){
    rev = name[i] + rev
}
console.log(rev)

let name2 = "pranjal"
let rev2 = ""

for(let i = 0 ; i < name2.length ; i ++){
    rev2 = name2[i] + rev2
}
console.log(rev2)

// string methods

let food = "Panipuri"
let kk = food.toUpperCase()
console.log(kk)
let oo = food.toLowerCase()
console.log(oo)
let ll = food.includes("p")
console.log(ll) // true
let gg = food.includes("z")
console.log(gg)
let hh = food.indexOf("i")
console.log(hh)

// trim method

let fruit = " mango"
console.log(fruit)
let dd = fruit.trimStart()
console.log(dd)

let fruit2 = "Apple "
console.log(fruit2)
let ss = fruit2.trimEnd()
console.log(ss)

let fruit3 = " pineapple "
console.log(fruit3)
let jj = fruit3.trim()
console.log(jj)
let kko = name2.split()
console.log(kko)


