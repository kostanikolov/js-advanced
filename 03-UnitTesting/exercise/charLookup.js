function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const result = lookupChar('Coffee, coffee, please I need some more coffee!', 5);
console.log(result);

module.exports = lookupChar;
