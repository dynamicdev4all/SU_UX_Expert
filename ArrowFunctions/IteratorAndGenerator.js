Iterators

// 1. Simple Array Iterator
// Create an array

const fruits = ['Apple', 'Banana', 'Cherry'];

// Get an iterator from the array
const iterator = fruits[Symbol.iterator]();

console.log(iterator.next()); // { value: 'Apple', done: false }
console.log(iterator.next()); // { value: 'Banana', done: false }
console.log(iterator.next()); // { value: 'Cherry', done: false }
console.log(iterator.next()); // { value: undefined, done: true }


// -----------------------------------------------------------------------------------------------------------------------------


// 2: Iterating Over a String
// You can also use an iterator to loop through each character in a string.


// Create a string
const greeting = 'Hello';

// Get an iterator from the string
const iterator = greeting[Symbol.iterator]();

console.log(iterator.next()); // { value: 'H', done: false }
console.log(iterator.next()); // { value: 'e', done: false }
console.log(iterator.next()); // { value: 'l', done: false }
console.log(iterator.next()); // { value: 'l', done: false }
console.log(iterator.next()); // { value: 'o', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// -----------------------------------------------------------------------------------------------------------------------------



// 3: Simple Generator Function
// This generator yields a series of numbers, one at a time.


// Define a generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Use the generator
const generator = numberGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }


// -----------------------------------------------------------------------------------------------------------------------------




// 4: Looping with a Generator
// Here’s how you can loop through the values yielded by a generator.


function* colorGenerator() {
    yield 'Red';
    yield 'Green';
    yield 'Blue';
}

// Create a generator
const colors = colorGenerator();

// Loop through the generator values
for (let color of colors) {
    console.log(color);
}
// Output:
// Red
// Green
// Blue



// -----------------------------------------------------------------------------------------------------------------------------



// 5 : Real Life Example : Task Managaer

function* taskListGenerator() {
    yield 'Do the laundry';
    yield 'Clean the house';
    yield 'Prepare dinner';
}

// Create the generator
const tasks = taskListGenerator();

console.log(tasks.next().value); // Do the laundry
console.log(tasks.next().value); // Clean the house
console.log(tasks.next().value); // Prepare dinner
