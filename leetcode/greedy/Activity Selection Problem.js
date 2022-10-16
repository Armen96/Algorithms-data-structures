/**
 * You are given n activities with their start and finish times.
 * Select the maximum number of activities that can be performed by a single person,
 * assuming that a person can only work on a single activity at a time.
 *
 * Examples:
 *
 * Input: start[]  =  {10, 12, 20}, finish[] =  {20, 25, 30}
 * Output: 0 2
 * Explanation: A person can perform at most two activities. The
 * maximum set of activities that can be executed
 * is {0, 2} [ These are indexes in start[] and finish[] ]
 *
 * Input: start[]  =  {1, 3, 0, 5, 8, 5}, finish[] =  {2, 4, 6, 7, 9, 9};
 * Output: 0 1 3 4
 * Explanation: A person can perform at most four activities. The
 * maximum set of activities that can be executed
 * is {0, 1, 3, 4} [ These are indexes in start[] and finish[]
 */

// NOT COMPLETED
let solution = function (start, finish) {
    let count = 1;
    let selected = [];
    let hashMap = {};
    for (let i = 0; i < finish.length; i++) {
        hashMap[finish[i]] = hashMap[finish[i]] ? Math.max(hashMap[finish[i]], start[i]) : start[i];
    }

    let sortedFinish = finish.sort((a, b) => a - b);

    selected.push(hashMap[sortedFinish[1]]);
    for (let i = 1; i < sortedFinish.length; i++) {
        if (sortedFinish[i] > sortedFinish[i -1] && selected[selected.length - 1] >= sortedFinish[i -1]) {
            selected.push(hashMap[sortedFinish[i + 1]]);
            count = count + 1;
        }
    }
    return count;
}

let result = solution([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9])
console.log(result);
