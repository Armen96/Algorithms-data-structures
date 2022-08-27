/**
 * Reciprocal cycles
 *
 * A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:
 *
 * 1/2    =    0.5
 * 1/3    =    0.(3)
 * 1/4    =    0.25
 * 1/5    =    0.2
 * 1/6    =    0.1(6)
 * 1/7    =    0.(142857)
 * 1/8    =    0.125
 * 1/9    =    0.(1)
 * 1/10    =    0.1
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
 *
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

/**
 * Approach custom long division
 */
function solutions() {
    const LIMIT = 1000;
    let number = 2;
    let longestRecurringCycle = 1;

    function customDivision(number, divider, memo, step) {
        if (number === 0) { return step; }

        if (number < divider) {
            number = number * 10;

            while (number < divider) {
                step = step + 1;
                number = number * 10;
            }

            return customDivision(number, divider, memo, step)
        }

        let nextNumber = number % divider;

        if (memo[nextNumber.toString()]) {
            return step;
        }

        memo[nextNumber.toString()] = true;
        step = step + 1;

        return customDivision(nextNumber, divider, memo, step)
    }


    for (let i = 2; i < LIMIT; i++) {
        let cLength = customDivision(1, i, {}, 0);

        if (cLength > longestRecurringCycle) {
            longestRecurringCycle = cLength;
            number = i;
        }
    }

    return {longestRecurringCycle, number};
}


let result = solutions(); // 983
console.log(result);
