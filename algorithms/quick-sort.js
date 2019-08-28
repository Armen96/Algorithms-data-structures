let arr = [45,2,66,74,55,14,21,1,452,12,6,6,6];

function quick_sort(array) {
    if( array.length < 2 ) return array;

    let pivotPosition = Math.floor(Math.random() * array.length);
    let pivot = array[pivotPosition];

    let lessThanPivot = array.filter( x => x < pivot);
    let biggerThanPivot = array.filter( x => x > pivot);
    let equal = array.filter( x => x === pivot);

    return [...quick_sort(lessThanPivot), ...equal, ...quick_sort(biggerThanPivot)];
}

console.time();

quick_sort(arr);

console.timeEnd();
