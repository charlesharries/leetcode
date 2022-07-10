/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            profit = Math.max(profit, prices[j] - prices[i]);
        }
    }

    return profit;
};

const input = [7,1,5,3,6,4];
console.log(maxProfit(input));