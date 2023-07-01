/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    // O(nlogn)
    // if (nums.length === 0) return 0
    // if (nums.length === 1) return 1
    
    // nums.sort((a, b) => a-b) // no decent
    // let maxSequence = 0
    // let prev = nums[0]
    // let tmp = 1

    // nums.forEach((num) => {
    //     if (prev === num) {
    //         ;
    //     } else if (prev+1 === num) {
    //         tmp += 1
    //         prev = num
    //     } else if (maxSequence < tmp){
    //         maxSequence = tmp
    //         tmp = 1
    //         prev = num
    //     } else {
    //         tmp = 1
    //         prev = num
    //     }
    // })

    // return maxSequence < tmp ? tmp : maxSequence

    let maxSequence = 0
    let tmpMaxSequence = 0
    const numsSet = new Set(nums)

    nums.forEach(num => {
        if(numsSet.has(num-1)){
            ;            
        }else{
            while(numsSet.has(num)){
                tmpMaxSequence += 1
                num += 1
            }
        }

        if(tmpMaxSequence > maxSequence) {
            maxSequence = tmpMaxSequence
        }
        tmpMaxSequence = 0
    })
    return maxSequence
};
// @lc code=end

