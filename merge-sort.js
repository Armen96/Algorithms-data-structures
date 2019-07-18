let arr = [45,2,66,74,55,14,21,1,452,12,6,6,6];

function mergeSort(arr) {
    if(arr.length < 2 ) return arr;

    let middle = Math.floor(arr.length/2);

    let left = arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);


    let mergedLeft = mergeSort(left);
    let mergesRight = mergeSort(right);

    return merge(mergedLeft,mergesRight);
}

function merge(left,right) {
    let result = [];

    while (left.length && right.length) {
        if(left[0] <= right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

console.time();

let sorted = mergeSort(arr);

console.timeEnd();
