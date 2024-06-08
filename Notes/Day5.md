# Day 5

## Composed Method in JS

**Definition**:

- The compose function takes in two or more functions and returns a new function that applies these functions in right-to-left order
- The compose function is a higher-order function that takes in functions as arguments and returns a new function

**Example**:

```javascript
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function addOne(a) {
  return a + 1;
}

function logA(a) {
  console.log("Value is", a);
  return a;
}

const addOneAndLog = compose(addOne, logA);
console.log(addOneAndLog(5));

// Output:
// Value is 5
// 6
```

## debouncing in JS

**Definition**:

- Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that a task will only fire once after a given time has passed
- In simpler terms, it controls how often a function is called.
- It ensures that a function is not called again until a certain amount of time has passed since the last time it was called.

## Throttling in JS

**Definition**:

- Throttling sometimes also called throttle function is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.
- Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
- Throttling is used to ensure that the function is not called more than once in a given time frame.

## Difference between Debouncing and Throttling

| Parameter  | Debouncing                                                                                                                                                                     | Throttling                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition | Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that a task will only fire once after a given time has passed | Throttling is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately |
| Usage      | Debouncing is used to control how often a function is called                                                                                                                   | Throttling is used to ensure that the function is not called more than once in a given time frame                                                                                      |
| Example    | A search bar that fetches data from the server when the user stops typing                                                                                                      | A button that can be clicked only once in a given time frame                                                                                                                           |

## partial application in JS

**Definition**:

- Partial application is a technique in which a function is created by pre-filling some of the arguments of the original function.
- Partial application is especially useful when you have a function that takes multiple arguments, but you only want to fix some of them.
- By fixing some arguments, you can create a new function that takes fewer arguments, making it easier to reuse and compose with other functions.

**Example**:

```javascript
function add(a, b, c) {
  return a + b + c;
}

const add5 = add.bind(null, 5);
console.log(add5(10, 5));

// Output:
// 20
```

## how can you create a function that can be called only once

**Definition**:

- You can create a function that can be called only once by using a closure.
- The idea is to create a closure that keeps track of whether the function has been called before or not.
- If the function has not been called before, it calls the original function and sets a flag to indicate that the function has been called.
- If the function has been called before, it does nothing.

**Example**:

```javascript
function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

const add = (a, b) => a + b;
const addOnce = once(add);
console.log(addOnce(5, 10));
console.log(addOnce(5, 10));

// Output:
// 15
// undefined
```

## cache techinques in JS

- Caching is a technique used to store the results of expensive operations so that they can be reused later.
- Caching can help improve the performance of your application by reducing the time it takes to compute the same result multiple times.
- There are several caching techniques you can use in JavaScript, including memoization, local storage, and session storage.

## memoization in JS

**Definition**:

- Memoization is a technique used to store the results of expensive function calls so that they can be reused later.
- Memoization is a form of caching that is used to speed up the execution of functions by storing the results of function calls and returning the cached result when the same inputs are provided again.
- Memoization is especially useful when you have a function that takes a long time to compute and is called with the same inputs multiple times.

**Example**:

```javascript
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const add = (a, b) => {
  console.log("Adding", a, b);
  return a + b;
};

const memoizedAdd = memoize(add);
console.log(memoizedAdd(5, 10));
console.log(memoizedAdd(5, 10));

// Output:
// Adding 5 10
// 15

// 15
```

## Local Storage in JS

**Definition**:

- Local storage is a web storage API that allows you to store key-value pairs in the browser.
- Local storage is persistent, meaning that the data you store in local storage will be available even after the browser is closed and reopened.
- Local storage is limited to 5MB per domain, and the data stored in local storage is not sent to the server when making HTTP requests.

**Example**:

```javascript
// Set data in local storage
localStorage.setItem("name", "Potato");

// Get data from local storage
const name = localStorage.getItem("name");
console.log(name);

// Output:
// Potato
```
