const {
    closeToNow,
    closestDate,
    formatTimestamp,
} = require('../modules/time.validation');

describe('time validation', () => {
    describe('close to now', () => {
        test('it returns true if passed the current time', (done) => {
            const date = new Date();
            const timestamp = date.toISOString();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        // YOUR CODE HERE
        test('returns false if time is 50 seconds behind', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Subtract 50 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() - 50 * 1000;
            expect(closeToNow(timestamp)).toBe(false);
            done();
        })
        test('returns true if time is 29 seconds behind current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Subtract 29 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() - 29 * 1000;
            expect(closeToNow(timestamp)).toBe(true);
            done();
        })
        test('returns true if time is 29.9 seconds behind current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Subtract 29.9 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() - 29.9 * 1000;
            expect(closeToNow(timestamp)).toBe(true);
            done();
        })
        test('returns false if time is 30 seconds behind current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Subtract 29.9 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() - 30 * 1000;
            expect(closeToNow(timestamp)).toBe(false);
            done();
        })
        test('returns false if time is 30.1 seconds behind current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Subtract 29.9 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() - 30.1 * 1000;
            expect(closeToNow(timestamp)).toBe(false);
            done();
        })
        test('returns false if time is 2 hours ahead of current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Add 2 for hours and multiply by 60 seconds * 60 minutes * 1000 milliseconds per second
            const timestamp = Date.now() + 50 * 60 * 60 * 1000;
            expect(closeToNow(timestamp)).toBe(false);
            done();
        })
        test('returns true if time is 29 seconds ahead of current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Add 29 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() + 29 * 1000;
            expect(closeToNow(timestamp)).toBe(true);
            done();
        })
        test('returns true if time is 29.9 seconds ahead of current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Add 29.9 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() + 29.9 * 1000;
            expect(closeToNow(timestamp)).toBe(true);
            done();
        })
        test('returns false if time is 30 seconds ahead of current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Subtract 30 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() + 30 * 1000;
            expect(closeToNow(timestamp)).toBe(false);
            done();
        })
        test('returns false if time is 30.1 seconds ahead of current time', (done) => {
            // Date.now() returns milliseconds since 01/01/1970. Add 29.9 for seconds and multiply by 1000 milliseconds per second
            const timestamp = Date.now() + 30.1 * 1000;
            expect(closeToNow(timestamp)).toBe(false);
            done();
        })
    }); // end closeToNow test cases


    describe('closest date', () => {
        test('it returns the previous day if before noon CST', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = '2020-06-30';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        // input is November 13, 2013 at 11:55 am in the Asia/Taipei region
        test('it returns the previous day when given a previous year in a different time zone before noon', (done) => {
            const inputTime = '2013-11-18T11:55:00+08:00'
            const expectedOutput = '2013-11-17';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        // input is June, 10 2030 at 2:00 pm in the America/Toronto region
        test('it returns the timestamp given a future year in a different time zone after noon', (done) => {
                const inputTime = '2030-06-10T14:00:00-04:00'
                const expectedOutput = '2030-06-10';
                expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        // input is July, 07 2020 at 11:59:59 am in the central region
        test('it returns the previous day when given a time right before noon', (done) => {
                const inputTime = '2020-07-07T11:59:59-05:00'
                const expectedOutput = '2020-07-06';
                expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        // input is July, 07 2020 at 12:00:00 pm in the central region
        test('it returns the timestamp when given exactly noon as a time', (done) => {
                const inputTime = '2020-07-07T12:00:00-05:00'
                const expectedOutput = '2020-07-07';
                expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
    }); // end closest date test cases

    describe('format timestamp', () => {
        test('it returns a formatted timestamp', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = 'July 1st, 2020 at 11:03 am';
            expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
            done();
        });
        // YOUR CODE HERE
    });
});
