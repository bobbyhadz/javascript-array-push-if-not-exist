// EXAMPLE 1 - Array.push() Element if does not exist in JavaScript

// ✅ With primitives
const arr = ['a', 'b', 'c', 'd'];
const value1 = 'e';

if (!arr.includes(value1)) {
  arr.push(value1);
}

// 👇️ [ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using Array.findIndex()

// // ✅ With Objects
// const arr = [{id: 1}, {id: 2}];
// const value = {id: 3};

// const index = arr.findIndex(object => object.id === value.id);

// if (index === -1) {
//   arr.push(value);
// }

// // 👇️ [ { id: 1 }, { id: 2 }, { id: 3 } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Array.push() Element if does not exist using `findIndex`

// const arr = [{id: 1}, {id: 2}];
// const value = {id: 3};

// const index = arr.findIndex(object => object.id === value.id);

// if (index === -1) {
//   arr.push(value);
// }

// // 👇️ [ { id: 1 }, { id: 2 }, { id: 3 } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Array.push() Element if does not exist using Array.indexOf()

// const arr1 = ['a', 'b', 'c', 'd'];
// const value1 = 'e';

// if (arr1.indexOf(value1) === -1) {
//   arr1.push(value1);
// }

// console.log(arr1); // 👉️ ['a','b','c','d','e']

// ------------------------------------------------------------------

// // EXAMPLE 5 - Array.push() Element if does not exist using Array.find()

// const arr = [{id: 1}, {id: 2}];
// const value = {id: 3};

// const object = arr.find(object => {
//   return object.id === value.id;
// });

// console.log(object); // 👉️ undefined

// if (object === undefined) {
//   arr.push(value);
// }

// // 👇️ [ { id: 1 }, { id: 2 }, { id: 3 } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Create an Array if it doesn't exist in JavaScript

// if (typeof arr === 'undefined' || !Array.isArray(arr)) {
//   var arr = [];
// }

// console.log(arr); // 👉️ [];
