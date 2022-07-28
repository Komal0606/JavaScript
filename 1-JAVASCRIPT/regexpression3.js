
let regOne = /koMal/i
let name = "my name is komal palke"
console.log(regOne.test(name))

let regTwo = /[a-c][2-8][-x-z]/
let nn = "b5y"
console.log(regTwo.test(nn))

let regTo = /[a-c][2-4][-x-z]/
let uu = "b9y"
console.log(regTwo.test(uu))

let regFour = /s*t/
let gg = "salt"

console.log(regFour.test(gg)) // true

let regFo = /sa*t/
let g = "salt"

console.log(regFo.test(g)) // false

let regfive = /Humga*ma/
let qq = "Humgaama"
console.log(regfive.test(qq))  // true


let regfiv = /Humg*ma/
let q = "Humgama"
console.log(regfiv.test(q)) // false

let regSix = /Tre*hh/i
let oo = "treehh"
console.log(regSix.test(oo))