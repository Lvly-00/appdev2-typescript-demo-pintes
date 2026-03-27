// console.log("Hello World!")

let userName: string = "Lovely";
let userAge: number = 20;

// ...

userAge = 19

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10')
add(10, 6)
// add(10, '6')

console.log(add(22))
console.log(add(5, 3))