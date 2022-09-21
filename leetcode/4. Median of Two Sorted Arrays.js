/**
 * HARD Performance
 *
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 */


let findMedianSortedArrays = function (nums1, nums2) {
    let array = [];
    let totalLength = nums1.length + nums2.length;
    let half = totalLength % 2 === 1 ? Math.ceil(totalLength / 2) : (totalLength / 2) + 1;

    let i = 0;
    let j = 0;

    while (array.length < half) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                array.push(nums1[i]);
                i++;
            } else {
                array.push(nums2[j]);
                j++;
            }
        } else if (i >= nums1.length) {
            array.push(nums2[j]);
            j++
        } else {
            array.push(nums1[i]);
            i++
        }
    }

    if (totalLength % 2 === 0) {
        return (array[array.length - 1] + array[array.length - 2]) / 2;
    } else {
        return array[array.length - 1];
    }
};

let result = findMedianSortedArrays([1, 2], [3, 4]);
console.log(result);
