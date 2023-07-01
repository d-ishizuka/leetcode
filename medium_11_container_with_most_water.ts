/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    let tmpArea = 0

    while(left < right) {
        if (height[left] < height[right]) {
            tmpArea = height[left]*(right-left)
            left += 1
        }else if(height[left] > height[right]) {
            tmpArea = height[right]*(right-left)
            right -= 1
        }else{
            tmpArea = height[left]*(right-left)
            right -= 1
            left += 1
        }

        if(tmpArea > maxArea){
            maxArea = tmpArea
        }
    }
    return maxArea
    };
    
// @lc code=end

