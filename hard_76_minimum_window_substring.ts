/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    const sCount = Array(26).fill(0);
    const tCount = Array(26).fill(0);

    for (let i = 0; i < t.length; i++) {
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        tCount[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (tCount[i]!=0 && sCount[i] >= tCount[i]) {
            matches += 1;
        }
    }

    let l = 0
    for(let r = t.length, r < s.length; )
};
// @lc code=end

