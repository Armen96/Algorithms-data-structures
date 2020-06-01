function maxRecurringChar(text) {
    let charMap = new Map();
    let maxChar = '';
    let maxCharCount = 0;

    for(let char of text) {
        charMap.has(char) ? charMap.set(char, charMap.get(char) + 1) : charMap.set(char, 1);
    }

    for (let [key, value] of charMap) {
        if (value > maxCharCount) {
            maxCharCount = value;
            maxChar = key;
        }
    }

    return [maxChar, "Count " + maxCharCount];
}

console.log(maxRecurringChar('sfsfsafaaas')); // s
