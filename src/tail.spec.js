const tail = require('./tail');

describe('Tail', () => {

    it('Element returned from [] is []', () => {
        expect(tail([])).toEqual([]);
    });

    it('Element returned from [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

})
