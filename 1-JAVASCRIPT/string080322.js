// string 
// array conditional loop ,logical , struture 
// functions , parameter , spread and rest 


let name = "komal"
//    1   2    3   4   5
//    k   o    m   a   l
//    -5 -4   -3   -2  -1

for(let i = 0 ; i < name.length ; i++){
    //console.log(i)
    console.log(name[i])
}

// reverse the string 


let city = "nagpur"
let rev = ""
for(let i = 0 ; i < city.length ;i++){
    //console.log(city[i])
    rev = city[i] + rev 
  
}
console.log(rev)

let city3 = "delhi"
let rev2 = ""
for(let i = city3.length -1 ; i >=0 ;i--){
    //onsole.log(city[i])
    rev2 = rev2 + city3[i] 
   
}
console.log(rev2)

//------------------------------------>

//Javascript  - Object 
// Objects will have property and method


// property 
//length 

let subject = "marathi hindi english history"
console.log(subject.length)

// method 
let aa = subject.toUpperCase()
console.log(aa)

let bb = subject.toLowerCase()
console.log(bb)

// method changing 

let fav = "kishore kumar"
let cc = fav.toUpperCase().toLowerCase().length
console.log(cc)

let singers = "aasha kishore rafi "
let dd = singers.includes("neha")
console.log(dd)
let ee =singers.includes("aasha")
console.log(ee)

let ff = singers.indexOf("kishore")
console.log(ff)

let userCity = "bhopal"
let city2 = "pune banglore mumbai bhopal"

if(city2.indexOf(userCity) < 0){
    console.log('city is not available')
}
else {
    console.log("city is available")
}

let food = " panipuri"
console.log(food.length)
let gg = food.trimStart()
console.log(gg)

let food2 = "sandwich "
console.log(food2.length)
let hh = food2.trimEnd()
console.log(hh)

let food3 = "  pizza  "
console.log(food3.length)
let ii = food3.trim()
console.log(ii)
console.log(ii.length)