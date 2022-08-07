function fastFunction () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Fast function done')
            resolve(6)
        }, 1000)
    })
}


const result = fastFunction();
console.log('5')
result.then(data => {
    console.log(data)
})
