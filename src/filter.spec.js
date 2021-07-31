const filter = require('./filter');

describe('filter', () => {

    it('filter([], x => true) should return []', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('filter([1,2,3], x => true) should return []', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });


})
