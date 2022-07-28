// Synchronus -- 

function aa1 (){
    console.log("hello")
}

function aa2(){
    console.log("bye")
}

aa1()
aa2()

function bb1(){
    console.log("komal")
}

function bb2(){
    console.log("palke")
}

function bb3(){
    console.log("navnath")
}
bb1()
bb3()
bb2()

/// CALL BACK HELL
 function firstName(){
     setTimeout(function(){
         console.log("Vishal")
     },1000)
 }

 function lastName(){
     setTimeout(function(){
         console.log("palke")
     },3000)
    
 }

 function middleName(){
     setTimeout(function(){
         console.log("navnath")
     },2000)
 }

 firstName()
 lastName()
 middleName()
 
