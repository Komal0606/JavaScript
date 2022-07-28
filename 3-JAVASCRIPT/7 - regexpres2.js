let info = "komal, KoMAl , POOJA, VISHAL KOMAL"
let reg = /komal/gi
let aa = reg.exec(info)
console.log(aa)

let aa1 = reg.test(info)
console.log(aa1) // true  gives boolean value 
let bb1 = reg.test(info)
console.log(bb1)

// ^ = used as start with
let info1 = "Maharashtra"
let reg1 = /^Maharashtra/i
if(reg1.test(info1)){
    console.log('pass')  // pass
}
else{
    console.log('fail')
}

let info2 = "PUne"
let reg2 = /^Pune/i
console.log(reg2.exec(info2))
if(reg2.test(info2)){
    console.log('pass') // pass
}
else{
    console.log('fail')
}

let info3 = "Nashik"
let reg3 = /Nashik$/i
if(reg3.test(info3)){
    console.log('pass') // pass
}
else{
    console.log('fail')
}

let reg4 = /ashi$/i
if(reg4.test(info3)){
    console.log('pass') // fail
}
else{
    console.log('fail')
}

// use . (dot) = check whether the characters are present or not 

let info4 =  "butterfly"
let reg5 = /.tterfly/i
if(reg5.test(info4)){
    console.log('pass') // pass
}
else{
    console.log('fail')
}

let reg6 = /.fy/i
if(reg6.test(info4)){
    console.log('pass') // fail
}
else{
    console.log('fail')
}

let info5 = "yellow"
let reg7 = /y?ell?ow/i
if(reg7.test(info5)){
    console.log('hii') //
}
else{
    console.log('bye')
}

let reg8 = /e?l?ow/i
if(reg8.test(info5)){
    console.log('hii') //
}
else{
    console.log('bye')
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
let regNM = /gr[g]e[7]n/

if(regNM.test(uu)){
    console.log('pass')
}
else{
    console.log('fail') // fail
}
