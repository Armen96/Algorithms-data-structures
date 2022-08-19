/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

console.time()
function solution() {
    let a = 0;
    let b = 0;
    let c = 0;
    let s = 1000;
    let value = 1;

    parserFor:
        for (a = 0; a < s / 3; a++) {
            for (b = a; b < s / 2; b++) {
                c = s - a - b;

                if (a * a + b * b === c * c) {
                    value = a * b * c;

                    break parserFor;
                }
            }
        }

    return value;
}


console.log(solution()); // 31875000
console.timeEnd(); // 2



