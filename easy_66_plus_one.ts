/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let flag = true
    let index = 1
    while(flag) {
        if (digits[digits.length - index] != 9) {
            digits[digits.length - index] += 1
            flag = false
        } else {
            digits[digits.length - index] = 0
            index += 1
        }
    }

    if (digits[0] == 0) {
        digits.unshift(1)
    }
    return digits
};
// @lc code=end

