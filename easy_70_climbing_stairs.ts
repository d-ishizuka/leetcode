/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    let maxTwoStep = Math.floor(n / 2)
    let answer = 0

    function permutation(n:number, r:number) {
        let res = 1
        for(let i = 0; i < r; i++) {
            res *= n - i;
        }
        return res;
    }

    function combination(n: number, r: number) {
        return permutation(n, r) / permutation(r, r);
    }

    for (let i = 0; i <= maxTwoStep; i++) {
        let twoSteps = i
        let oneSteps = n - 2*twoSteps
        answer += combination(oneSteps + twoSteps, oneSteps)
    }
    return answer
};
// @lc code=end

