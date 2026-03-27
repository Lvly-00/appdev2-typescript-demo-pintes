// Special Type - null
let a: null;

a = null
// a = "Hi"

let b: null | string

b = null
b = "Hello"
// b = 10
console.log(a, b)

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = 40
console.log(c)


let d: undefined | string

d = undefined
d = "Final boss of Nod-Krai!"
// d = null
// d = 10

console.log(d)

let e: undefined | number
e = undefined
// e = null
e = 10
console.log(e)