const { expect } = require('chai');
const { PizzUni } = require('./02. PizzUni_Ресурси');

describe('PizzUni', function () {
    let pizzuni;

    beforeEach(function () {
        pizzuni = new PizzUni();
    });

    it('constructor() registeredUsers - by default is an empty array', function () {
        let actual = pizzuni.registeredUsers;
        let expected = [];
        expect(actual).to.be.eql(expected);
    });

    it('constructor() availableProducts - by default is an object that must have only 2 properties', function () {
        let actual = pizzuni.availableProducts;
        let expected = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };

        expect(actual).to.be.eql(expected);
    });

    it('constructor() orders - by default is an empty array', function () {
        let actual = pizzuni.orders;
        let expected = [];
        expect(actual).to.be.eql(expected);
    });

    it('registerUser(email) Receives a string (email)', function () {
        let user = pizzuni.registerUser('pesho@gmail.com');

        let actual = user.email;
        let expected = 'string';
        expect(typeof actual).to.be.equal(expected);
    });

    // TODO: TODO:
    // it('registerUser(email) If the email is already used for registration before that, throws exception', function () {
    //     pizzuni.registerUser('pesho@gmail.com');
    //     // let error = pizzuni.registerUser('pesho@gmail.com');

    //     expect(pizzuni.registerUser('pesho@gmail.com')).to.throw(Error, 'throw err');
    // });

    it('registerUser(email) the given email is successfully registered to the registeredUsers property as an object', function () {
        let actual = pizzuni.registerUser('pesho@gmail.com');
        let expected = {
            email: 'pesho@gmail.com',
            orderHistory: []
        };
        expect(actual).to.be.eql(expected);
    });
});

// •	Otherwise, the given email is successfully registered to the registeredUsers property as an object. That object holds the given email and orderHistory which by default is an empty array. 

// •	If the email is already used for registration before that, the expected behavior of the class is to throw an error with the following message: 
// `This email address (${email}) is already being used!`
