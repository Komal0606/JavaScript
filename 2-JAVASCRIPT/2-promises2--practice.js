let pro = new Promise(function(reject, resolve){
    let x = 10
    let y = 10
    if(x == y ){
        resolve("hii")
    }
    else {
        reject("bye")
    }
})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

let pro2 = new Promise(function(reject, resolve){
    let a = "komal"
    let b = "vishal"
    if(a == b ){
        resolve("b pharmacy")
    }
    else{
        reject("b com")
    }
})

pro2.then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
})

// settimeout

function complete(){
    console.log("function completed!");
    return;
  }
  setTimeout(complete, 2000.0); // 2000 = 2 seconds of idle time

  setTimeout(function(){
    console.log("hi chikki")
  },5000)


