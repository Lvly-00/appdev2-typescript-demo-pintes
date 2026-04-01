// Optional Values in parameter
function generateError(msg?: string) {
    throw new Error(msg ?? "Something went wrong")
}

try {
    generateError("An error occured");
} catch (err) {
    console.log("Caught error:", (err as Error).message);
}
// Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
// generateError()


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guess'
    }

    let user: User = {
        name: 'Lovely',
        age: 20
    }

    user.name
    user.age
})

// Nullish Coalescing `??` operator 
let input = 0;

console.log(input ?? 100); // 0
console.log(input || 100); // 100
const didProvideInput = input ?? false;

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.