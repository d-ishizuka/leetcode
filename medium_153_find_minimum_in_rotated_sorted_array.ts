/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
    let left = 0
    let right = nums.length - 1
    let answer = nums[left]
    while(left<right){
        const mid = Math.floor((left+right)/2)
        if(nums[left]<nums[mid] && nums[mid]<nums[right]){
            answer = answer > nums[left] ? nums[left] : answer
            right = mid
        }else if(nums[left]<nums[mid] && nums[mid] > nums[right]) {
            answer = answer > nums[right] ? nums[right] : answer
            left = mid > left ? mid : mid + 1
        }else if(nums[left]>nums[mid] && nums[mid] < nums[right]){
            answer = answer > nums[mid] ? nums[mid] : answer
            right = mid
        }else{
            answer = answer > nums[right] ? nums[right] : answer
            left = right
        }
    }

    return answer
};
// @lc code=end

