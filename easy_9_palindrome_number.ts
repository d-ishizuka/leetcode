/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    // 32 * log10(2) = 9.63 < 10

    const is_negative: boolean = x < 0;
    if (is_negative) {
        return false
    }

    const number_list: Array<string> = x.toString().split('')
    
    // digit : odd or even
    const digit: number = number_list.length

    let result: boolean = true
    const loop_count: number = (digit%2 === 0)? digit/2 : (digit-1)/2
    
    for (let i=0; i < loop_count; i++) {
        let left_num: string = number_list[i]
        let right_num: string | undefined = number_list.pop()
        if (left_num != right_num){
            result = false
        }
    }
    
    return result
};
// @lc code=end

