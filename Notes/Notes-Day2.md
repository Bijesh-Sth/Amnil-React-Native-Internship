#How is a BigInt instantiated (created) in JavaScript?

1. by calling the BigInt() constructor with a string argument
   for eg: let bigInt = BigInt('1234567890123456789012345678901234567890');

2. by appending n to the end of an integer literal
   for eg: let bigInt = 1234567890123456789012345678901234567890n;

3. by calling the BigInt() constructor with a number argument
   for eg: let bigInt = BigInt(1234567890123456789012345678901234567890);

---

#what id Hoisting in JavaScript? what are its types?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

Types of Hoisting:

1. Variable Hoisting: Variable declarations are hoisted to the top of their scope, but not their assignments.
   for eg: console.log(x); // undefined
   var x = 5;

2. Function Hoisting: Function declarations are hoisted to the top of their scope and can be used before they are declared.
   for eg: greet(); // 'Hello, world!'
   function greet() {
   console.log('Hello, world!');
   }

---

#Difference between es5 and es6

1. **Arrow Functions:**

   - Arrow functions are a more concise way to write functions in JavaScript.
   - They have a more compact syntax compared to traditional function expressions.

   - ES5: function add(a, b) { return a + b; }
   - ES6: const add = (a, b) => a + b;

2. **let and const:**

   - let and const are block-scoped variables introduced in ES6.
   - They provide an alternative to the var keyword for declaring variables.

   - ES5: var x = 5;
   - ES6: let x = 5; const y = 10;

