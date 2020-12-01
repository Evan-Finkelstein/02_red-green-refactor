const { getName } = require('./index');
const spot = { name: 'spot', age: 5, weight: '20 lbs' }


test('get name', () => expect(getName(spot)).toEqual('spot'));