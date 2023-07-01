/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let min: number
    let answer = 0
    prices.forEach(price => {
        if (price < min || min === undefined) {
            min = price
        }

        let diff = price - min
        if (diff > answer) {
            answer = diff
        }
    })

    return answer
};
// @lc code=end

