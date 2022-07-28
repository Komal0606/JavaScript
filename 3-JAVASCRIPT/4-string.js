// string 
let name = "komal"
console.log(name)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.length)
console.log(name.indexOf("m"))// 2
console.log(name.includes("a")) // true

let name1 = " Rudra"
console.log(name1.trimStart())
let name2 = "RAMA "
console.log(name2.trimEnd())
let name3 = " krushna "
console.log(name3.trim())

let name4 = "pune"
let rev = " "
for(let i = 0 ; i < name4.length ; i++){
    rev = name4[i] + rev

}
console.log(rev)

let city = "mumbai"
let revCity = ""
for(let i = city.length ; i >= 0 ; i-- ){
    revCity = revCity + city[i]
}
console.log(revCity)

let state = "Maharashtra"
console.log(state.startsWith("M")) // TRUE
console.log(state.startsWith("m")) // FALSE
console.log(state.endsWith("a")) // TRUE
console.log(state.endsWith('A')) // FALSE

