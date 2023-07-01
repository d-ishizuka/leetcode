/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let lastUpdatedIndex = 0
    nums.forEach(num => {
        if (num != val) {
            nums[lastUpdatedIndex] = num
            lastUpdatedIndex += 1
        }
    })
    return lastUpdatedIndex
};
// @lc code=end

