/**
 * Amicable numbers
 *
 */

const LIMIT = 10000;

function solution() {
    const amicableNumberList = [];
    // const pair = [];

    function numberDivisionsSum(number) {
        let divisionsSum = 1;
        for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
            if (number %i === 0) {
                divisionsSum = divisionsSum + i;
                divisionsSum = divisionsSum + number/i;
            }
        }

        return divisionsSum;
    }


    for (let i = 190; i < LIMIT; i++) {
        const number = numberDivisionsSum(i);

        if (i === numberDivisionsSum(number) && i !== number) {
            amicableNumberList.push(i);
            amicableNumberList.push(number);

            // pair.push({a: i, b: number});
        }
    }

    return amicableNumberList.reduce((a, b) => a + b, 0) / 2
}

console.log(solution()); // 31626
