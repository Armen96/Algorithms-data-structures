function getAnagram(s) {
    // Write your code here
    let center = s.length / 2; // half of the string

    // Use hash map and store each char count inside: using second half of string
    let hashMap = {};
    for (let i = center; i < s.length; i++) {
        hashMap[s[i]] = hashMap[s[i]] ? hashMap[s[i]] + 1 : 1;
    }

    // Use first half and decrement hashmap value if there is a specified char
    for (let i = 0; i < center; i++) {
        if (hashMap[s[i]]) {
            hashMap[s[i]] = hashMap[s[i]] - 1;
        }
    }

    // Count hasMap values: which will be the missing numbers count
    return Object.values(hashMap).reduce((a, b) => a + b, 0);
}

console.log(getAnagram('111123'));


function minOperations(n) {
    // Write your code here

    // Parse to binary array
    let stack = []; // ex. [1, 0 ,0]
    while (n >= 1) {
        if (n === 1) {
            stack.unshift(1);
            break;
        }
        let reminder = n % 2;
        n = Math.floor(n / 2);

        stack.unshift(reminder);
    }

    let endResult = ''; // In case of n = 4 -> end result should be "000"
    let currentResult = ''; // In case of n = 4 -> current result should be "100"
    for (let i = 0; i < stack.length; i++) {
        endResult += '0';
        currentResult += stack[i];
    }


    let counter = 0;
    while (currentResult !== endResult) {
        // Rule Number 2: change the last value
        if (currentResult[currentResult.length - 1] === '1') {
            stack[stack.length - 1] = 0;
        } else {
            stack[stack.length - 1] = 1;
        }
        counter++; // Rule 2 is done so increment counter:

        // if join stack and compare with endResult: if all items are 0 the break!
        currentResult = stack.join('');
        if (currentResult === endResult) { break; }

        // Rule Number 1: loop over stack and if i + 1 is "1" than change i value
        for (let i = stack.length - 2; i >= 0; i--) {
            if (currentResult[i + 1] === '1') {
                if (currentResult[i] === '1') {
                    stack[i] = 0;
                } else {
                    stack[i] = 1;
                }

                counter++;
                currentResult = stack.join('');
                if (currentResult === endResult) { break; }
                break;
            }
        }
    }

    return counter;
}

console.log(minOperations(156));
