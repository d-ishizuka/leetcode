/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    return (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2)
    // let aNum = Number(a)
    // let bNum = Number(b)

    // let sumNum = aNum + bNum
    // let strNum = sumNum.toString()
    // let numList = strNum.split('')
    // let flag = false
    // let tmpList: string[] = []
    // let answer = ""

    // for (let i=numList.length-1; i >= 0.; i--) {
    //     if (numList[i] == "2" || numList[i] == "11" ) {
    //         tmpList.unshift("0")
    //         if (i==0) {
    //             flag = true
    //         } else {
    //             numList[i-1] += 1
    //         }
    //     } else if (numList[i] == "0"){
    //         tmpList.unshift("0")
    //     } else if (numList[i] == "21") {
    //         tmpList.unshift("1")
    //         if (i==0) {
    //             flag = true
    //         } else {
    //             numList[i-1] += 1
    //         }
    //     } else {
    //         tmpList.unshift("1")
    //     }
    // }

    // if (flag) { tmpList.unshift("1") }

    // for (let i = 0; i < tmpList.length; i++) {
    //     answer += tmpList[i]
    // }
    // return answer
};
// @lc code=end

