/**
 * 746. Min Cost Climbing Stairs
 *
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: You will start at index 0.
 * - Pay 1 and climb two steps to reach index 2.
 * - Pay 1 and climb two steps to reach index 4.
 * - Pay 1 and climb two steps to reach index 6.
 * - Pay 1 and climb one step to reach index 7.
 * - Pay 1 and climb two steps to reach index 9.
 * - Pay 1 and climb one step to reach the top.
 * The total cost is 6.
 */

let minCostClimbingStairs = function(cost) {
   if (cost.length === 2) {
       return Math.min(cost[0], cost[1]);
   }

   cost.push(0);
   cost.push(0);

    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] = Math.min(cost[i] + cost[i + 1], cost[i] + cost[i + 2]);
    }

    return Math.min(cost[0], cost[1]);
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// let cost = [10, 15, 20];
// let cost = [10, 15, 20, 0];
console.log(minCostClimbingStairs(cost));
