class Student {
    constructor(fn, ln,){
        this.firstName = fn,
        this.lastName = ln
    }
    display(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    constructor(fn, ln, salary){
        super(fn, ln)
        this.salary = salary
    }
    display(){
        console.log(this.salary)
    }
}

class Professor extends Teacher {
    constructor(fn, ln, salary, speclisation){
        super(fn, ln, salary)
        this.speclisation = speclisation

    }

    dispaly(){
        console.log(this.speclisation)
    }
}

let komal = new Professor ("Komal", "Palke", "50000", "Physics")
let aa = komal.firstName
console.log(aa)
//komal.display()
let bb = komal.speclisation
console.log(bb)
console.log(komal.lastName)
console.log(komal.salary)
komal.display()