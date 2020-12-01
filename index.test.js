const { getName,
    copyAndPush,
    capitalizeAndFilter,
    fetchQuotes } = require('./index');
const request = require('superagent');
const spot = { name: 'spot', age: 5, weight: '20 lbs' }
const numbers = [1, 2, 3]
const dogNames = ['spot', 'rover', 'bingo', 'fred']
jest.mock('superagent');
test('get name', () => expect(getName(spot)).toEqual('spot'));

test('copy and push', () => expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]));
test('copy and push original arr', () => expect(numbers).toEqual([1, 2, 3]));

test('capitilize and filter', () => expect(capitalizeAndFilter(dogNames)).toEqual(['SPOT', 'ROVER', 'BINGO']));


describe('fetch quote', () => {
    it('fetches the first quotee', async () => {
        request.get.mockResolvedValue({
            body: {
                results: [
                    {
                        character: "Bender",
                        quote: "I'm a fraud. A poor, lazy, sexy fraud.",
                        image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
                    }
                ]
            }
        });

        const quotes = await fetchQuotes();
        expect(quotes).toEqual([
            {
                character: "Bender",
                quote: "I'm a fraud. A poor, lazy, sexy fraud.",
                image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
            }

        ]);
    });
});