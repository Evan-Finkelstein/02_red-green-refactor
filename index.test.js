const { getName,
    copyAndPush,
    capitalizeAndFilter } = require('./index');
const spot = { name: 'spot', age: 5, weight: '20 lbs' }
const numbers = [1, 2, 3]
const dogNames = ['spot', 'rover', 'bingo', 'fred']
test('get name', () => expect(getName(spot)).toEqual('spot'));

test('copy and push', () => expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]));
test('copy and push original arr', () => expect(numbers).toEqual([1, 2, 3]));

test('capitilize and filter', () => expect(capitalizeAndFilter(dogNames)).toEqual(['SPOT', 'ROVER', 'BINGO']));