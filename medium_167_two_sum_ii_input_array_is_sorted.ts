/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1

    function binarySearch(numbers: number[], target: number): number | null {
        while(left <= right) {
            let center = Math.floor((left+right) / 2)
            if (numbers[center] === target) {
                return center
            } else if(numbers[center] < target) {
                left = center+1
            } else {
                right = center-1
            }
        }

        return null
    }


    let answer1 = -1
    let answer2 = null
    while(!answer2){
        answer1 += 1
        let difference = target - numbers[answer1]
        answer2 = binarySearch(numbers, difference)
    }

    return [answer1+1, answer2+1]
        
};
// @lc code=end

