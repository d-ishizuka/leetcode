/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    let numberSet = new Set(nums)
    let hashTable = {}
    let result = []

    nums.forEach(num => {
        if (!hashTable[num]) {
            hashTable[num] = 1
        } else {
            hashTable[num] += 1
        }
    })

    

};
// @lc code=end

