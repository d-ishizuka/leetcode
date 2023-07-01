/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const hash: {[key: string]: string[];} = {};

    strs.forEach(s => {
        let alpArray = new Array(26).fill(0)
        s.split("").forEach(e => {
            alpArray[e.charCodeAt(0) - 97] += 1
        })

        let key = alpArray.toString()
        if (hash.hasOwnProperty(key)){
            hash[key].push(s)
        }else{
            hash[key] = [s]
        }
    })

    return Object.values(hash)
};
// @lc code=end

