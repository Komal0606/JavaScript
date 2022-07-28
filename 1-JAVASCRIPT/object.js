// // types of objects = 
// // 1)retrive 2) update , 3) delete  , 4) add

// let person = {
//  name : "komal palke" ,
//  rollNo : 45, 


// }

// // object does not stores the value by index 

// // 1 - retrive 
// console.log(person["name"])
// console.log(person["rollNo"])

// // 2 - update - dot notation and bracket notation
// person.rollNo = 10
// console.log(person)

// person["name"] = "snehal"
// console.log(person)

// person["rollNo"] = 52
// console.log(person)

// // 3 ) add 

// person.city = " pune "
// person["clg"] = "mit"
// console.log(person)

// // 4) delete 

// delete person.city
// console.log(person)

// delete person["rollNo"]
// console.log(person)

let student = { 
    name : "saba mahaphule",
    age : 22,

}

// retrive 
console.log(student["age"])
console.log(student["name"])
console.log(student.name)

// update 
student["age"] = 58
student.name = "mishti"
console.log(student)

// add 
student.city = "mumbai"
student["sport"] = "footboll"
console.log(student)

// delete 
delete student.age
delete student["sport"]
console.log(student)


    
    let person = {
        student1 : {
            name : "pranjal landge",
            age : 10
        },
    
        clginfo : {
            clg : {
                teacher : "Jadhav sir",
                principle : "Aambekar sir"
            }
        }
    }
 person.clginfo.principle = "Sutar sir"
 console.log(person)

 person.clginfo.principle = "Sutar sir"