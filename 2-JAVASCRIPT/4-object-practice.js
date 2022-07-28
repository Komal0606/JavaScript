// OBJECT 
let info = {
    name : "komal",
    age : "24",
    clg : "mit"

}
console.log(info)
// retrive 
let aa = info.name
console.log(aa)
let bb = info["age"]
console.log(bb)

// add 
let cc = info.subject = "pahrmacognosy"
console.log(cc)
let dd = info["teacher"] = "wani sir"
console.log(dd)
console.log(info)

// update '
let ee = info.name = "prathmesh"
console.log(ee)
let hh = info["name"] = "trisha"
console.log(hh)

// delete 
delete info.teacher
console.log(info)
delete info["subject"]
console.log(info)

let info2 = {
    clg : {
        name : "mit",
        location : "pune"
    },

    education : {
        brach : "Pharmacy",
        subject : "pharmaceutics"
    }
}

let aa2 = info2.education.brach
console.log(aa2)