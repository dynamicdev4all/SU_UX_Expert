// 1. Basic Arrow Function
// A simple arrow function that adds two numbers:

const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8


// -----------------------------------------------------------------------------------------------------------------------------



// 2. Arrow Function with a Single Parameter
// When there's only one parameter, you can omit the parentheses:

const square = n => n * n;

console.log(square(4)); // Output: 16


// -----------------------------------------------------------------------------------------------------------------------------



// 3. Arrow Function with No Parameters
// If there are no parameters, you still need to include empty parentheses:

const greet = () => 'Hello, World!';

console.log(greet()); // Output: Hello, World!



// -----------------------------------------------------------------------------------------------------------------------------



// 4. Arrow Function with Multiple Lines
// If the function body contains multiple statements, you need to use curly braces and return for the output:

const multiplyAndAdd = (a, b) => {
    const product = a * b;
    return product + 10;
};

console.log(multiplyAndAdd(3, 4)); // Output: 22


// -----------------------------------------------------------------------------------------------------------------------------



// 5. Arrow Functions with Default Parameters
// You can set default values for parameters in arrow functions, similar to regular functions:


const greet = (name = 'Guest') => `Hello, ${name}!`;

console.log(greet());        // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!



// -----------------------------------------------------------------------------------------------------------------------------


const rect = (l,b) =>{
    const area = l*b;
    const per = 2 *(l+b)
}

dim = [10,20]
rect(...dim)
