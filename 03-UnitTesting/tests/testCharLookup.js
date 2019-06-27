const { expect } = require('chai');
const lookupChar = require('../exercise/charLookup.js');

describe('Test if the function returns correct character from string with given index.', function () {
    describe('Invalid tests.', function () {
        it('Should return \'undefined\' with given first parameter NOT a string.', function () {
            const actual = lookupChar(42, 5);
            const expected = undefined;

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });

        it('Should return \'undefined\' with given second parameter NOT a integer.', function () {
            const actual = lookupChar('Message', 3.6);
            const expected = undefined;

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });

        it('Should return \'Incorrect index\' with given invalid index (e.g. larger than the length of the string).', function () {
            // the string is long 27 symbols [0 - 26]
            const actual = lookupChar('Would you like some coffee.', 27);
            const expected = 'Incorrect index';

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });

        it('Should return \'Incorrect index\' with given invalid index (e.g. negative index).', function () {
            const actual = lookupChar('Would you like some coffee.', -1);
            const expected = 'Incorrect index';

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });
    });

    describe('Correct tests.', () => {
        it('Should return \'g\' with given index of 5.', () => {
            const actual = lookupChar('Message', 5);
            const expected = 'g';

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });
    });
});
