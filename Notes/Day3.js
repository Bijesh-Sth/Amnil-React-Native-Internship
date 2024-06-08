// //Array Amalgamation

// //array amalgamation is a process of creating a single array from multiple arrays.
// //The arrays are amalgamated in a column-wise order.
// //eg:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// function amalgamate(arr1, arr2, arr3) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i], arr2[i], arr3[i]);
//   }
//   return result;
// }

// //Q. Find the missing number in an array of consecutive integers.
// //Solution:

// function findMissingNumber(arr) {
//   let n = arr.length + 1;
//   let total = (n * (n + 1)) / 2;
//   let sum = arr.reduce((acc, val) => acc + val, 0);
//   return total - sum;
// }
// console.log("Output for findMissingNumber:");
// console.log(findMissingNumber([1, 2, 3, 4, 6]));

// //Q. Find common elements in three sorted array.
// //Solution:

// function commonElements(arr1, arr2, arr3) {
//   let result = arr1.reduce((acc, val) => {
//     if (arr2.includes(val) && arr3.includes(val)) {
//       acc.push(val);
//     }
//     return acc;
//   }, []);
//   return result;
// }

// console.log("Output for commonElements:");
// console.log(commonElements([1, 2, 5], [2, 3, 5, 6], [3, 5, 6, 7]));
// // console.log(...commonElements([1, 2, 5], [2, 3, 5, 6], [3, 5, 6, 7]));

// //Q. Sort an array in accending order based on age.
// //Solution:

// function sortArray(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }
// console.log("Output for sortArray:");
// let arr = [
//   { name: "Poatao", age: 25 },
//   { name: "Potatoooo", age: 30 },
//   { name: "Potatos", age: 18 },
// ];
// console.log(sortArray(arr));

// //Q. How can you sort an array of objects first by the address property in ascending order and then by the name property (also in ascending order) if the address values are equal?
// //Solution:

// function sortArrayByAddress(arr) {
//   return arr.sort((a, b) => {
//     if (a.address === b.address) {
//       return a.name.localeCompare(b.name); //return a.name > b.name ? 1 : -1;
//     }
//     return a.address.localeCompare(b.address);
//   });
// }
// console.log("Output for sortArrayByAddress:");
// arr = [
//   { name: "Poatao", age: 25, address: "Kathmandu" },
//   { name: "Potatoooo", age: 30, address: "Patan" },
//   { name: "Potatos", age: 18, address: "Kathmandu" },
// ];

// console.log(sortArrayByAddress(arr));

// arr = new Array(100).fill(0).map((_, i) => i + 1);

// const sum1 = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// console.log(sum(1, 2));

// const obj = {
//   name: "Potato",
//   age: 25,
//   getName() {
//     console.log(this.name);
//   },
//   function() {
//     return this.age;
//   },
// };

// obj.getName();
// console.log(obj.function());

//diffrence of this in arrow function and normal function

// function checkArguments() {
//   console.log(arguments);
// }

// const checkArguments = () => {
//     console.log(arguments);
//   };
//   checkArguments(1, 2, 3);

// function test(a) {
//   this.value = a;
// }

// const obj = new test(1);
// console.log(obj);

// const funcOne = (a) => {
//   this.value = a;
// };

// console.log(test.prototype);
// console.log(funcOne.prototype);

// function funct() {
//     console.log(this);
//   }

//   funct(); // window

//   const obj = {
//     bar: function () {
//       console.log(this);
//     },
//   };

//   obj.bar(); // obj

//   const baz = new obj.bar(); // obj.bar {}

// const obj = {
//   bar: function () {
//     console.log(this);
//   },
//   baz: () => {
//     console.log(this);
//   },
// };

// obj.bar(); // obj
// obj.baz(); // window

// const arr = [1, 2, 3, 4, 5];

// const result = arr.map((val) => val * 2);
// console.log(result);

// function sum(numbers, callback) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += callback(numbers[i]);
//     }
//     return total;
// }

// function double(n) {
//     return n * 2;
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(sum(numbers, double));

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i) {
//         console.log(i);
//     }, 1000, i);
// }

// for (var i = 0; i < 3; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j);
//         }, 1000);
//     })(i);
// }

// const arr1 = [1, 2, 3,4];
// const arr2 = [4, 5, 6];
// function findCommonElements(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// }

// console.log(findCommonElements(arr1, arr2));

// function common(arr1,arr2){
//     const set = new Set(arr2);
//     return arr1.filter(item => set.has(item));
// }

// console.log(common(arr1,arr2));

// function map(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// const arr = [1, 2, 3, 4, 5];
// function double(n) {
//   return n * 2;
// }

// console.log(map(arr, double));

//Create a function compose that takes two functions and returns a new function that is the composition of the two.

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
