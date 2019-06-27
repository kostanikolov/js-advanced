const { expect } = require('chai');
const isOddOrEven = require('../exercise/isEvenOrOdd.js');

describe('Test string length if it is even or odd.', function () {
    describe('Invalid results.', function () {
        it('Should return \'undefined\' with number parameter.', function () {
            const actual = isOddOrEven(13);
            const expected = undefined;
            
            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });

        it('Should return \'undefined\' with object parameter.', function () {
            const actual = isOddOrEven({ name: 'Peter' });
            const expected = undefined;

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });
    });

    describe('Correct results.', function () {
        it('Should return correct result with even length.', function () {
            const actual = isOddOrEven('Peter Parker');
            const expected = 'even';

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });

        it('Should return correct result with odd length.', function () {
            const actual = isOddOrEven('Peter');
            const expected = 'odd';

            expect(actual).to.equal(expected, 'Function did not return correct result!');
        });

        it('Should return correct results with multiple consecutive checks.', function () {
            expect(isOddOrEven('pet')).to.equal('odd', 'Function did not return correct result!');
            expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return correct result!');
            expect(isOddOrEven('bird')).to.equal('even', 'Function did not return correct result!');
        });
    });
});
