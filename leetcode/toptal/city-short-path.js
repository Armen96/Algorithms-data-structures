// let value = '456';
// console.log('title', value);


function solution(A) {
    let shortestPath = Number.MAX_SAFE_INTEGER;
    let uniquePlaces = [];

    for (let i = 0; i < A.length; i++) {
        if (uniquePlaces.indexOf(A[i]) === -1) {
            uniquePlaces.push(A[i]);
        }
    }

    for (let i = 0; i < A.length; i++) {
        let pathLength = [];
        for (let j = i; j < A.length; j++) {
            if (pathLength.indexOf(A[j]) === -1) {
                pathLength.push(A[j]);
            }

            if (pathLength.length === uniquePlaces.length) {
                let path = j - i + 1;

                if (shortestPath > path) {
                    console.log(' - ', i, j);
                    shortestPath = path;
                }
                break;
            }
        }
    }

    return shortestPath;
}

console.time();
let A = [
    7,3,3,7,3,1,3,4,1,
    7,3,3,4,7,3,1,3,4,1,
    7,3,3,4,7,3,1,3,4,1,
    7,3,3,4,7,3,1,3,4,1,
    7,3,3,4,7,3,1,3,4,1,
    7,3,3,4,7,3,1,3,4,1
];
let result = solution(A);
console.timeEnd();

console.log('result', result);
