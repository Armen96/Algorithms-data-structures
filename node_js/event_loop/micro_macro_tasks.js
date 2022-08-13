// Example 1
// setTimeout(() => alert("timeout")); // Macro task 3
//
// Promise.resolve().then(() => alert("promise")); // Micro task 2
//
// alert("code"); // 1


// Example 2

// console.log(1);
//
// setTimeout(() => console.log(2)); // Macro task: register 1
//
// Promise.resolve().then(() => console.log(3)); // Micro task: register 1
//
// Promise.resolve().then(() => setTimeout(() => console.log(4))); // Micro task: register 2 -> // Macro task: register 3
//
// // Promise.resolve().then(() => Promise.resolve().then(() => console.log(4))); before setTimeOuts*
//
// Promise.resolve().then(() => console.log(5)); // Micro task: register 3
//
// setTimeout(() => console.log(6)); // Macro task: register 2
//
// console.log(7);


// OUTPUT -> 1 7 3 5 2 6 4

// Example 3
// setTimeout(function () {
//     console.log(1);
// });
//
// new Promise(function(resolve,reject){
//     console.log(2)
//     resolve(3)
// }).then(function(val){
//     console.log(val);
// })
// Output 2 3 1

// Example 4
// (function test() {
//     setTimeout(function() {console.log(4)}, 0);
//     new Promise(function executor(resolve) {
//         console.log(1);
//         for( var i = 0 ; i < 10000 ; i++ ) {
//             if (i === 9999)  resolve();
//         }
//         console.log(2);
//     }).then(function() {
//         console.log(5);
//     });
//     console.log(3); }
// ) ()
// Example 5
// Promise.resolve().then(() => console.log(4));
//
// process.nextTick(() => {
//     console.log(2);
// })
//
// console.log(1);

// console.log(3);
// Output 1 3 2 4


// Example 6
// setImmediate(() =>  { // Macro task 1
//     console.log(1)
//     Promise.resolve().then(() =>  console.log(2)) // Micro task
//     process.nextTick(() =>  console.log(3)) // Micro task
// });
//
// setImmediate(() =>  { // Macro task 2
//     console.log(4)
//     process.nextTick(() =>  console.log(5)) // Micro task
// });
//
// setImmediate(() =>  console.log(6));
// setImmediate(() => console.log(7));
// Output 1 3 2 4 5 6 7


// Example 7
// timeout_vs_immediate.js
// const fs = require('fs');
//
// process.nextTick(() =>  console.log(3))
//
// fs.readFile('./file.txt', () => {
//     setTimeout(() => { // second
//         console.log('timeout');
//     }, 0);
//     setImmediate(() => { // first
//         console.log('immediate');
//     });
//
//     process.nextTick(() =>  console.log(33))
//
//     // first
// });
