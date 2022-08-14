// Upload a file
// const  X = 100;
// const B = [10, 6, 6, 8];
// const Z = 2;
//
// function solution(X, B, Z) {
//
//     let BSize = B.length;
//     let Obs = Z;
//     let sumOfDownloadedFile = 0;
//
//     for (let i = 0; i < BSize; i++) {
//         sumOfDownloadedFile += B[i];
//     }
//
//     console.log('sumOfDownloadedFile', sumOfDownloadedFile)
//
//     const remaining = X - sumOfDownloadedFile;
//
//     if (remaining <= 0) {
//         return 0;
//     }
//
//     console.log('BSize', BSize)
//     if (Z > BSize) {
//         Obs = BSize;
//     }
//
//
//     let remainingOfB = 0;
//
//     for (let i = BSize - 1; i >= BSize - Obs; i--) {
//         remainingOfB += B[i];
//     }
//
//     let average = remainingOfB / Obs;
//     console.log('avg', average);
//
//     const minutes = Math.ceil(remaining / average)
//
//     console.log('mi', minutes)
//
//     if (!isNaN(minutes)) {
//         return minutes;
//     }
//
//     return -1;
// }
//
// console.log(solution(X, B, Z));

// const X = 3650; => 1h50s
// function solution(X) {
//     let calcMinutes = 60;
//     let calcHours = 3600;
//     let calcDays = 3600 * 24;
//     let calcWeek = calcDays * 7;
//     let output = ''
//     let integer = parseInt(X, 10);
//
//     if (integer < calcMinutes) { return `${integer}s`; }
//
//     if (integer < calcHours) { // m s
//         let minutes = Math.floor(integer / calcMinutes);
//         let diffSeconds = integer - (minutes * calcMinutes);
//
//         if (minutes) {
//             output = `${minutes}m`
//         }
//
//         if (diffSeconds) {
//             output = output + `${diffSeconds}s`
//         }
//
//         return output;
//     }
//
//     if (integer < calcDays) {
//         let hours = Math.floor(integer / calcHours);
//         let diffSeconds = integer - (hours * calcHours);
//
//         let minutes = Math.floor(diffSeconds / calcMinutes);
//         let diffSubSeconds = diffSeconds - (minutes * calcMinutes);
//
//         if (hours) {
//             output = `${hours}h`
//         }
//
//         if (diffSubSeconds) {
//             output = output + `${minutes + 1}m`
//         } else if (minutes) {
//             output = output + `${minutes}m`
//         }
//
//         return output;
//     }
//
//     if (integer < calcWeek) {
//         let days = Math.floor(integer / calcDays);
//         let diffSeconds = integer - (days * calcDays);
//
//         let hours = Math.floor(diffSeconds / calcHours);
//         let diffSubSeconds = diffSeconds - (hours * calcHours);
//
//         let minutes = Math.floor(diffSubSeconds / calcMinutes);
//         let diffSubSubSeconds = diffSubSeconds - (minutes * calcMinutes);
//
//         if (days) {
//             output = `${days}d`
//         }
//
//         if (hours) {
//             output = output + `${hours}h`
//         } else if (diffSubSeconds || diffSubSubSeconds) {
//             output = output + `1h`
//         }
//
//         return output;
//     }
//
//     if (integer >= calcWeek) {
//         let weeks = Math.floor(integer / calcWeek);
//         let diffSeconds = integer - (weeks * calcWeek);
//
//         let days = Math.floor(diffSeconds / calcDays);
//         let diffSubSeconds = diffSeconds - (days * calcDays);
//
//
//         let hours = Math.floor(diffSubSeconds / calcHours);
//         let diffSubSubSeconds = diffSubSeconds - (hours * calcHours);
//
//         let minutes = Math.floor(diffSubSubSeconds / calcMinutes);
//         let diffSubSubSubSeconds = diffSubSubSeconds - (minutes * calcMinutes);
//
//         if (weeks) {
//             output = `${weeks}w`
//         }
//
//         if (days) {
//             output = output + `${days}d`
//         } else if (diffSubSeconds || diffSubSubSeconds || diffSubSubSubSeconds) {
//             output = output + `1d`
//         }
//
//         return output;
//     }
//
//     return output;
// }

// const S = '300.01';
// const B = ['300.00', '200.00', '100.00'];
// // const B = ['0.05', '1.00'];
// function solution(S, B) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const R = [];
//     let value = parseInt(S);
//     let direction = true;
//
//     const allocationSort = B.sort((a,b) => { return b-a; });
//     if (allocationSort[0] !== B[0]) {
//         direction = false;
//     }
//     console.log('allocationSort', allocationSort);
//
//
//     for (let i = 0; i < allocationSort.length; i++) {
//         let sum = 0;
//         let record = 0;
//         for (let j = i; j < allocationSort.length; j++) {
//             sum = sum + parseInt(allocationSort[j]);
//
//
//         }
//
//         // let generalValue = parseInt(allocationSort[j]) / sum;
//         console.log('value', value, record)
//         record = (value * parseInt(allocationSort[i]) / sum) * 100;
//
//         console.log('sum', sum, record)
//
//
//         R[i] = Math.floor(record) / 100;
//     }
//
//
//     return R;
//
// }
//
// console.log(solution(S, B));
