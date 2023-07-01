/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let answer = 0
    function divideTwoArray(nums: number[], target: number): number[]|null {
        if (nums.length == 1) {
            if (target <= nums[0]) {
                return null
            }else{
                answer += 1
                return null
            }
        }
    
        let boundaryIndex = Math.floor(nums.length/2) - 1
        if (target < nums[boundaryIndex]) {
            return nums.slice(0, boundaryIndex+1)
        } else if (target == nums[boundaryIndex]) {
            answer += boundaryIndex
            return null
        } else {
            answer += boundaryIndex + 1
            return nums.slice(boundaryIndex+1, nums.length+1)
        }
    }
    
    let dividedArray: number[] | null = nums
    while (dividedArray) {
        dividedArray = divideTwoArray(dividedArray, target)
    }
    return answer
};
// @lc code=end

