/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
    const sList = s.split('')
    let l = 0
    let count = {}
    let maxf = 0
    let res = 0

    for(let r=0; r<=s.length-1; r++){
        count[sList[r]] = count[sList[r]] >= 1? count[sList[r]]+1 : 1
        maxf = Math.max(maxf, count[sList[r]])

        while(r - l + 1 - maxf > k){
            count[sList[l]] -= 1
            l += 1
        }

        res = Math.max(res, r-l+1)
    }

    return res
};
// @lc code=end

