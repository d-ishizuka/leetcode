/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const subLookup: {[key: string]: string} = {
        "IV" : "IIII",
        "IX" : "IIIIIIIII",
        "XL" : "XXXX",
        "XC" : "XXXXXXXXX",
        "CD" : "CCCC",
        "CM" : "CCCCCCCCC"
    }
    
    const valLookup: {[key: string]: number} = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    const testString = s 
    let subTestString = testString
    
    Object.keys(subLookup).forEach(key => {
        subTestString = subTestString.replace(key, subLookup[key])
    })
    
    let subTestStringArray: Array<string> = subTestString.split('')
    let answer = 0
    subTestStringArray.forEach(element => {
        answer += valLookup[element]
    })
    
    return answer
};
// @lc code=end

