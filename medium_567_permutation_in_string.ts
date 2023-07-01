/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const s2List = s2.split('')
    let answer = false

    let left = 0
    let right = 0

    let s2hash: { [name: string]: number } = {}

    s1.split('').forEach(s => {
        s2hash[s] = s2hash[s] <= -1? s2hash[s]-1 : -1
    })


    // 初期値
    s2hash[s2List[left]] = s2hash[s2List[left]] === undefined? 1 : s2hash[s2List[left]] + 1

    while(right <= s2.length - 1){
        while(right - left < s1.length - 1){
            right += 1
            s2hash[s2List[right]] = s2hash[s2List[right]] === undefined? 1 : s2hash[s2List[right]]+1
        }
    
    
        let sumValue = 0
        for(const key in s2hash) {
            const value = s2hash[key]
            sumValue += Math.abs(value)
        }
        if(sumValue === 0){
            answer = true
        }else{
            sumValue = 0
        }
    
        s2hash[s2List[left]] -= 1
        left += 1
        right += 1
        s2hash[s2List[right]] = s2hash[s2List[right]] === undefined? 1 : s2hash[s2List[right]]+1
    }

    return answer
};
// @lc code=end

