/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = []
    answer[0] = 1

    // 左から自分の直前の要素までの積を計算する
    for (let i=1; i<nums.length; i++) {
        answer[i] = answer[i-1] * nums[i-1]
    }

    // 右から自分の直前の要素までの積をさらにかける
    let right = 1
    for (let i=nums.length-1; i>=0; i--) {
        answer[i] *= right
        right *= nums[i]
    }
    return answer
};
// @lc code=end

