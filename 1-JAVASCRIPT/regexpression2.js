// regular expression 

let sent = "Fear Leads to anger; anger lEads to hatred; hatred LEADS to conflict"
console.log(sent)
let regOne = /leads/gi

let aa = regOne.exec(sent)
console.log(aa)  // first arrival

let bb = regOne.exec(sent)
console.log(bb)  // second arrival

let cc = regOne.exec(sent)
console.log(cc)  // third arrival

let dd = regOne.exec(sent)
console.log(dd)  // null

let regT = /angger/gi
if(regT.test(sent)){
    console.log('pass')
}
else{
    console.log('fails')
}

console.log("----------------******************----------------")

// ---------------------------------------------------------------------

// Metacharacters

// ^ - denote as start with

let aab = "India"
let regTT = /^India/gi

if(regTT.test(aab)){
    console.log('pass')
}
else{
    console.log('fail')
}

// $ = denotes ends with 
let aac = "I love India"
let regf = /India$/ // /dia$/ - pass
// let regh = /In$/ - fail

if(regf.test(aac)){
    console.log('pass')
}
else{
    console.log('fails')
}

let regh = /In$/ 
 
if(regh.test(aac)){
    console.log('pass')
}
else{
    console.log('fails')
}

// . (dot) = shows only need last characters

let movie = "kedarnath"
let regK = /.th/  // pass
// let regKK = /.na/ // PASS
//let regKK = /.aHH/ - fail

if(regK.test(movie)){
    console.log('pass')
}
else{
    console.log('fail')
}

let regKK = /.aHH/
if(regKK.test(movie)){
    console.log('pass')
}
else{
    console.log('fail')
}

// * = need starting charcater only

let movie2 = "Humgama"
let regPP = /Hu*/  // = PASS
//let regT = /MA*/
if(regPP.test(movie2)){
    console.log('pass')
}
else{
    console.log('fail')
}

let regPO = /MA*/i // = without i flag test will fail
if(regPO.test(movie2)){
    console.log('pass')
}
else{
    console.log('fail')
}

// ? = used to skip the character

let color = "white"
let regQQ = /wh?it?e/ // = it will check for "we" and "hit will skip"

if(regQQ.test(color)){
    console.log('pass')
}
else{
    console.log('fail')
}

let color2 = "Yellow"
let regHT = /ye?ll?ow/i // = fails without  i flag
if(regHT.test(color2)){
    console.log('pass')
}
else{
    console.log('fail')
}

// groups [] - check for charactres in square bracket

let hit = "bat"
let regWW = /b[a]t/  // pass
if(regWW.test(hit)){
    console.log('pass')
}
else{
    console.log('fail')
}

let kkp = "house"
let regYYU = /h[o][u]se/
// /h[ou]se/ == fail becoz need to make diff group for dii character

if(regYYU.test(kkp)){
    console.log('pass')
}
else{
    console.log('fail')
}

let uu = "gree7n"
let regNM = /gr[e]e[7]n/

if(regNM.test(uu)){
    console.log('pass')
}
else{
    console.log('fail')
}
