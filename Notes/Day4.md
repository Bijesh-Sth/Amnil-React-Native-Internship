# Day 4

## what is the scope of this in js?

**Answer:**

The scope of `this` in JavaScript is determined by how a function is called. It is not static, it changes depending on how a function is called.

- When the function is called in the global scope, `this` refers to the global object, which is `window` in the browser.
- When the function is called as a method of an object, `this` refers to the object the method is called on.
- When the function is called with the `new` keyword, `this` refers to the newly created object.
- when called form outside an object, `this` refers to the global object.

```js
function funct() {
  console.log(this);
}

funct(); // window

const obj = {
  bar: function () {
    console.log(this);
  },
};

obj.bar(); // obj

const baz = new obj.bar(); // obj.bar {}
```

```Output
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 93.93859999999404,
      nodeStart: 5.460599999991246,
      v8Start: 15.533100000000559,
      bootstrapComplete: 67.9372999999905,
      environment: 31.86439999996219,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1716909767975.887
  },
  fetch: [AsyncFunction: fetch]
}
{ bar: [Function: bar] }
bar {}
```

## How is this used in arrow function and normal function?

**Answer:**

In arrow functions, `this` is lexically scoped, meaning it uses the `this` value of the enclosing execution context. Arrow functions do not have their own `this` value. They inherit the `this` value from the surrounding code.

In normal functions, `this` is dynamically scoped, meaning it is determined by how the function is called. The value of `this` is not determined by where the function is defined, but by how it is called.

```js
const obj = {
  bar: function () {
    console.log(this);
  },
  baz: () => {
    console.log(this);
  },
};

obj.bar(); // obj
obj.baz(); // window
```

```Output
{ bar: [Function: bar], baz: [Function: baz] }
{}
```

## what is prototype ?

**Answer:**

- In JavaScript, every function has a `prototype` property that is empty by default.
- You can attach properties and methods to the prototype property, and these will be shared by all instances of the function.
- This is a way to achieve inheritance in JavaScript.
- When you create an object using the `new` keyword, the object's internal `[[Prototype]]` property is set to the constructor function's `prototype` property.
- You can access an object's prototype using the `Object.getPrototypeOf()` method.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Potato");

person1.greet(); // Hello, my name is Potato
```

```Output
Hello, my name is Potato
```

## difference between higher order function and callback function?

**Answer:**

| **Aspect**     | **Higher Order Function**                                                            | **Callback Function**                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Definition** | A function that takes a function as an argument or returns a function.               | A function that is passed as an argument to another function and is executed after some operation has been completed. |
| **Purpose**    | Used to abstract over actions, not just values.                                      | Used to perform some action after a certain operation has been completed.                                             |
| **Creation**   | Can create new functions by partially applying arguments to an existing function.    | Typically passed to handle asynchronous operations or events.                                                         |
| **Usage**      | Used to create functions that can be called multiple times with different arguments. | Commonly used to handle events in the browser, such as click events, mouseover events, etc.                           |
| **Examples**   | `map`, `filter`, `reduce` in JavaScript.                                             | Functions passed to `setTimeout`, `setInterval`, event handlers in JavaScript.                                        |


```javascript

// Higher Order Function
function multiplyBy(factor) {
return function(number) {
return number \* factor;
}
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

```javascript
// Callback Function
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Potato";
  callback(name);
}

processUserInput(greet); // The greet function is the callback
```

## execution order of callback

**Answer:**

- The execution order of callbacks in JavaScript is determined by the event loop.
- The event loop is responsible for handling asynchronous operations in JavaScript.
- When an asynchronous operation is completed, the callback associated with that operation is added to the event queue.
- The event loop then picks up the callback from the event queue and executes it.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("First callback");
}, 0);

setTimeout(() => {
  console.log("Second callback");
}, 0);

console.log("End");
```

```Output
Start
End
First callback
Second callback
```

## callback and callback hell

**Answer:**

- Callback hell is a situation where multiple nested callbacks are used to handle asynchronous operations in JavaScript.
- This can lead to code that is difficult to read, maintain, and debug.
- Callback hell can be avoided by using promises, async/await, or other asynchronous programming patterns.

```javascript
// Callback Hell
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("Done");
    });
  });
});
```

```Output
Step 1
Step 2
Step 3
Done
```

## what is promise?

**Answer:**

- A promise is an object that represents the eventual completion or failure of an asynchronous operation.
- Promises are used to handle asynchronous operations in JavaScript.
- A promise can be in one of three states: `pending`, `fulfilled`, or `rejected`.
- Promises have a `then()` method that allows you to handle the result of the asynchronous operation when it completes.
- Promises can be chained together using the `then()` method.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.then((result) => {
  console.log(result); // Output: Success!
});
```

```Output
Success!
```

## difference between promise and callback

**Answer:**

| **Aspect**          | **Promise**                                                                                | **Callback**                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Definition**      | An object that represents the eventual completion or failure of an asynchronous operation. | A function that is passed as an argument to another function and is executed after some operation has been completed.  |
| **Purpose**         | Used to handle asynchronous operations in JavaScript.                                      | Used to perform some action after a certain operation has been completed.                                              |
| **main difference** | Promises are objects that represent the result of an asynchronous operation.               | Callbacks are functions that are passed as arguments to other functions and executed after an operation has completed. |
| **Syntax**          | Uses `then()` method to handle the result of an asynchronous operation.                    | Passed as an argument to another function and executed after an operation has been completed.                          |
| **Chaining**        | Promises can be chained together using the `then()` method.                                | Callbacks cannot be chained together.                                                                                  |
| **Error Handling**  | Promises have a `catch()` method to handle errors.                                         | Callbacks do not have built-in error handling.                                                                         |
| **Readability**     | Promises can make code more readable by avoiding callback hell.                            | Callbacks can lead to callback hell, making code difficult to read and maintain.                                       |
| **State**           | Promises have three states: `pending`, `fulfilled`, and `rejected`.                        | Callbacks do not have states.                                                                                          |

## what is async await?

**Answer:**

- `async` and `await` are keywords introduced in ES2017 (ES8) that allow you to write asynchronous code that looks synchronous.
- The `async` keyword is used to declare an asynchronous function, which returns a promise.
- The `await` keyword is used to pause the execution of an `async` function until a promise is settled (either fulfilled or rejected).
- `async` functions can contain one or more `await` expressions, which pause the execution of the function until the promise is settled.

async await is better than promise because it makes the code more readable and easier to understand.
this is because it allows you to write asynchronous code that looks synchronous.

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}
```
