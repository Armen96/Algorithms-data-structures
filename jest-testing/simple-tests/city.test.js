import {
    initializeCityDatabase,
    clearCityDatabase,
    isCity,
    initializeCityDatabaseOnce,
    clearCityDatabaseOnce

} from './city';

beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has erevan', () => {
    expect(isCity('erevan')).toBeTruthy();
});

test('city database has moscow', () => {
    expect(isCity('moscow')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeFalsy();
});


describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeAll(() => {
        initializeCityDatabaseOnce();
    });

    afterAll(() => {
        clearCityDatabaseOnce();
    });

    test('city database has jest', () => {
        expect(isCity('jest')).toBeTruthy();
    });

});

describe('test once', () => {
    // test.only('this will be the only test that runs', () => {
    //     expect(true).not.toBe(false);
    // });

    test('this test will not run', () => {
        expect('A').toBe('A');
    });
})
