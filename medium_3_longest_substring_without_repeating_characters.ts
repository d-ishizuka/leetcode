/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const s_list = s.split('')

    let s_set = new Set<string>()
    let answer = 0
    let tmp_answer = 0

    s_list.forEach(s => {
        if(s_set.has(s)){
            s_set = new Set<string>()
            s_set.add(s)
            answer = answer < tmp_answer ? tmp_answer : answer
            tmp_answer = 1
        }else{
            s_set.add(s)
            tmp_answer += 1
            answer = answer < tmp_answer ? tmp_answer : answer
        }
    })

    return answer
};
// @lc code=end

