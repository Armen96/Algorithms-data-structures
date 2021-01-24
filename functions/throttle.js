function throttle(callback, time) {
    let last = 0;
    return function () {
        let currentTime = new Date().getTime();

        if (currentTime - last < time) {
            return;
        }

        last = currentTime;
        callback();
    }
}

document.getElementById('handle-throttle').addEventListener('click', throttle((e) => {
    console.log('Clicked throttle (4000ms)');
}, 4000));
