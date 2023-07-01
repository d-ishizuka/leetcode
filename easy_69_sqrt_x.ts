/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    if (x==0) { return 0 }

    function findStart(x: number): number {
        const digit = x.toString().length
        if (digit % 2 == 0) {
            return 3 * 10**((digit - 2)/2)
        } else {
            return 10**((digit - 1)/2)
        }
    }

    let start = findStart(x) - 1
    let flag = true

    while (flag) {
        start += 1
        flag = !((start**2 <= x) && (x < (start+1)**2))
    }

    return start
};
// @lc code=end

