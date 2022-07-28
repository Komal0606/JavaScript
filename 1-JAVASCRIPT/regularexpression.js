//

let ddd = "MANGO is my favorite fruit, mango is oval shape and ripe MangO is known to be 14% sugar by wt."

let  reg = /mango/gi
let a = reg.exec(ddd)
let b = reg.exec(ddd)
let c = reg.exec(ddd)
let d = reg.exec(ddd)
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let result = reg.exec(ddd)
while(result !== null){
    console.log(result)
    result = reg.exec(ddd)
}

let kk = " komal vishal suvarna ashu komal KOMAL"
let reg2 = /komal/gi

let oo = kk.search(reg2)
console.log(oo)

let yy = kk.match(reg2)
console.log(yy)

let pp = kk.replace(reg2, "goshiya")
console.log(pp)