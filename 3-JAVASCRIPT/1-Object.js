// let clg = {
//     name : 'MIT',
//     Location : 'Kothrud',
//     Branch : "computer Science"
// }

// console.log(clg)
// //retrive
// let aa = clg.name
// console.log(aa)
// let bb = clg['name']
// console.log(bb)
// console.log(clg.Branch)
// console.log(clg['Location'])

// // ADD 
// console.log(clg.branch2 = "bcom")
// let a1 = clg["subject1"] = "Data Science"
// console.log(a1)
// console.log(clg['branch3'] = "arts")

// // update 
// console.log(clg.subject1 = 'maths')
// console.log(clg['branch'] = "Pharmacy")
// console.log(clg)

// // delete
// delete clg.subject1
// console.log(clg)

// let info = {
//     name : {
//         fn : "komal", 
//         ln : "palke"
//     }, 

//     clg : {
//         clgname : "JSPM",
//         branch : "Pharmacy"
//     }
// }

// console.log(info.name)
// console.log(info.clg.branch)

console.log('**********************************obj types ****************')  
// Object Types // -- object literal -- function constructor --  -- ES6 CLASS -- object.creat , set method
// OBJECT LITERAL
let clg1 = {
    name : 'Bharti vidyapith',
    Location : 'Kothrud',
    Branch : "pharmacy",
    display : function(){
        console.log(this.name + this.Location)
    }
}

 clg1.display()

 // function constructor 
let Person = function(ln, fn , age){
    this.firstName = fn
    this.lastName = ln
    this.age = age
}

let Komal = new Person("Komal", "Palke", "24")
console.log(Komal)
let Pooja = new Person("Pooja", "Sutar", 25)
console.log(Pooja)

let Info = function(fn, ln, clg){
    this.FN = fn 
    this.LN = ln
    this.clg = clg
}
let Janvi = new Info("Janvi", "Shinde", 40)
console.log(Janvi)

let Info2 = function(fn, ln , age){
    this.fn = fn 
    this.ln = ln 
    this.age = age 
}

let sulu = new Info2("sulu", "KAKDE", 55)
console.log(sulu)

let Info3 = function(fn, ln, age){
    this.fn = fn 
    this.ln = ln 
    this.age = age 
}

let GAYATRI = new Info3 ("gayatri", "palke", "15")
console.log(GAYATRI)

// ES6 class 
class PersonInfo {
    constructor(fn, ln , age){
        this.fn = fn 
        this.ln = ln 
        this.age = age 
    }
}

let aayushi = new PersonInfo("aayushi", "KHAN", 45)
console.log(aayushi)
aayushi.mn = "zaid"
console.log(aayushi)

class PersonInfo2 {
    constructor(name, clg , branch){
        this.name = name
        this.clg = clg 
        this.branch = branch 
    }
}
let SAMRUDHI = new PersonInfo2("samrudhi", "Symbosis", "computer")
console.log(SAMRUDHI)

//ES6 class
class INFO11 {
    name = undefined
    graduaion = undefined
    company = undefined
}

let kartiki = new INFO11()
console.log(kartiki)



 












