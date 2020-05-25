/**
 * Hi, here's your problem today. This problem was recently asked by Amazon:
 * Version numbers are strings that are used to identify unique states of software products.
 * A version number is in the format a.b.c.d. and so on where a, b, etc. are numeric strings separated by dots.
 * These generally represent a hierarchy from major to minor changes. Given two version numbers version1 and version2,
 * conclude which is the latest version number. Your code should do the following:
 *
 * If version1 > version2 return 1.
 * If version1 < version2 return -1.
 * Otherwise return 0.
 */

function compareVersion(version1, version2) {

    version1 = modifyVersionFormat(version1);
    version2 = modifyVersionFormat(version2);

    let v1 = Number(version1.replace(/\./g, ''));
    let v2 = Number(version2.replace(/\./g, ''));

    if (v1 === v2) {
        return 0;
    }

    return v1 > v2 ? 1 : -1;
}

function modifyVersionFormat(version) {
    let array = version.split('.');

    for (let i = 0; i < array.length; i++) {
        if(array[i].toString().length === 1) {
            array[i] = '0' + array[i];
        }
    }

    return array.join('.');
}

console.log(compareVersion('1.21.5', '1.2.65')); // 1
console.log(compareVersion('1.21.5', '1.22.2')); // -1
console.log(compareVersion('1.21.5', '1.21.5')); // 0
