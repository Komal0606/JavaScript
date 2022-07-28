// HOW TO FIND OUT html ELEMENT 
//                                                  komal palke
// <h1 id = "rose" class = "flower" , name = "nm" >heading name </h1>

// attribute = id , class , name 
// value = rose , flower , nm

// html element
// javascript datatype --- object --- object property and value

// tagname

// id 

// class 

// common formula 

// text

// tagname 
//// <h1 id = "rose" class = "flower" , name = "nm" >heading name </h1>

// let a = document.querySelector('h1')
// console.log(a)

// id 
// let i = document.querySelector('#rose')
// console.log(i)

// class 
// let c = document.querySelector(".flower")
// console.log(c)

// common formula 
// tagname[attribute = "value"]
//   h1        id        rose

// let o = document.querySelector('h1[class="flower"]')
// //console.log(o)

// let bb = document.querySelector('h1[id="rose"]')
// console.log(bb)

let htmlelement = document.querySelector('h1[name="nm"]')
//console.log(htmlelement)

// htmlelement = object , addEventListener = method , click = 1st parameter / user action , funct
// text --- cypress
//                             useraction 
// htmlelement.addEventListener('mouseover', function(){
//     htmlelement.style.color = "pink"
//     htmlelement.style.backgroundColor = "green"
//     htmlelement.textContent = "Goshiya"
// })

// let person = {
//     student1 : {
//         name : "pranjal landge",
//         age : 10
//     },

//     clginfo : {
//         clg : {
//             teacher : "Jadhav sir",
//             principle : "Aambekar sir"
//         }
//     }
// }


// person.clginfo.principle = "Sutar sir"