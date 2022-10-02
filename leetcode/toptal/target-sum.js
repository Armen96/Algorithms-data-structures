// let value = '456';
// console.log('title', value);


function solution(A, S) {
    let output = 0;
    let sorted = A.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        let combination = 0;
        let lengthSum = 0;
        for (let j = i; j < sorted.length; j++) {
            combination = combination + sorted[j];
            lengthSum = lengthSum + 1;

            if (combination / lengthSum === S) {
                output = output + 1;
            }

            if (combination / lengthSum > S) {
                break;
            }
        }
    }

    if (output > 1000000000) {
        return 1000000000;
    }

    return output;
}


let A = [];

for (let i = 0; i < 1000000; i++) {
    A.push(i);
}

let S = 10;
console.time();
let result = solution(A,S);
console.timeEnd();

console.log('result', result);
