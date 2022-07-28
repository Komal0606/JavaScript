// Promises - A promise is simply a placeholder for an asynchronous task which is yet to be completed

//synchronus
function addition(){
    console.log(10+20)
}
function addition2(){
    console.log(100+80)
}

addition2()
addition()

//asynchronus
function addition3(){
    setTimeout(function(){
        console.log(10+80)
    },500)
}
function addition4(){
    console.log(100+10000)
}

addition3()
addition4()

// cypress execution be synchronus 
// cypress commands are asynchronus
// cypress -- javscript jquery --- break sychronus order
// intervence ----> promises manually ----.then()
//--------------------------------------------------------->
// hello 

// hi 

// bye

function kokoko(){
    setTimeout(function(){
        console.log('bye')
    },3000)

    setTimeout(function(){
        console.log('hi')
    },1000)

    setTimeout(function(){
        console.log('hello')
    },2000)
}

kokoko()

function palke(){
    setTimeout(function(){
        console.log('hi')
        setTimeout(function(){
            console.log('bye')
            setTimeout(function(){
                console.log('Hello')
            },4000)
        },6000)
    },5000)
}

palke()