3. **Template Literals:**

   - Template literals are a way to create strings in JavaScript that allows for embedded expressions.
   - They use backticks (`) to enclose the string and ${} to embed expressions.

   - ES5: var name = 'John'; console.log('Hello, ' + name + '!');
   - ES6: const name = 'John'; console.log(`Hello, ${name}!`);

4. **Classes:**

   - Classes are a way to define blueprints for creating objects with properties and methods in JavaScript.
   - They provide a more structured and object-oriented approach to programming.

   - ES5: function Person(name) { this.name = name; } Person.prototype.greet = function() { return `Hello, ${this.name}!`; };
   - ES6: class Person { constructor(name) { this.name = name; } greet() { return `Hello, ${this.name}!`; } }

5. **Default Parameters:**

   - Default parameters allow you to specify default values for function parameters in JavaScript.
   - They provide a way to define optional parameters with default values.

   - ES5: function greet(name) { name = name || 'world'; return `Hello, ${name}!`; }
   - ES6: const greet = (name = 'world') => `Hello, ${name}!`;

6. **Destructuring Assignment:**

   - Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.
   - It provides a more concise way to work with arrays and objects in JavaScript.

   - ES5: var person = { name: 'John', age: 30 }; var name = person.name; var age = person.age;
   - ES6: const person = { name: 'John', age: 30 }; const { name, age } = person;

7. **Spread Operator:**
   -spread operator allows you to spread elements of an iterable (like an array) into places where multiple elements are expected.
   -It provides a more concise way to work with arrays and objects in JavaScript.

   - ES5: var arr1 = [1, 2, 3]; var arr2 = [4, 5, 6]; var arr3 = arr1.concat(arr2);
   - ES6: const arr1 = [1, 2, 3]; const arr2 = [4, 5, 6]; const arr3 = [...arr1, ...arr2];

   8. **Modules:**

    - Modules are a way to organize and structure code in JavaScript by splitting it into separate files.
    - They allow you to import and export functionality between files.

    - ES5: var module = require('module'); or <script src="module.js"></script>
    - ES6: import module from 'module';


---

#What is the difference between null and undefined in JavaScript?

1. **null:**

   - null is a primitive value that represents the intentional absence of any object value.
   - It is often used to indicate that a variable has no value or that a function returns no value.

   - for eg: let value = null;

2. **undefined:**

   - undefined is a primitive value that represents the uninitialized or unassigned value of a variable.
   - It is the default value of variables that have not been assigned a value.

   - for eg: let value;

---

#Limitation of number in JavaScript

1. **Precision:**

   - JavaScript uses the IEEE 754 standard to represent numbers, which can lead to precision issues.
   - Numbers in JavaScript are represented as 64-bit floating-point numbers, which can result in rounding errors.

   - for eg: 0.1 + 0.2; // 0.30000000000000004

2. **Range:**

   - JavaScript numbers have a limited range of representable values.
   - Numbers in JavaScript can only represent values between -2^53 and 2^53.

   - for eg: Number.MAX_SAFE_INTEGER; // 9007199254740991

3. **NaN:**

   - NaN (Not-a-Number) is a special value in JavaScript that represents an unrepresentable value.
   - It is returned when a mathematical operation is not possible or results in an undefined value.

   - for eg: 0 / 0; // NaN

4. **Infinity:**

   - Infinity is a special value in JavaScript that represents positive infinity.
   - It is returned when a number exceeds the maximum representable value.

   - for eg: Number.MAX_VALUE + 1; // Infinity

---

#type coercion?

Type coercion is the process of converting one data type to another in JavaScript. JavaScript is a dynamically typed language, which means that variables can hold values of any data type. When an operation is performed on two values of different data types, JavaScript will attempt to convert one or both values to a common data type before executing the operation.

There are two types of type coercion in JavaScript:

1. **Implicit Type Coercion:**

   - Implicit type coercion occurs when JavaScript automatically converts one data type to another without the programmer explicitly specifying it.
   - It is done by the JavaScript engine to make operations between different data types possible.

   - for eg:
     5 + '5'; // '55'
     5 == '5'; // true

2. **Explicit Type Coercion:**

   - Explicit type coercion occurs when the programmer explicitly converts one data type to another using built-in functions or operators.
   - It is done by the programmer to control the conversion process and ensure that the desired data type is obtained.

   - for eg:
     Number('5'); // 5
     ParseInt('5'); // 5

---

#what is shallow and deep copy?

1. **Shallow Copy:**

   - A shallow copy creates a new object and copies the values of the original object's properties to the new object.
   - If the properties of the original object are primitive values, they are copied directly. If the properties are objects or arrays, only the references to those objects or arrays are copied.

   - for eg:
     const obj1 = { a: 1, b: { c: 2 } };
     const obj2 = { ...obj1 };
     obj2.b.c = 3;
     console.log(obj1.b.c); // 3

2. **Deep Copy:**

   - A deep copy creates a new object and recursively copies the values of the original object's properties to the new object.
   - It creates a completely new object with new references to all nested objects and arrays, ensuring that changes to the original object do not affect the copied object.

   - for eg:
     const obj1 = { a: 1, b: { c: 2 } };
     const obj2 = JSON.parse(JSON.stringify(obj1));
     obj2.b.c = 3;
     console.log(obj1.b.c); // 2

---

#What are symbol and bigint?

1. **Symbol:**

   - Symbol is a primitive data type introduced in ES6 that represents a unique and immutable value.
   - It is often used as a unique identifier for object properties to prevent naming conflicts.

   - for eg:
     const key = Symbol('key');
     const obj = { [key]: 'value' };

2. **BigInt:**

   - BigInt is a primitive data type introduced in ES11 that represents arbitrary-precision integers.
   - It allows you to work with integers larger than the maximum safe integer value in JavaScript.

   - for eg:
     const bigInt = 1234567890123456789012345678901234567890n;

---

#how are objects compared in js?

In JavaScript, objects are compared by reference, not by value. When comparing two objects, JavaScript checks if they reference the same object in memory, not if their properties are equal. This means that even if two objects have the same properties and values, they will not be considered equal if they are separate instances.

for eg:
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false

To compare the properties of two objects, you can use the JSON.stringify() method to convert the objects to strings and then compare the strings. This will check if the objects have the same properties and values, regardless of their memory references.

for eg:
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true

---

#use strict in js?

The "use strict" directive is a statement in JavaScript that enables strict mode, which is a restricted variant of JavaScript that enforces stricter parsing and error handling rules. When "use strict" is used at the beginning of a script or a function, it enables strict mode for the entire script or function.

Strict mode provides several benefits, including:

1. **Preventing the use of undeclared variables:** In strict mode, using a variable without declaring it first will result in a ReferenceError.

2. **Eliminating the use of deprecated features:** Strict mode disables certain features that are considered harmful or deprecated, such as with statements and octal literals.

3. **Catching common coding errors:** Strict mode catches common coding errors and throws exceptions for them, such as assigning values to read-only properties.

4. **Optimizing code:** Strict mode allows the JavaScript engine to optimize code more effectively, leading to better performance.

To enable strict mode, simply add the "use strict" directive at the beginning of your script or function:

for eg:
"use strict";

---

#backticks in js?

Backticks (`) are a special type of quotes in JavaScript that allow you to create template literals, which are string literals that can contain placeholders for variables and expressions. Template literals are enclosed by backticks and can span multiple lines, making them a more flexible and readable way to create strings in JavaScript.

Template literals can contain placeholders, indicated by ${}, which allow you to embed variables and expressions directly within the string. When the template literal is evaluated, the placeholders are replaced with the values of the variables or expressions.

for eg:
const name = 'John';
const greeting = `Hello, ${name}!`;

---
