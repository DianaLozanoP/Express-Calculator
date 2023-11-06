const { mean, median, mode, checkForNumbers } = require('./operations');

describe('test calculation', function () {
    test('get mean number', function () {

        expect(mean([2, 2, 3, 3])).toEqual(2.5)
    })
    test('get median', function () {
        expect(median([1, 1, 2, 3, 3])).toEqual(2)
    })
    test('get median even array', function () {
        expect(median([1, 1, 2, 3, 3, 6])).toEqual(2.5)
    })
    test('get mode', function () {
        expect(mode([1, 1, 2, 2, 3, 4, 5, 5, 5])).toEqual(5)
    })
})

describe('test for all number', function () {
    test('check if all values in object are numbers', function () {
        let obj = { nums: '1,2,3' }
        expect(checkForNumbers(obj)).toEqual('okay')
    })
    test('check if all values in object are numbers', function () {
        let obj = { nums: '1,2,F' }
        expect(checkForNumbers(obj)).toEqual('NaN')
    })
})
