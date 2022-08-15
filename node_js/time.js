const assert = require('assert');

/**
 * X is an integer
 * You need to convert integer to time value
 *
 * if X = 1 then it's 1 second the output should be "1s"
 * For minutes, hours, days, weeks it should be "1m", "1h", "1d", "1w"
 *
 * Note* that output should contain non-zero values and should involve 2 high options
 * E.g X = 300 then output should be "5m" NOT "5m0s"
 * E.g X = (3600 * 23) + 3599 => 23 hours 59 minutes and 59 seconds in this case output should be just 1d
 *
 * @param X
 * @returns {string}
 */
function solution(X) {
    let calcMinutes = 60;
    let calcHours = 3600;
    let calcDays = 3600 * 24;
    let calcWeek = calcDays * 7;

    let output = ''
    let integer = parseInt(X, 10);

    if (integer < calcMinutes) { return `${integer}s`; }

    if (integer < calcHours) { // m s
        let minutes = Math.floor(integer / calcMinutes);
        let diffSeconds = integer - (minutes * calcMinutes);

        if (minutes) { output = `${minutes}m` }

        if (diffSeconds) { output = output + `${diffSeconds}s` }

        return output;
    }

    if (integer < calcDays) {
        let hours = Math.floor(integer / calcHours);
        let diffSeconds = integer - (hours * calcHours);

        let minutes = Math.floor(diffSeconds / calcMinutes);
        let diffSubSeconds = diffSeconds - (minutes * calcMinutes);

        if (hours) { output = `${hours}h` }

        if (diffSubSeconds) {
            if (minutes === 59) {
                hours = hours + 1;

                if (hours > 23) { return `1d`; }

                return `${hours}h`;
            }

            minutes = minutes + 1;
            output = output + `${minutes}m`
        } else if (minutes) {
            output = output + `${minutes}m`
        }

        return output;
    }

    if (integer < calcWeek) {
        let days = Math.floor(integer / calcDays);
        let diffSeconds = integer - (days * calcDays);

        let hours = Math.floor(diffSeconds / calcHours);
        let diffSubSeconds = diffSeconds - (hours * calcHours);

        let minutes = Math.floor(diffSubSeconds / calcMinutes);
        let diffSubSubSeconds = diffSubSeconds - (minutes * calcMinutes);

        if (days) { output = `${days}d` }

        if (diffSubSeconds || diffSubSubSeconds) {
            if (hours === 23) {
                days = days + 1;

                if (days > 6) { return `1w`; }

                return `${days}d`;
            }

            hours = hours + 1;
            output = output + `${hours}h`
        } else if (hours) {
            output = output + `${hours}h`
        }

        return output;
    }

    if (integer >= calcWeek) {
        let weeks = Math.floor(integer / calcWeek);
        let diffSeconds = integer - (weeks * calcWeek);

        let days = Math.floor(diffSeconds / calcDays);
        let diffSubSeconds = diffSeconds - (days * calcDays);

        let hours = Math.floor(diffSubSeconds / calcHours);
        let diffSubSubSeconds = diffSubSeconds - (hours * calcHours);

        let minutes = Math.floor(diffSubSubSeconds / calcMinutes);
        let diffSubSubSubSeconds = diffSubSubSeconds - (minutes * calcMinutes);

        if (weeks) { output = `${weeks}w` }

        if (diffSubSeconds || diffSubSubSeconds || diffSubSubSubSeconds) {
            if (days === 6) {
                weeks = weeks + 1;
                return `${weeks}w`;
            }

            days = days + 1;
            output = output + `${days}d`
        } else if (days) {
            output = output + `${days}d`
        }

        return output;
    }

    return output;
}

describe("Time Convertor", () => {
    it("Seconds", () => {
        assert.equal(solution(0), '0s');
        assert.equal(solution(5), '5s');
        assert.equal(solution(59), '59s');
        assert.notEqual(solution(60), '60s');
    });

    it("Minutes", () => {
        assert.equal(solution(60), '1m');
        assert.equal(solution(300), '5m');
        assert.equal(solution(315), '5m15s');
        assert.equal(solution(3599), '59m59s');

        // 60 minutes equal 1h not 60 minutes
        assert.notEqual(solution(3600), '60m');
    });

    it("Hours", () => {
        assert.equal(solution(3600), '1h');

        // 6 hours 59 seconds => "59s" BECOMES 1m
        assert.equal(solution((3600 * 6) + 59), '6h1m');

        // 23 hours 59 minutes 59 seconds => "59 minutes 59 seconds" BECOMES 1h => 23 + 1 = 24 => 24 hours == 1 day
        assert.equal(solution((3600 * 23) + 3599), '1d');
    });

    it("Days", () => {
        // 3600 * 24 = 1 day
        assert.equal(solution(3600 * 24), '1d');

        // 3600 * 24 * 6 = 6 days + 59 seconds but in this case 59 seconds BECOMES 1hour
        assert.equal(solution((3600 * 24 * 6) + 59), '6d1h');

        // 6 days 23 hours and 59 minutes and 59 seconds
        // 23 hours and 59 minutes and 59 seconds BECOMES 1d
        // 7 days BECOMES 1w
        assert.equal(solution((3600 * 24 * 6) + ((3600 * 24) - 1)), '1w');
    });

    it("Weeks", () => {
        assert.equal(solution(3600 * 24 * 7), '1w');

        // 1 week and 59 seconds => "59s" BECOMES 1d
        assert.equal(solution((3600 * 24 * 7) + 59), '1w1d');

        // 1 week and 6 days and 1 second => "6 days and 1 second" BECOMES 7 days => 1 week => 2 weeks
        assert.equal(solution((3600 * 24 * 7) + (3600 * 24 * 6) + 1 ), '2w');
    });
});
