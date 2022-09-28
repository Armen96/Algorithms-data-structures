/**
 * Initial an array [2,3];
 * Min operation number to reach the middle value of sum
 *
 * Sum is 2.5
 * 3/2 1.5 -> 3.5
 * 2/2 1 -> 2.5 2
 */


let solution = (array) => {
    let count = 0;
    let half = array.reduce((a, b) => a + b, 0) / 2;
    let currentHalf = half * 2;


    while (currentHalf > half) {
        let max = Math.max(...array);
        let index = array.indexOf(max);
        array[index] = max/2;

        currentHalf = currentHalf - array[index];
        count++;
    }

    return count;
}

let result = solution([5,19,8,1]);
console.log(result);
