// Calculator
let input = document.getElementById('inp');
let numberBoxes = document.querySelectorAll('.number');

for (let i = 0; i < numberBoxes.length; i++) {
    numberBoxes[i].addEventListener('click', function () {
        input.value = input.value + '' + numberBoxes[i].innerHTML;
    })
}

let eventBoxes = document.querySelectorAll('.event');
for (let i = 0; i < eventBoxes.length; i++) {
    eventBoxes[i].addEventListener('click', function () {
        input.value = input.value + '' + eventBoxes[i].innerHTML;
    })
}

document.getElementById('equal').addEventListener('click', function () {
    input.value = eval(input.value);
})

document.getElementById('clean').addEventListener('click', function () {
    input.value = null;
})

// Color Picker
let colorTitle = document.getElementById('change-color');
colorTitle.style.color = 'red';
colorTitle.style.border = '1px solid orange';
colorTitle.style.padding = '10px';
colorTitle.style.cursor = 'pointer';

colorTitle.addEventListener('click', function () {
    let color = document.getElementById('color').value;
    let r = color[1] + color[2];
    let g = color[3] + color[4];
    let b = color[5] + color[6];

    document.getElementById('color-picker').style.color = `rgb(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)})`;
})


let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    console.log(document.getElementById('gg').value);
})
