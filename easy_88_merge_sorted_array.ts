/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1 = m-1
    let index2 = n-1
    let insertIndex = m+n-1

    while(index1>=0 && index2>=0) {
        if (nums1[index1] < nums2[index2]) {
            nums1[insertIndex] = nums2[index2]
            index2 -= 1
            insertIndex -= 1
        } else {
            nums1[insertIndex] = nums1[index1]
            index1 -= 1
            insertIndex -= 1
        }
    }

    while(index2>=0) {
        nums1[insertIndex] = nums2[index2]
        index2 -= 1
        insertIndex -= 1
    }

};
// @lc code=end

