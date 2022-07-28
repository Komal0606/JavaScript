/// comparison 
// logical
//conditional
//truthy and falsy value

// comparison operator 
//<, >,<=,>=,!=,==,===,!==

// program 1 

let a = 20
let b = 15
console.log(a>b)  // boolean value 
// comparison 

console.log(8>8)
console.log(7<5)
console.log(10==10)
console.log(40=='40')
console.log(5!=10)
console.log(75!=='52')
console.log(10===20)
 
//program 2
// logical operator
// 1 - AND - &&

// True True -----> True
// True False ------> false
//false true ----> false 
// false false ----> false 

console.log('---------and ---------')

console.log(5=='5' && 6!==40)
console.log(10>5 && 10==9)

// OR 
// True True -----> True
// True False ------> TRUE
//false true ----> TRUE 
// false false ----> false 

console.log('---------OR---------')

console.log(5=='5' && 6!==6)
console.log(10>5 && 10==9)

// NOT - !

console.log('----------not-------')
console.log(!true)  // f[alse
console.log(!false)   // true

// condition statements

// numberofTickets --------> 10%, 20%,30%
// condition statements - 
// if, if else , if else if else
// syntax
// if (condition) = check condition
// if else = else condtion will checked only when if condition is false


let numberofTickets = 6 
if(numberofTickets <= 5){
    console.log('5 percent discount')
}
if(numberofTickets > 5 && numberofTickets<=10){
    console.log('10 percent discout')
}

let numberofTicketsB = 3
if(numberofTicketsB <=5){
    console.log('5 percent discount')

}
else if(numberofTickets2 > 5 && numberofTicketsB <= 10){
    console.log('10 percent discount')
}

else {
    console.log('incorrect input')
}