/**
 * 121. Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */


let maxProfit = function(prices) {
    let maxProfitValue = 0;
    let min = 0;
    let max = 0;
    let memo = {};

    for (let i = prices.length - 1; i > 0 ; i--) {
        if (prices[i] < max || memo[prices[i]]) {
            continue;
        }

        for (let j = i - 1; j >= 0 ; j--) {
            if (maxProfitValue < prices[i] - prices[j]) {
                min = prices[j];
                max = prices[i];
                maxProfitValue = prices[i] - prices[j];
            }
        }
        memo[prices[i]] = true;
    }

    return maxProfitValue;
};


let maxProfitV2 = function(prices) {
    let maxProfitValue = 0;
    let min = Number.MAX_VALUE;

    for (let i = 0; i <= prices.length - 1 ; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            if (maxProfitValue < prices[i] - min) {
                maxProfitValue = prices[i] - min;
            }
        }


    }

    return maxProfitValue;
};

let input = [7,1,5,3,6,4];

let result = maxProfitV2(input);
console.log(result);
