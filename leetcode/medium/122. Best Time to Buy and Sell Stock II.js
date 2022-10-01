/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 *
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 * Total profit is 4 + 3 = 7.
 */

let maxProfit = function(prices) {
    let maxProfitValue = 0;
    let low = -1;
    let high = -1;

    if (prices.length === 1) { return  0;}
    if (prices.length === 2) {
        return prices[1] - prices[0] > 0 ? prices[1] - prices[0]: 0;
    }

    for (let i = 0; i < prices.length - 1 ; i++) {
        let status = false;
        if (prices[i] < prices[i + 1]) {
            low = low === -1 ? prices[i] : low;
            high = prices[i + 1];
            status = true;
        }

        if (status && prices[i + 1] >= prices[i + 2]) {
            maxProfitValue += high - low;
            low = -1;
            high = 0;
        } else if (status && i + 1 === prices.length - 1) {
            maxProfitValue += prices[i + 1] - low;
            break;
        } else if (status && i + 2 === prices.length - 1) {
            maxProfitValue += prices[i + 2] - low;
            break;
        }
    }

    return maxProfitValue;
};

let input = [5,2,3,2,6,6,2,9,1,0,7,4,5,0];

let result = maxProfit(input);
console.log(result);
