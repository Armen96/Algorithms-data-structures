/**
 * Generator
 * @type {string[]}
 */
const characters = ['apple', 'banana', 'pineapple'];

function* take() {
    yield "a";
    yield "b";

    return false;
}

let response = take();
console.log(response.next());
console.log(response.next());
console.log(response.next());
console.log(response.next());
console.log(response.next());


/**
 * Iterator
 */
const obj = {
    name: "Caleb",
    age: 29,
    gender: 'male'
}

// Error
// for (const objElement of obj) {
//
// }

let count = -1;
const SW8 = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                count++;

                switch (count) {
                    case 0: {
                        return { value: 'start', done: false }
                    }

                    case 1: {
                        return { value: 'end', done: false }
                    }

                    case 2: {
                        return { value: undefined, done: true }
                    }

                    default: {
                        return { value: undefined, done: true }
                    }
                }
            }
        }
    }
}

for (const objElement of SW8) {
    console.log(objElement);
}
