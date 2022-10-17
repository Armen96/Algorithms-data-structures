/**
 * 206. Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let reverseList = function(head) {
    let array = [];
    let state = true;
    let list = head;
    while (state) {
        if (list) {
            array.push(list.val);
            if (list.next === null) {
                state = false;
            } else {
                list = list.next;
            }
        } else {
            state = false;
        }
    }

    let newHead = null;
    for (let i = 0; i < array.length; i++) {
        newHead = {
            val: array[i],
            next: newHead
        }
    }

    return newHead;
};

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
};
console.log(reverseList(head));
