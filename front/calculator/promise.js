// const prom = () => (new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('prom');
//     }, 1000);
//
//     setTimeout(() => {
//         reject(new Error('!prom'));
//     }, 5000);
// }));
//
// prom().then((data) => {
//     console.log(data);
//
//     return new Promise((resolve, reject) => {
//         reject(new Error('!arg'));
//     }).catch((e) => {
//         console.log('Sub', e.message);
//     })
// }).catch((err) => {
//     console.log('Main', err.message);
// })


// setTimeout(() => {
//     console.log('setTimeout');
// })
//
// const prom = () => (new Promise((resolve, reject) => {
//     new Promise((resolve, reject) => { resolve('hello')}).then(o => { console.log(o); })
// }));



// var myObject = {
//     egg: "plant",
//     func: () => {
//         console.log(this);
//         var self = this;
//         console.log("outer func: this.egg = " + this.egg);
//         console.log("outer func: self.egg = " + self.egg);
//         (function() {
//             console.log("inner func: this.egg = " + this.egg);
//             console.log("inner func: self.egg = " + self.egg);
//         }());
//     }
// };
// myObject.func();


// function ff(arr, msg) {
//     arr[1] = 100;
//     msg = 'inner';
//     console.log(arr[0] + arr[1]);
//     console.log(msg);
// }
//
//
// var arr = [150];
// var msg = 'outer'
//
// ff(arr, msg);
//
// console.log(arr[0] + arr[1]);
// console.log(msg);

let array = ["Asd", "Asd", "dsfsd", "sad"];

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    },2000)
}


