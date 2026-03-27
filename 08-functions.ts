(() => {

    // Function Return Value Types
    function add(a: number, b: number): number { // you can omit the function type since typescript can infers it
        return a + b
    }

    console.log(add(20, 15)); // 35
    // add("5", 10)

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message: string): void {
        console.log(message)
    }

    log("Welcome tp this World!")

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string) {
        console.log(errorMessage)
        throw new Error(errorMessage)
    }

    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb: (m: string) => void) {  // you can also use cb: Function but () => void is the best practice
        // ...
        cb('Task Completed!');
    }

    let logMsg = (msg: string): void => {
        console.log(msg)
    }

    performJob(logMsg)

    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        greet: () => string;
    }

    let user: User = {
        name: "Alice",
        age: 40,
        // greet: function() {
        //     return this.name
        // }
        greet() {
            console.log(`Hello, I am ${this.name}from the Hexenzirkel, and a friend!`)
            return this.name
        }
    }

    user.greet()
})