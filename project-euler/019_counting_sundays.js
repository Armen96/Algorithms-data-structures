/**
 * Counting Sundays
 *
 * You are given the following information, but you may prefer to do some research for yourself.
 *
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

/**
 * Note WRONG CONDITION
 *
 * 1 Jan 1900 was NOT a Monday.
 */

/**
 *  Leap Year
 *
 * The year must be evenly divisible by 4;
 * If the year can also be evenly divided by 100, it is not a leap year;
 * unless...
 * The year is also evenly divisible by 400. Then it is a leap year.
 */

function solution(startYear, endYear) {
    const START = 1900;
    const UNIQUE_YEAR_SCHEDULE = 4; // FEBRUARY 29/28 DAYS
    const END = 2000;
    const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // const MONTHS = ['jan', 'feb', 'march', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']

    let START_MONTH_BY = 1;
    let count = 0;

    for (let i = START; i <= END; i ++) { // YEAR
        if (i % UNIQUE_YEAR_SCHEDULE === 0) {
            if (i%100 === 0 && i%400 !== 0) {
                MONTH_DAYS[1] = 28;
            } else {
                MONTH_DAYS[1] = 29;
            }
        } else {
            MONTH_DAYS[1] = 28;
        }

        for (let j = 0; j < MONTH_DAYS.length; j++) { // MONTH
            for (let k = 1; k <= MONTH_DAYS[j]; k++) { // DAY
                if (i >= startYear && i <= endYear) {
                    if (k === 1 && START_MONTH_BY === 6) {
                        count = count + 1;
                    }
                }

                START_MONTH_BY = START_MONTH_BY + 1;
                if (START_MONTH_BY === 7) { START_MONTH_BY = 0; }
            }
        }
    }

    return count;
}

console.log(solution(1901, 2000)); // 171
