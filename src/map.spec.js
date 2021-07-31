const map = require('./map');

const cube = (number) => {
    return Math.pow(number, 3);
}

const identity = (number) => {
    return number;
}

describe('Map', () => {

    it('Mapping [] returned []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('Mapping [1,2,3] returned [1,2,3] with identity function', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });

    it('Mapping [1,2,3] returned [1,8,27] with cube function', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('Mapping [{x : 10}] on "someObject => someObject.x + 1" function is [11]', () => {
        expect(map([{x : 10}], someObject => someObject.x + 1)).toEqual([11]);
    });


})
