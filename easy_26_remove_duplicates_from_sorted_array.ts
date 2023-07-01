/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let lastUpdatedIndex = 0
    let lastUpdatedNumber = nums[0]

    nums.forEach(num => {
        if(num != lastUpdatedNumber){
            lastUpdatedNumber = num
            lastUpdatedIndex += 1
            nums[lastUpdatedIndex] = lastUpdatedNumber
        }
        }   
    )
    return lastUpdatedIndex + 1
};
// @lc code=end

