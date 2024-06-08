1. Write a function isBoolean that takes one argument and returns true if the argument is of
   type boolean, and false otherwise.

function isBoolean(arg) {
return typeof arg === 'boolean';
}

---

2. Question: Write a function convertToNumber that converts a given string to a number. If
   the string cannot be converted, return NaN.

function convertToNumber(arg) {
return Number(arg);
}

---

3. Write a function firstElement that returns the first element of an array.

function firstElement(arr) {
return arr[0];
}

---

4. Write a function getEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers

function getEvenNumbers(arr) {
return arr.filter(num => num % 2 === 0);
}

---

5. Write a function sortStrings that takes an array of strings and returns a new array with the strings sorted in alphabetical order.

function sortStrings(arr) {
return arr.sort();
}

---

6. What will be the output of the following code? Explain why.
   **_console.log(a);
   var a = 10; _**

-The output will be undefined.
-This is because of hoisting in JavaScript.
-The variable is hoisted how ever the value is not so it will be undefined.

---

7. What will be the output of the following code? Explain why.
   **Console.log(foo());
   function foo() {
   return 'Hello, World!';
   }
   **

-The output will be 'Hello, World!'.
-This is because of hoisting in JavaScript.
-The function is hoisted so it can be called before it is declared.

---

8. Implement a stack using an array. Include methods push, pop, and peek.

class Stack {
constructor() {
this.stack = [];
}

push(item) {
this.stack.push(item);
}

pop() {
return this.stack.pop();
}

peek() {
return this.stack[this.stack.length - 1];
}
}

---

9. Implement a queue using an array. Include methods enqueue and dequeue.

class Queue {
constructor() {
this.queue = [];
}

enqueue(item) {
this.queue.push(item);
}

dequeue() {
return this.queue.shift();
}
}

---

10. Implement a simple singly linked list with methods to add a node to the end and to print
    all nodes.

class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}

class LinkedList {
constructor() {
this.head = null;
}

addNode(data) {
const newNode = new Node(data);

    if (!this.head) {

      this.head = newNode;
    } else {

      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }

}

printNodes() {
let curr = this.head;
while (curr) {
console.log(curr.data);
curr = curr.next;
}
}
}

---

11. Explain the output of the following code
    ## 1. `console.log('5' - 3);`

- The output will be `2`.
- This is because the string `'5'` is converted to a number and then subtracted by `3`.
- `'5'` is converted due to the `-` operator.

## 2. `console.log('5' + 3);`

- The output will be `'53'`.
- This is because the number `3` is converted to a string and then concatenated with `'5'`.
- `3` is converted due to the `+` operator, which, when used with a string, results in string concatenation.

## 3. `console.log('5' + - '2');`

- The output will be `'5-2'`.
- This is because the unary `-` operator converts `'2'` to `-2`.
- The `+` operator then treats `-2` as a string and concatenates it with `'5'`.

## 4. `console.log('5' * '2');`

- The output will be `10`.
- This is because the `*` operator is used with two strings.
- Both strings are converted to numbers and then multiplied.

## 5. `console.log([] + {});`

- The output will be `'[object Object]'`.
- This is because the array is converted to an empty string `''` and then concatenated with the object, which is converted to the string `'[object Object]'`.

## 6. `console.log({} + []);`

- The output will be `'[object Object]'`.
- This is because, in this context, the `{}` is interpreted as an empty object and `[]` as an empty array.
- The empty object is converted to the string `'[object Object]'` and concatenated with an empty string representation of the array.

---

12. Explain the difference between strict mode and non-strict mode in JavaScript in terms of type safety and error handling.

- Strict mode is a feature introduced in ECMAScript 5 that allows developers to opt into a restricted variant of JavaScript that enforces stricter parsing and error handling.
- In strict mode, certain actions that would otherwise result in silent errors or unexpected behavior will throw errors, making it easier to catch and fix bugs.
- Strict mode also helps prevent common pitfalls and improve performance by disallowing certain features and behaviors that are considered harmful or deprecated.

- Type safety:

  - In strict mode, type safety is enforced more strictly, with actions like assigning values to undeclared variables or using reserved keywords as variable names throwing errors.
  - Non-strict mode is more lenient with type coercion and allows for looser type checking, which can lead to unexpected behavior or bugs.

- Error handling:

  - In strict mode, certain actions that would otherwise result in silent errors or unexpected behavior will throw errors, making it easier to catch and fix bugs.
  - Non-strict mode is more lenient with error handling and may allow certain actions to proceed without throwing errors, potentially leading to harder-to-debug issues.

---

13. Write a function deepEqual that compares two JavaScript values and returns true if they are equivalent in value and type, handling nested objects and arrays.

function deepEqual(a, b) {
if (a === b) {
return true;
}

if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
return false;
}

const keysA = Object.keys(a);
const keysB = Object.keys(b);

if (keysA.length !== keysB.length) {
return false;
}

for (let key of keysA) {
if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
return false;
}
}

return true;
}

---

14. Write a function that takes an array of objects and groups them by a specified property.

function groupBy(arr, prop) {
return arr.reduce((acc, obj) => {
const key = obj[prop];
if (!acc[key]) {
acc[key] = [];
}
acc[key].push(obj);
return acc;
}, {});
}

---

15. Write a function that removes elements from an array based on a predicate function.

function removeElements(arr, predicate) {
return arr.filter(item => !predicate(item));
}

---

16. Write a function that chunks an array into smaller arrays of a specified size.

function chunkArray(arr, size) {
const chunks = [];
for (let i = 0; i < arr.length; i += size) {
chunks.push(arr.slice(i, i + size));
}
return chunks;
}

---

17. Write a function that finds the common elements between two arrays.

function findCommonElements(arr1, arr2) {
return arr1.filter(item => arr2.includes(item));
}

---

18. Write a function that transposes a matrix (converts rows to columns and vice versa).

function transposeMatrix(matrix) {
return matrix[0].map((\_, i) => matrix.map(row => row[i]));
}

---
