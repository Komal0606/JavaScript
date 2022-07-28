// // array and object 
// // Map and Set method

// Map method  -  
 let aa = new String("komal")  /// object
 let bb = "komal"
  console.log(aa)
  console.log(bb)

  // map and set

//   let map1 = new Map()
//   console.log(map1)
//   console.log(map1.size)

  let map2 = new Map()
  console.log(map2)

  let map3 = new Map()
  console.log(map3)

  //action and return type 

  let map1 = new Map()
  console.log(map1)
  console.log(map1.size)

  //          key        value
  map1.set("question", "answere")
  console.log(map1)
  map2.set("name ", "komal palke")
  console.log(map2)

   // true as key 
   map3.set("true", "i have completed my graduation")
   console.log(map3)
   map3.set("false", "i have not done master's")
   console.log(map3)

   // number as a key

   let map4 = new Map()
   map4.set("age" , 23)
   map4.set("rollNo", 50)
   console.log(map4)


   // array as a key
   let gg = ["komal", "gosh"]
   let gg1 = map4.set("BBF" , gg)
   console.log(gg1)

   // object as a key 
   let obj = { lastname1 : "palke", lastname2 : "shaikh"  }
    let hh = map4.set("lastname", obj)
    console.log(hh)

    // Get method

  //  let map4 = new Map()
  //  map4.set("age" , 23)
  //  console.log(map4)
   
    console.log(map3.get(obj))
    console.log(map4.get("array"))
    
    // set() and get()

    // .clear = remove the all values of object

    // map4.clear()
    // console.log(map4)

    let ss = map4.has(obj)
    let ss1 = map4.has(gg)
    console.log(ss)
    console.log(ss1)

    let ss2 = map4.has("komal")
    console.log(ss2)

    console.log(map4.keys())
    console.log(map4.values())
    console.log(map4.entries())
    
   



