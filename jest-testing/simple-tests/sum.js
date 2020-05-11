export const sum = (a, b) => {
    return a + b;
}

export const fetchData = (callback) => {
   return callback('peanut butter');
}

export const fetchPromise = (isValid) => {
    return new Promise((resolve, reject) => {
        if (isValid) {
            resolve('valid');
        } else {
            reject('error');
        }
    })
}
