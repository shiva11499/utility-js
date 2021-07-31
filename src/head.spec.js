const head = require('./head');

describe('Head', () => {

    it('Element returned from [] is null', () => {
        expect(head([])).toEqual(null);
    });

    it('Element returned from [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

})
