let arr = [45,2,66,74,55,14,21,1,452,12,6,6];

let done = true;

function bubbleSort(arr) {
    done = false;

    for (let i = 0 , j = 1; i < arr.length - 1 ; i++, j++) {
        if(arr[i] > arr [j]) {
            done = true;

            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}

while (done) {
    bubbleSort(arr)
}

console.log(arr);


