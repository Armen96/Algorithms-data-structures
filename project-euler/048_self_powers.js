/**
 * Self powers
 */

function solution() {
    const LIMIT = 1000;
    let sum = BigInt(0);

    for (let i = 1; i <= LIMIT; i++) {
        let value = BigInt(i);

        for (let j = 0; j < i - 1; j++) {
            value *= BigInt(i);
        }


        sum += value;
    }

    let result = sum.toString();
    return result.substring(result.length - 10, result.length);
}

let result = solution();
console.log(result); // 9110846700
