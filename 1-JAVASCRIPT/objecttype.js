// object 
//object literal

let student = {
    name : "komal palke", 
    age : 23 , 
    aadhar : 4587666, 
    display:function(){
        console.log(this.name)
    }

}

student.display()

// Class -- 

class Student1{
    
    constructor(nm, ag , aadr){
        this.name = nm
        this.age = ag
        this.addharNo = aadr
    }

    display(){
        console.log(this.name)
    }
}

let vishal = new Student1("Vishal Palke", 20, 85859)
console.log(vishal)
vishal.display()

class Person{

    constructor(nm, clg, favsub){
        this.fullName = nm 
        this.college = clg
        this.subject = favsub
    }

    display(){
        console.log(this.subject)
    }
}

let pranjal = new Person("Pranjal Landge", "MIT clg", "English")
console.log(pranjal)
pranjal.display()

// function constructor

let Person22 = function(fn, ag, hby){

    this.fullName = fn
    this.age = ag
    this.hobby = hby
    this.display = function(){
        console.log(this.fullName)
    }
 
}

let koko = new Person22("geeta sutar", 45, "singing")
console.log(koko)
let kok2 = new Person22("monika landge", 22, "pantaing")
console.log(kok2)