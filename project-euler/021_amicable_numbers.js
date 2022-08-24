/**
 * Amicable numbers
 *
 * (M, N)
 * m1 + m2 + ... +mk = N
 * n1 + n2 +... +ni = M
  */

const LIMIT = 10000;

function solution() {
    const amicableNumberList = [];
    // const pair = [];

    function numberDivisionsSum(number) {
        let divisionsSum = 1;
        for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number %i === 0) {
                divisionsSum = divisionsSum + i;

                if (i !== number / i) {
                    divisionsSum = divisionsSum + number / i;
                }
            }
        }

        return divisionsSum;
    }


    for (let i = 1; i < LIMIT; i++) {
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
