/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
    let left = 0
    let right = 1
    let waterArea = 0

    while(right <= height.length -1 ) {
        if(height[left] > height[right]){
            right += 1
        }else{
            let w = right - left - 1
            let h = height[left]
            let barArea = 0
            for (let i=left+1; i<right; i++){
                barArea += height[i]
            }
            waterArea += w * h - barArea
            left = right
            right += 1
        }
    }

    const leftEnd = left

    left = height.length - 2
    right = height.length - 1

    while(leftEnd <= left) {
        if(height[left] < height[right]){
            left -= 1
        }else if(height[left] >= height[right]){
            let w = right - left - 1
            let h = height[right]
            let barArea = 0
            for (let i=left+1; i<right; i++){
                barArea += height[i]
            }
            waterArea += w * h - barArea
            right = left
            left -= 1
        }
    }

    return waterArea
};
// @lc code=end

