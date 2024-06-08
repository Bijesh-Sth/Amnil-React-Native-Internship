const obj = {
  getName() {
    console.log(this);
  },
};

obj.getName();

function myConstructor() {
  console.log(this);
}

const c = new myConstructor();

// ctrl+shift+v

//Demonstration of execution order of callback functions

// console.log("start");

// setTimeout(() => {
//   console.log("first");
// }, 0);

// setTimeout(() => {
//   console.log("second");
// }, 0);

// console.log("end");

// // Callback Function

// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUserInput(callback) {
//   const name = "Potato";
//   callback(name);
// }

// processUserInput(greet); // The greet function is the callback

//Callback example for inplementation of for each

// const names = ["Food", "Potato", "Drink", "Water"];

// // names.forEach((name,index)=>console.log(name));

// const forEachFunction = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// forEachFunction(names, (name) => console.log(name));

// // Callback Hell
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("Done");
//     });
//   });
// });

// //Block Scope example
// var a = 10;
// if (a > 5) {
//   let b = 20;
//   console.log(a + b);
// }
// console.log(a + b);

// let symbol1 = Symbol("Test");
// console.log(symbol1);

//use strict example
// example 1

// "use strict";
// function test() {
//   x = 10;
//   console.log(x);
// }
// test();

// example 2

// "use strict";
// function notStrict() {
//     var obj = {};
//     Object.defineProperty(obj, 'x', { value: 0, writable: false });
//     obj.x = 10; // No error, but value won't change
//     return obj.x;
// }
// notStrict(); // This will return 0

// function isBoolean(arg) {
//   return typeof arg === "boolean";
// }

// console.log(isBoolean(null));
// console.log(isBoolean(true));

// function convertToNumber(arg) {
//   return Number(arg);
// }
// console.log(convertToNumber("123"));
// console.log(convertToNumber("hello"));

// function firstElement(arr) {
//   return arr[0];
// }
// console.log(firstElement([1, 2, 3]));
// console.log(firstElement("Hello World!"));

//linked list example

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   // Adds a new node with the specified data to the end of the list
//   addNode(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       // If the list is empty, set the new node as the head
//       this.head = newNode;
//     } else {
//       // Traverse to the end of the list and add the new node
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = newNode;
//     }
//   }

//   // Prints all the nodes in the list
//   printNodes() {
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.data);
//       curr = curr.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);
// list.printNodes();

// console.log('5' - 3);
// console.log('5' + 3);
// console.log('5' + - '2');
// console.log('5' * '2');
// console.log([] + {});
// console.log({} + []);

// function deepEqual(a, b) {
//   if (a === b) {
//     return true;
//   }

//   if (
//     typeof a !== "object" ||
//     typeof b !== "object" ||
//     a === null ||
//     b === null
//   ) {
//     return false;
//   }

//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   if (keysA.length !== keysB.length) {
//     return false;
//   }

//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
// console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
// console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));
// console.log(deepEqual({ a: 1, b: 2 }, { a: 1 }));
// console.log(deepEqual(2, 2));

// function groupBy(arr, prop) {
//   return arr.reduce((acc, obj) => {
//     const key = obj[prop];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }

// const list = [
//   { name: "Alice", age: 21 },
//   { name: "Max", age: 20 },
//   { name: "Jane", age: 20 },
//   { name: "Max", age: 21 },
// ];
// console.log(groupBy(list, "name"));

// function removeElements(arr, predicate) {
//     return arr.filter(item => !predicate(item));
//     }

//     const list = [1, 2, 3, 4, 5];
//     console.log(removeElements(list, n => n % 2 === 0)); // [1, 3, 5]
//     console.log(removeElements(list, n => n > 3)); // [1, 2, 3]

// function chunkArray(arr, size) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// }

// const list = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(chunkArray(list, 3));
// console.log(chunkArray(list, 4));

// function findCommonElements(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// }

// const list1 = [1, 2, 3, 4];
// const list2 = [2,3, 4, 5, 6, 7];
// console.log(findCommonElements(list1, list2));

// function transposeMatrix(matrix) {
//     return matrix[0].map((_, i) => matrix.map(row => row[i]));
//     }

// //     const matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     ];

// //     console.log(transposeMatrix(matrix));

// console.log("hello world!");

// class Stack {
//     constructor() {
//     this.stack = [];
//     }

//     push(item) {
//     this.stack.push(item);
//     }

//     pop() {
//     return this.stack.pop();
//     }

//     peek() {
//     return this.stack[this.stack.length - 1];
//     }
//     }

//     const stack = new Stack();
//     stack.push(1);
//     stack.push(2);
//     stack.push(3);
//     // console.log(stack.peek());
//     // console.log(stack.pop());
//     // console.log(stack.peek());
//     console.log(stack.stack);
