// The spread operator (...) in JavaScript is a versatile tool that
// can be used in a variety of scenarios involving arrays, objects, 
// and even function arguments. Here are some more examples to illustrate its usage:

// 1. Combining Arrays
// The spread operator can be used to combine multiple arrays into one.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]


// -----------------------------------------------------------------------------------------------------------------------------



// 2. Copying Arrays
// You can create a shallow copy of an array using the spread operator. This is particularly useful when you want to avoid mutating the original array.


const originalArray = ['a', 'b', 'c'];
const copiedArray = [...originalArray];

copiedArray.push('d');

console.log(originalArray); // Output: ['a', 'b', 'c']
console.log(copiedArray);   // Output: ['a', 'b', 'c', 'd']


// -----------------------------------------------------------------------------------------------------------------------------



// 3. Spreading Elements into Function Arguments
// The spread operator can be used to pass elements of an array as individual arguments to a function.

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Output: 6



// -----------------------------------------------------------------------------------------------------------------------------



// 4. Spreading Objects
// The spread operator can also be used to copy objects or combine multiple objects into one.


const person = { name: "John", age: 25 };
const job = { title: "Developer", company: "TechCorp" };

const employee = { ...person, ...job };

console.log(employee); 
// Output: { name: "John", age: 25, title: "Developer", company: "TechCorp" }



// -----------------------------------------------------------------------------------------------------------------------------



// 5. Adding New Properties to Objects
// You can use the spread operator to add new properties to an object while copying the existing ones.

const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, city: "New York" };

console.log(updatedPerson); 
// Output: { name: "Alice", age: 30, city: "New York" }



// -----------------------------------------------------------------------------------------------------------------------------



// 6. Merging Objects with Overwriting Properties
// When merging objects, properties from the object on the right will overwrite properties from the object on the left if they have the same key.


const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };

const finalSettings = { ...defaultSettings, ...userSettings };

console.log(finalSettings); 
// Output: { theme: "dark", notifications: true }



// -----------------------------------------------------------------------------------------------------------------------------



// 7. Destructuring with Spread Operator
// You can use the spread operator in destructuring to collect the remaining elements of an array or properties of an object.


const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // Output: 10
console.log(second); // Output: 20
console.log(rest);   // Output: [30, 40, 50]

const user = { name: "Bob", age: 35, country: "USA" };
const { name, ...otherDetails } = user;

console.log(name);         // Output: Bob
console.log(otherDetails); // Output: { age: 35, country: "USA" }



// -----------------------------------------------------------------------------------------------------------------------------



// 8. Concatenating Strings into Arrays
// The spread operator can be used to easily convert a string into an array of characters.

const word = "hello";
const letters = [...word];

console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o']


// -----------------------------------------------------------------------------------------------------------------------------



// 9. Combining Spread with Other Array Methods
// The spread operator can be used in combination with other array methods, such as map, filter, or reduce.

const numbers = [1, 2, 3];
const doubledNumbers = [...numbers.map(n => n * 2)];

console.log(doubledNumbers); // Output: [2, 4, 6]



// -----------------------------------------------------------------------------------------------------------------------------



// 10. Flattening Nested Arrays
// The spread operator can be used in combination with concat or within array literals to flatten nested arrays.

const nestedArray = [1, [2, 3], [4, 5]];
const flatArray = [].concat(...nestedArray);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]