


let fruits = ["mango","apple","grapes","cherry"]

let  aa = fruits[0]
let  bb = fruits[1]
let  cc = fruits[2]
let  dd = fruits[3]

console.log('------------destructure---------------')

let [hh, ii,jj,kk] = fruits

console.log(hh)
console.log(ii)
console.log(jj)
console.log(kk)

// -----------------------------------

let payments = [50, 100, 120, 500, 63]

let [ qq,ww,rr,tt,uu ] = payments

console.log(qq)
console.log(ww)
console.log(rr)
console.log(tt)
console.log(uu)

// ---------------------------

let rollNo = [[10,11,12],[20,21],[30,31,38]]

let [as, sd, df] = rollNo

 console.log(as)
 console.log(sd)
 console.log(df)

 let ggh = rollNo.reduce(function(acc,el){
     return acc.concat(el)
 },[])
 console.log(ggh)

 //-----------------------------
 

 aabb = [ [56,57,58],[88,89,44],[11,22,33] ]

 let [yy,pp,ll] = aabb

console.log(yy)
console.log(pp)
console.log(ll)
let [ [y1,y2,y3],[p1,p2,p3],[l1,l2,l3]] = aabb
console.log(p1)
console.log(l2)

//let myself = {"komal", "palke", "mit kothrud", "pune"} - does not stores the value by index

let myself = {
    firstName : "komal",
    lastName : "palke",
    clg :"mit kothrud",
    place : "pune"


}

let {firstName:c1, lastName:c2, clg:c3, place:c4} = myself
//console.log(clg)
//console.log(lastName)
console.log(c1)
console.log(c3)

// ---------------------------------------

// object in array 

let students = [
    {
        name : "komal",
        rollNo : 29,
        sub : ["Maths", "Science"]

    },
    {
        name : "samiran",
        rollNo : 56,
        sub : ["hindi","english"]

    },
    {
        name : "aayush",
        rollNo : 63,
        sub : ["histrory", "science"]
    }
]
let [k99, p88, n66] = students
console.log(p88)
console.log(k99)
console.log(n66)

let [{name:k11, rollNo:k22, sub:k33},{name:s11, rollNo:s22, sub:s33},{name:a11, rollNo:a22, sub:a33}] = students

console.log(k11)
console.log(s11)
console.log(a11)