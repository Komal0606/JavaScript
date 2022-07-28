// api

// api ---------- users --------id ----- getSingleInfo

// call back hell 

// promises 

// async function

// api ===> users ===> id ====> user

// cypress asyn ===> execution sync ===> javscript ===> asyn 
// cypress ===> POM ====> class === javascript == asyn ====>  promises

//https://reqres.in/api/users?page=2 ===> 
// https://reqres.in/api/users/2

function getUsersInfo(){
    let request = XMLHttpRequest()
    request.open('GET', `https://reqres.in/api/users?page=${pageNumber}`)
    request.send()
    request.addEvent('load',function(){
        console.log(this.responseText)
    })
}