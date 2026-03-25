// console.log("Hello World!")

let userName: string = "Elmer";
let userAge = 31;

// ...

userAge = "31"

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5) {
    return a + b
}

add(10)
// add('10')
add(10, 6)
// add(10, '6')