
/**
 This problem was recently asked by Microsoft:

 You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.

 */


let arr = [-4, -4, 2, 8,15];

function maximum_product_of_three(arr) {

    let sortedArr = arr.sort( (a,b) => { return b - a });

    if( sortedArr[sortedArr.length - 1] > 0 )  {
        return (sortedArr[0] * sortedArr[1] * sortedArr[2]);
    } else {

        let arrayOfProducts = [
            sortedArr[0] * sortedArr[1] * sortedArr[2],
            sortedArr[sortedArr.length -1] * sortedArr[sortedArr.length -2] * sortedArr[sortedArr.length -3],
            sortedArr[sortedArr.length -1] * sortedArr[sortedArr.length -2] * sortedArr[0],
        ];

        return Math.max(...arrayOfProducts);
    }
}

console.log(maximum_product_of_three(arr));
