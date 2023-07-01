/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
    let left = 0
    let right = Math.max(...piles)
    let answer = right
    let mid: number

    function canEatInHour(speed: number, h: number):boolean {
        let spentHour = 0
        piles.forEach(num => {
            spentHour += Math.ceil(num/speed)
        })
        return spentHour <= h
    }

    while(left < right){
        mid = Math.floor((left+right)/2)
        if(canEatInHour(mid, h)){
            answer = mid
            right = mid
        }else{
            left = mid+1
        }
    }
    return answer
};
// @lc code=end

