// Multilevel inheritance
// PARENT class is also called as base class
// child class is also called as derived class
class Student {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
        console.log("hiiii")
    }
}

class Teacher extends Student {
    constructor(fn, ln, salary){
        super(fn, ln) // to call the parent constructor
        this.salary = salary
    }
    display(){
        console.log(this.salary)
        super.display()
        
    }

}

class Principle extends Teacher {
    constructor(fn, ln , salary, clg){
        super(fn , ln , salary)
        this.clg = clg 
    }
    display(){
        console.log(this.clg)
        super.display()
    }
}

let Raghav = new Principle ("Raghav", "Juyal", "100000", "Dance+")
let lahu = new Principle("lahu", "shinde", "50000", 'mechanical engg')
console.log(lahu)
console.log(Raghav)
console.log(Raghav.firstName)
console.log(Raghav.salary)
Raghav.display()
lahu.display()


// program 2 
class Intern {
    constructor(fn, ln){
        this.firstName = fn
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

class Employee extends Intern {
    constructor(fn, ln, EmpCode){
        super(fn,ln)
        this.EmpCode = EmpCode
    }
    display(){
        console.log(this.EmpCode)
    }
}

class Manager extends Employee {
    constructor(fn,ln,EmpCode, salary){
        super(fn,ln,EmpCode)
        this.salary = salary
    }
    display(){
        console.log(this.salary)
    }
}
let Komal = new Manager ('komal', 'Palke', 'EMP2883', "200000")
console.log(Komal)