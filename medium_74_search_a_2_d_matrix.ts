/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    // let left = 0
    // let right = matrix.length * matrix[0].length - 1
    // let mid: number
    // let midValue: number
    // while(left <= right){
    //     mid = Math.floor((left+right)/2)
    //     midValue = matrix[Math.floor(mid/matrix[0].length)][mid%matrix[0].length]
    //     if(midValue === target){
    //         return true
    //     }else if(midValue < target){
    //         left = mid + 1
    //     }else{
    //         right = mid - 1
    //     }
    // }
    // return false
    let answer = false

    function isTargetInNums(nums: number[], target: number):void{
        let left = 0
        let right = nums.length -1
        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if(nums[mid]===target){
                answer = true
                left = right+1
            }else if(nums[mid]<target){
                left = mid+1
            }else{
                right = mid-1
            }
        }
    }

    function getIndex(matrix: number[][], target: number): number{
        let left = 0
        let right = matrix.length -1
        let lastIndex = matrix[0].length - 1

        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if(matrix[mid][lastIndex] === target){
                left = mid
                right = left - 1
            }else if(matrix[mid][lastIndex] < target){
                left = mid + 1
            }else{
                right = mid -1
            }
        }

        return left
    }

    const index = getIndex(matrix, target)
    isTargetInNums(matrix[index], target)
    return answer
};
// @lc code=end

