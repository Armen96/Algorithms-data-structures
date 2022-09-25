/**
 * 278. First Bad Version
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether version is bad.
 * Implement a function to find the first bad version. You should minimize the number of calls to the API.
 */

let solution = function(isBadVersion) {
    return function(n) {
        let latestVersion = isBadVersion(n);
        if (!latestVersion) { return -1; }

        let low = 0;
        let high = n;
        let initialBadVersion = null;
        while (low <= high) {
            let middle = Math.floor((low + high) / 2);
            let currentVersion = isBadVersion(middle);

            if (!currentVersion) {
                low = middle + 1;
            } else {
                initialBadVersion = middle;
                high = middle - 1;
            }
        }

        return initialBadVersion;
    };
};
