/**
 * __proto__ is always an Object
 *
 * All objects have __proto__ and it's equal to the prototype of class or function*
 */

const number = 5; // number.__proto__ => Number
const string = "hi"; // number.__proto__ => String

let obj1 = {};
let obj2 = {};
// obj1.__proto__ === obj2.__proto__

/**
 * prototype only has function and clas
 * Note* arrow function does not have prototype
 */

let men = {}; // new Object
// so men.__proto__ === Object.prototype
// men does not have .prototype because it's not a Function / Class
