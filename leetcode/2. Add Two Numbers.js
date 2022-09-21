/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 */


let addTwoNumbers = function(l1, l2) {
    let output = [];
    let node = null;

    function convertListToArray(listNode) {
        let returnedArray = [];

        if (listNode.next != null) {
            returnedArray = returnedArray.concat(convertListToArray(listNode.next));
        }

        returnedArray.push(listNode.val);
        return returnedArray;
    }

    let l1Array = convertListToArray(l1).reverse();
    let l2Array = convertListToArray(l2).reverse();

    let maxLength = l1Array.length > l2Array.length ? l1Array.length : l2Array.length;

    let record = 0;
    for (let i = 0; i < maxLength; i++) {
        let f1 = l1Array[i] ? l1Array[i] : 0;
        let f2 = l2Array[i] ? l2Array[i] : 0;
        let value = f1 + f2;

        if (record) {
            value = value + record;
            record = 0;
        }

        if (value < 10) {
            output.unshift(value);
        } else {
            let cValue = (10 - value) * -1;
            record++;
            output.unshift(cValue);
        }
    }

    if (record) {
        output.unshift(record);
    }

    for (let i = 0; i < output.length; i++) {
        node = {
            val: output[i],
            next: node,
        };
    }

    return node;
};

console.time();
console.log(addTwoNumbers({val: 7, next: {val: 4, next: null}}, {val: 2, next: {val: 1, next: null}}));
console.timeEnd();

