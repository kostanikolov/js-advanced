const { expect } = require('chai');
const mathEnforcer = require('../exercise/mathEnforcer.js');

describe('Test if object\'s properties work correctly.', function () {
    describe('Invalid results.', function () {
        it('All methods should return undefined if given parameter is not \'number\'.', function () {
            const addFiveActual = mathEnforcer.addFive('asd');
            const addFiveExpected = undefined;

            const subtractTenActual = mathEnforcer.subtractTen('asd');
            const subtractTenExpected = undefined;

            const sumActual = mathEnforcer.sum('asd', 'asd');
            const sumExpected = undefined;

            expect(addFiveActual).to.equal(addFiveExpected, 'Function did not return correct result!');
            expect(subtractTenActual).to.equal(subtractTenExpected, 'Function did not return correct result!');
            expect(sumActual).to.equal(sumExpected, 'Function did not return correct result!');
        });
    });

    describe('Correct results.', function () {
        it('addFive() should return correct results.', function () {
            const addFiveIntActual = mathEnforcer.addFive(10);
            const addFiveIntExpected = 15;

            const addFiveNegativeActual = mathEnforcer.addFive(-7);
            const addFiveNegativeExpected = -2;

            const addFiveFloatActual = mathEnforcer.addFive(3.6);
            const addFiveFloatExpected = 8.6;

            expect(addFiveIntActual).to.equal(addFiveIntExpected, 'Function did not return correct result!');
            expect(addFiveNegativeActual).to.equal(addFiveNegativeExpected, 'Function did not return correct result!');
            // expect(addFiveFloatActual).to.equal(addFiveFloatExpected, 'Function did not return correct result!');
            expect(addFiveFloatActual).to.be.closeTo(addFiveFloatExpected, 0.01, 'Function did not return correct result!');
        });

        it('subtractTen() should return correct results.', function () {
            const subtractTenIntActual = mathEnforcer.subtractTen(15);
            const subtractTenIntExpected = 5;

            const subtractTenNegativeActual = mathEnforcer.subtractTen(-15);
            const subtractTenNegativeExpected = -25;

            const subtractTenFloatActual = mathEnforcer.subtractTen(-15.94);
            const subtractTenFloatExpected = -25.94;

            expect(subtractTenIntActual).to.equal(subtractTenIntExpected, 'Function did not return correct result!');
            expect(subtractTenNegativeActual).to.equal(subtractTenNegativeExpected, 'Function did not return correct result!');
            expect(subtractTenFloatActual).to.be.closeTo(subtractTenFloatExpected, 0.01, 'Function did not return correct result!');
        });

        it('sum() should return correct results.', function () {
            const sumIntActual = mathEnforcer.sum(15, 3);
            const sumIntExpected = 18;

            const sumNegativeActual = mathEnforcer.sum(-15, -3);
            const sumNegativeExpected = -18;

            const sumFloatActual = mathEnforcer.sum(3.14, 2.86);
            const sumFloatExpected = 6;

            expect(sumIntActual).to.equal(sumIntExpected, 'Function did not return correct result!');
            expect(sumNegativeActual).to.equal(sumNegativeExpected, 'Function did not return correct result!');
            expect(sumFloatActual).to.be.closeTo(sumFloatExpected, 0.01, 'Function did not return correct result!');
        });
    })
});
