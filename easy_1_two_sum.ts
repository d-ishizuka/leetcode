/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    // prepare hashtable
    let hashTable: { [key: string]: number; } = {}
    nums.forEach((num, index) => {
        hashTable[num] = index
    })

    // prepare minus target array
    let minusArray: number[]
    minusArray =  nums.map(num => 
        target - num
    )

    let result: number[]

    for(let i = 0; i < nums.length; i++) {
        let originalIndex: number| undefined = hashTable[String(minusArray[i])]
        if (originalIndex && i != originalIndex) {
            result = [i, originalIndex]
        }
    }

    return result
};
// @lc code=end

