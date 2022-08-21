/**
 * Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 *
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage.
 */

const stringParser = {
    unit: [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ],
    ten: ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
}

const LIMIT = 1000;

function solution(limit) {
    let string = '';

    function primitiveNumber(number) {
        return stringParser.unit[number]
    }

    function doubleDigits(number) {
        if (number < 20) {
            return primitiveNumber(number)
        }

        if (number %10 === 0) {
            return stringParser.ten[parseInt(number.toString()[0])];
        }

        return stringParser.ten[parseInt(number.toString()[0])] + ' ' + primitiveNumber(parseInt(number.toString()[1]));
    }

    function threeDigits(number) {
        if (number <= 99) {
            return doubleDigits(number)
        }

        let output = '';
        output = primitiveNumber(parseInt(number.toString()[0])) + ' hundred';
        let doubleDigit = number % 100;
        let rest = doubleDigits(doubleDigit);

        if (rest) {
            output = output + ' and ' + rest;
        }

        return output
    }

    function fourDigits(number) {
        let output = '';
        output = primitiveNumber(parseInt(number.toString()[0])) + ' thousand';
        let doubleDigit = number % 1000;
        let rest = threeDigits(doubleDigit);

        if (rest) {
            output = output + ' and ' + rest;
        }

        return output
    }


    function numberToString(number) {
        if (number < 20) {
            return primitiveNumber(number)
        } else if ( number <= 99) {
            return doubleDigits(number);
        } else if (number <= 999) {
            return threeDigits(number);
        } else if (number <= 9999) {
            return fourDigits(number);
        }
    }

    for (let i = 1; i <= limit; i++) {
        string += numberToString(i) + ', '
    }

    string = string.replace(/[`~!@#$%^&*()_|+\-=?;:'", .<>\{\}\[\]\\\/]/gi, '');

    return string.length;
}

const result = solution(LIMIT);
console.log(result) // 21124
