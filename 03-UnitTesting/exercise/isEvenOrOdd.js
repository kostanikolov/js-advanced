function isOddOrEven(name) {
    if (typeof(name) !== 'string') {
        return undefined;
    }

    if (name.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

module.exports = isOddOrEven;
