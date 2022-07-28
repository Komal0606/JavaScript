// desctructure 

let names = [ "komal", "vishal", "meer", "rashmi", "prathmesh"]
console.log(names)

let [aa,bb,cc,dd,ee] = names
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)
console.log(ee)

// destructure is nothing but giving small tags to the values

let amt = [ 100, 2000, 5000, 8000, 400]
let [ab, ba, ca, da, ea] = amt
console.log(ab)
console.log(ba)
console.log(ca)
console.log(da)
console.log(ea)

let num = [[10,20, 30], [40,50,60],[55,65]]
let [[a,b,c],[d,e,f],[g,h]] = num
let [aa1, bb1, cc1]= num
console.log(a)
console.log(b)
console.log(g)
console.log(h)
console.log(e)
console.log(f)
console.log(aa1)
console.log(cc1)

let name2 = [["prachi", "rani"], ["krushna", "radha"]]
let [vv, kk] = name2
console.log(vv)
console.log(kk)
let [[ko,lo,], [no,mo]] = name2
console.log(mo)
console.log(lo)

//  object destructuring// object does not store the values by index
let info = {
    fn : "komal",
    ln : "Palke",
    age : 24,
    clg : "jspm"
}

console.log(info.fn)
let {fn: aaa, ln:bbb, age:ccc, clg:ddd} = info
console.log(aaa)
console.log(bbb)
console.log(ccc)
console.log(ddd)

let info2 = [
    {
     fn : "raja",
    ln : "shinde",
    age : 50,
    clg : "bcp"
    }, 

    {
        fn : "chandra",
       ln : "kakde",
       age : 80,
       clg : "modern"
       }
   ]

   let [{fn: a11, ln:b11, age:c11, clg:d11},{fn: e11, ln:f11, age:g11, clg:h11}] = info2
   console.log(g11)
   console.log(e11)
   console.log(d11)
