/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let queue: Array<string> = []

    const bracketPairs: {[key: string]: string} = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    const startBrackets = [ "(", "[", "{" ]

    const sList = s.split('')
    let answer = true

    sList.forEach(sElemnt => {
        if (startBrackets.includes(sElemnt)) {
            queue.push(bracketPairs[sElemnt])
        } else {
            if (sElemnt != queue.pop()) {
                answer = false
            } 
        }
    })

    if (queue.length > 0) { answer = false }

    return answer
    };
// @lc code=end

