const assert = require('assert');
/**
 * Hi, here's your problem today. This problem was recently asked by Facebook:
 * Given a file path with folder names, '..' (Parent directory), and '.' (Current directory),
 * return the shortest possible file path (Eliminate all the '..' and '.').
 *
 * Input: '/Users/Joma/Documents/../Desktop/./../'
 * Output: '/Users/Joma/'
 *
 * @param file_path
 */

function shortest_path(file_path) {
    let pathSegments = file_path.split('/');
    let stack = [];

    pathSegments = pathSegments.filter(item => {
        return item !== '.' &&  item !== '';
    })

    for (let i = 0; i < pathSegments.length; i++) {
        if (pathSegments[i] !== '..') {
            stack.push(pathSegments[i]);
        } else {
            stack.pop();
        }
    }

    return '/' + stack.join('/');
}

describe("Absolute Path", () => {
    it('find shortest path', function () {
        assert.strictEqual(shortest_path('/Users/Joma/Documents/../Desktop/./../'), '/Users/Joma');

        assert.strictEqual(shortest_path('/Users/Joma/Documents/../Desktop/../../'), '/Users');

        assert.strictEqual(shortest_path('/Users/../Users/./Joma/Documents/../Desktop/./../'), '/Users/Joma');
    });
});
