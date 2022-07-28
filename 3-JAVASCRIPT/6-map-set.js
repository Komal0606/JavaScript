// map set method 

map1 = new Map()
console.log(map1)

map2 = new Map()
console.log(map2)

console.log(map2.set("name", "komal"))
console.log(map2.set("lastName", "Palke"))
console.log(map2.set("age", "24"))

// set array
let aa = ["komal", "snehal"]
console.log(map2.set("names", aa))

let bb = [10, 20, 30, 40]
console.log(map2.set("num", bb))

// set obj 
let cc = {
    clg : "mit kothrud",
    edu : "Bpharmacy"
}

console.log(map2.set("clgInfo", cc))
