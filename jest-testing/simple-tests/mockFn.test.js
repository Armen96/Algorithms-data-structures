import { forEach } from './mockFn';

test('mock fn test', () => {

    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);

// The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

})

test('2 mock', () => {
    const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
//     filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(true);
    filterTestFn.mockReturnValue(true);

    const result = [11, 12, 13].filter(num => filterTestFn(num));

    console.log(result);
// > [11]
    console.log(filterTestFn.mock.calls);

    const myMock = jest.fn();
    console.log(myMock());
// > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(),myMock(),myMock(),myMock(),myMock());
})


