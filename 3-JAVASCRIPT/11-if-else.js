// if , if else, if - else if, if
// true , false
// 1,-1, number, string, [], {} == true
// 0 , null , undefined = false 

if(0){
    console.log('hiii')
}
else{
    console.log("byeee")
} // ans - bye

// 2
if(1){
    console.log("hiii")
}
else{
    console.log("byeee")
} // ans - hii

// 3 ==
if(-1){
    console.log('hiii')
}
else{
    console.log('bye')
} // ans -- hii

// 4 =
if("a"){
    console.log('hiii')
}
else{
    console.log('byee')
}// ans - hii

//5 ==

if("komal"){
    console.log('hii')
}
else{
    console.log('bye')
} //ans - hii

if([]){
    console.log('hii')
}
else {
    console.log('byyee')
} // ans - hii

if({}){
    console.log('hii')
}
else{
    console.log('byee')
}

if(null){
    console.log('hii')
}
else{
    console.log('byee')
}// ans = bye

if(undefined){
    console.log('hii')
}
else{
    console.log('byee')
}

/// example
let numofperson = 4
if(numofperson <= 10){
    console.log('10% discount')
}
else{
    console.log('no discount')
}

let numofperson2 = 8
if(numofperson2 >= 10){
    console.log('30% discount')
}
else if (numofperson2 >= 5 && numofperson2 <= 10){
    console.log('20% discount')
}
else{
    console.log('not applicable')
}

let numofperson3 = 2
if(numofperson3 >= 10){
    console.log('40% discount')
}
else if (numofperson3 >= 5 && numofperson3 <= 10){
    console.log('20% discount')
}
else{
    console.log('not applicable')
}