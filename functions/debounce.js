function debounce(callback, time) {
    let timeoutID;

    return function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => { callback(); }, time);
    }
}

document.getElementById('handle-debounce').addEventListener('click', debounce((e) => {
    console.log('Clicked debounce (1200ms)');
}, 1200));
