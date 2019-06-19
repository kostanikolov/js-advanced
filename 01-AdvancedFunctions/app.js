function solve(text) {

    let alphabet = {};

    for (let letter = 0; letter < text.length; letter++) {
        let currentLetter = text[letter];

        if (!alphabet.hasOwnProperty(currentLetter)) {
            alphabet[currentLetter] = 1;
        } else {
            alphabet[currentLetter]++;
        }
    }

    Object.keys(alphabet)
        .sort((a, b) => alphabet[b] - alphabet[a])
        .forEach(key => console.log(`${key} = ${alphabet[key]}`));
}

// solve('the quick brown fox jumps over the lazy dog');

console.log(`the quick brown fox jumps over the lazy dog`);
console.log(`THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG`);
