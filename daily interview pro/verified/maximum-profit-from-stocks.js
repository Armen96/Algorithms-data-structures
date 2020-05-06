/**
 *
 This problem was recently asked by Apple:

 You are given an array. Each element represents the price of a stock on that particular day.
 Calculate and return the maximum profit you can make from buying and selling that stock only once.

 For example: [9, 11, 8, 5, 7, 10]

 Here, the optimal trade is to buy when the price is 5, and sell when it is 10,
 so the return value should be 5 (profit = 10 - 5 = 5).
 */


let arr = [9, 11, 8, 5, 7, 9];

function buyAndSell(arr) {

    let currentMaxProfit = 0;
    let globalMaxProfit = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        let profits = [];

        for ( let j = i; j < arr.length; j++ ) {
            profits.push(arr[j] - arr[i]);
        }

        currentMaxProfit = Math.max(...profits);

        if( currentMaxProfit > globalMaxProfit ) {
            globalMaxProfit = currentMaxProfit;
        }
    }

    return globalMaxProfit;
}


console.log(buyAndSell(arr));
