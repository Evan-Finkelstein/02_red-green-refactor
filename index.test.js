const { getName, copyAndPush } = require('./index');
const spot = { name: 'spot', age: 5, weight: '20 lbs' }
const numbers = [1, 2, 3]

test('get name', () => expect(getName(spot)).toEqual('spot'));

test('copy and push', () => expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]));