// scope

let info = {
    firstName : "komal",
    lastName : "palke",
    printName : function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(info)
console.log(info.printName())
console.log(info.printName)


let printName2 = info.printName
printName2()

let komal = {
    fn : "krish",
    ln : "thakur",
    kko : function(){
        console.log(this.fn + this.ln)
    }
}

console.log(komal)
let display2 = komal.kko
display2()
// console.log(undefined + undefined) = NaN

// Program 2 --

let koko = {
    fn : "koko",
    ln : "cat"
}

let yoyo = {
    fn : " yoyo",
    ln : "dog"
}

let scope = function(){
    console.log(this.fn +" "+ this.ln)
}

let cc = scope.bind(koko)
console.log(cc) // gives function
cc() // gives 

let dd = scope.bind(yoyo)
dd()

scope.bind(yoyo)()

console.log('*******call**************')

// using call method
let sami = {
    fn : "samiran",
    ln : "patil"
}

let aayu = {
    fn : " aayush",
    ln : "agrawal"
}

let scope2 = function(){
    console.log(this.fn +" "+ this.ln)
}

scope2.call(sami)
scope2.call(aayu)

console.log('***********apply************')

let komal1 = {
    fn : "komal",
    ln : "palke"
}

let nivedita = {
    fn : " nivedita",
    ln : "shelake"
}

let scope3 = function(){
    console.log(this.fn +" "+ this.ln)
}

scope3.apply(komal1)
scope3.apply(nivedita)

console.log('*************practice****************')

 function names(){
     console.log('hello ' + this.name )
}

let shravni = {
    name : "shravani",
    clg : "mit"
}

let vivek = {
    name : "vivek",
    clg : "jspm"
}

names.bind(shravni)()
names.bind(vivek)()

names.call(shravni)
names.call(vivek)

names.apply(shravni)
names.apply(vivek)



