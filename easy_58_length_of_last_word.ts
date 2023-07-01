/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    const sList = s.split(' ').reverse()

    let answer = 0
    let flag = true
    let index = 0
    while (flag) {
        if (sList[index] == "") {
            index += 1
        } else {
            flag = false
            answer = sList[index].length
        }
    }
    return answer
};
// @lc code=end

