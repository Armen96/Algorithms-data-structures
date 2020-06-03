// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left and right side
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    let max = n*2 - 1;
    let string = '#';
    let emptyString = ' ';
    let pyramidStr = '';

    for (let i = 1; i <= max ; i+=2 ) {
        pyramidStr += emptyString.repeat( Math.abs((max-i))/2 ) +"" + string.repeat(i) + "" + emptyString.repeat( Math.abs((max-i))/2 ) + '\n'
    }

    return pyramidStr;
}

console.log(pyramid(5));
