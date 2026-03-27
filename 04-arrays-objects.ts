let hobbies = ["Eating", "Playing", "Sleeping"]

hobbies.push("Adventuring")
console.log(hobbies)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Lovely", "lvly", 123456]

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
    address: {
        city: string,
        country: string
    }
} = {
    name: "Lovely",
    age: 20,
    hobbies: ["Eating", "Playing","Sleeping"],
    role: {
        description: 'admin',
        id: 1
    },
    address: {
        city: 'Tokyo',
        country: 'Japan'
    }
}

console.log(user)

// Must not null or undefined
let val: {} = "Lovely Pintes"

console.log(val)

// Flexible Object - Record Type
let data: Record<string, number | string | boolean>

data = {
    1: 1,
    name: 'Pintes',
    isFreelancer: true
}

console.log(data)