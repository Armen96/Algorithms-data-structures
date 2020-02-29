// Amazon Software Development Engineer Interview Questions

function water(array) {
    let waterCount = 0;

    for (let i = 0; i < array.length; i++) {
        let leftArray = [0];
        for (let j = 0; j < i; j++) {
            leftArray.push(array[j]);
        }

        let leftMaxValue = Math.max(...leftArray);

        let rightArray = [0];
        for (let k = i; k < array.length; k++) {
            rightArray.push(array[k]);
        }

        let rightMaxValue = Math.max(...rightArray);

        if (array[i] < leftMaxValue && array[i] < rightMaxValue) {

            let diff = Math.min(...[leftMaxValue - array[i], rightMaxValue - array[i]]);
            waterCount = waterCount + diff;
        }
    }

    return waterCount;
}

console.log(water([1, 0, 2, 1, 0, 1, 5, 2, 0, 2, 1]));
