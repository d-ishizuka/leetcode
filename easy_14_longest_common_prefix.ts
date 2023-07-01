/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {

    function twoLcp(str1: string, str2: string): string {
        let result: string = ''
        
        let str1_array = str1.split('')
        let str2_array = str2.split('')
    
        const minLen = Math.min(str1_array.length, str2_array.length)
    
        for(let i = 0; i < minLen; i++) {
            if (str1_array[i] === str2_array[i]) {
                result += str1_array[i]
            } else {
                break
            }
        }
        return result
    };

    let twoLcpResult = strs[0]
    for (let i = 1; i < strs.length; i++) {
        twoLcpResult = twoLcp(twoLcpResult, strs[i])
        if (twoLcpResult === ''){
            break
        }
    }
    return twoLcpResult
};
// @lc code=end

