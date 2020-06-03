/**
 *
 * This problem was recently asked by Uber:
 *
 * Given a list of numbers, find if there exists a pythagorean triplet in that list.
 * A pythagorean triplet is 3 variables a, b, c where a^2 + b^2 = c^2
 *
 */

/**
 * A pythagorean triplet
 *
 * a = m2 − n2
 * b = 2mn
 * c = m2 + n2
 */

let arr = [3, 5, 12, 5, 13,3,4];

function findPythagoreanTriplets(arr) {

    let squaredObj = {};

    for ( let i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i]*arr[i];
        squaredObj[arr[i]] = squaredObj[arr[i]] + 1 || 1;
    }

    let objectKeys = Object.keys(squaredObj);
    let pythagoreanTriplets = [];

    for ( let i = 0; i < objectKeys.length; i++ ) {
        for ( let j = i; j < objectKeys.length; j++ ) {

            let sumOfTwoSquared = parseInt(objectKeys[i]) + parseInt(objectKeys[j]);

            if( squaredObj.hasOwnProperty(String(sumOfTwoSquared))) {
                pythagoreanTriplets.push([objectKeys[i],objectKeys[j]]);
            }
        }
    }

    return pythagoreanTriplets;
}


console.log(findPythagoreanTriplets(arr));
