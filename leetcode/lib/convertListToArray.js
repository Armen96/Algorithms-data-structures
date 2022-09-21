function convertListToArray(list) {
    let array = [];

    if (list.next !== null) {
        array = array.concat(convertListToArray(list.next))
    }

    array.push(list.val);

    return array;
}


let result = convertListToArray({val: 7, next: {val: 4, next: null}});
console.log(result);


function convertArrayToList(array) {
    let node = null;


    for (let i = 0; i < array.length; i++) {
        node = {
            val: array[i],
            next: node
        }
    }

    return node;
}


let resultV2 = convertArrayToList([2, 3, 8]);
console.log(resultV2);
