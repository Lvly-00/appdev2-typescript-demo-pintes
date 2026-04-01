"use strict";
const form = document.querySelector('form');
if (!form) {
    throw new Error('Form not found');
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('user-name');
    const ageInput = document.getElementById('age');
    if (!(nameInput instanceof HTMLInputElement) ||
        !(ageInput instanceof HTMLInputElement)) {
        throw new Error('Invalid input elements');
    }
    const name = nameInput.value;
    const age = Number(ageInput.value);
    console.log('Name:', name);
    console.log('Age:', age);
});
// You can convince TypeScript that you are sure the value will not be null by using the non-null assertion operator `!`
// You can use the optional chaining `?.` operator to safely check if value is not null before the next operation
// const inputEl = document.getElementById('user-name')!
// console.log(inputEl!.value)
// if (!inputEl) {
//     throw new Error('Element not found!');
// }
// console.log(inputEl?.value)
// Type Casting or Assertion
// const inputEl = document.getElementById('user-name') as HTMLInputElement | null
