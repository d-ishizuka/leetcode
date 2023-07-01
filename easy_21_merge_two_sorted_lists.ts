/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // if (list1 === null && list2 != null) {
    //     return list2
    // }

    // if (list1 != null && list2 === null) {
    //     return list1
    // }

    // if (list1.val <= list2.val) {
    //     list1.next = mergeTwoLists(list1.next, list2)
    //     return list1
    // } else {
    //     list2.next = mergeTwoLists(list1, list2.next)
    //     return list2
    // }
    if (list1 === null) {
        return list2
    }

    if (list2 === null) {
        return list1
    }

    let ptr: ListNode = list1
    if (list1.val > list2.val) {
        ptr = list2
        list2 = list2.next
    } else {
        list1 = list1.next
    }

    let currentListNode: ListNode = ptr

    // till one of the list doesn't reaches NULL
    while (list1 && list2) {
        if (list1.val < list2.val) {
            currentListNode.next = list1
            list1 = list1.next
        } else {
            currentListNode.next = list2
            list2 = list2.next
        }
        currentListNode = currentListNode.next
    }

    if (!list1) {
        currentListNode.next = list2
    } else {
        currentListNode.next = list1
    }

    return ptr
};
// @lc code=end

