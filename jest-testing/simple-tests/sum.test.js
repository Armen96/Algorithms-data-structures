import { sum, fetchData, fetchPromise } from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

test('test promise res/rej properties', () => {
    fetchPromise(true).then(data => {
        expect(data).toBe('valid');
    })
});

test('test promise res/rej properties', () => {
    fetchPromise(false).catch(e => expect(e).toMatch('error'))
});

test('the promise is valid', async () => {
    const data = await fetchPromise(true);
    expect(data).toBe('valid');
});
