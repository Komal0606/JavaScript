// Inheritance - 
 class Student {
     name = "komal"
     clg = "MIT kothrud"
     age = "23"

 }

 class accountant extends Student{
     salary = "250000"

 }

 class bankmanager extends accountant {
     branch = "pune"
 }

 let komal = new bankmanager()
 console.log(komal.salary)
 console.log(komal.age)
 console.log(komal.branch)
 console.log(komal.name)
 console.log(komal.branch)

 // Constructor

 class Grandfather {

    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = 80
    }
    display(){
        console.log(this.firstname, this.lastname)
    }
    
 }

 class Father extends Grandfather {

    constructor(firstname, lastname, age, fathername){
        super(firstname, lastname, age)
        this.fathername =   fathername
    }
    display(){
        console.log(this.fathername)
        super.display()
    }
 }

 class daughter extends Father {

    constructor(firstname, lastname, age, fathername, dauname){
        super(firstname, lastname, age, fathername, )
        this.dauname = dauname

    }
    display(){
    console.log(this.dauname)
    super.display()
    }
 }

 let komal1 = new daughter("Jagnnath", "Palke", "80", "Navnath", "dauname" )
 komal1.display()

// program 2 

class BPharma {
    constructor(name, clg){
    this.name = name
    this.clg = clg
} 

}

class Mpharm extends BPharma {

    constructor(name, clg , sub){
        super(name, clg)
        this.sub = sub
    }
    display(){
        console.log(this.display)
        super.display()
    }

}

class Phd extends Mpharm {
    constructor(name, clg , sub, specialization){
        super(name , clg, sub)
        this.specialization = specialization
    }
    display(){
        console.log(this.specialization)
        super.display()
    }
}

let prathmesh = new Phd ( "prathmesh", "MIT", "pharma", "biochemestry")
prathmesh.display()