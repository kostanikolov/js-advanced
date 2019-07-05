const { expect } = require('chai');
const { SoftUniFy } = require('./03. Softunify_Ресурси');

describe('SoftUniFy', function () {
    let softunify;

    beforeEach(function () {
        softunify = new SoftUniFy();
    });

    it('new instance should create empty allSongs property', function () {
        expect(softunify.allSongs).to.be.eql({}, 'allSongs property is not empty');
    });

    it('downloadSongs() adds songs into allSongs object', function () {
        softunify.downloadSong('Eminem', 'Not Afraid', 'I\'m not afraid to take a stand...');
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');

        let actual = softunify.allSongs;
        let expected = {
            Eminem: {
                rate: 0, votes: 0, songs: [
                    "Not Afraid - I'm not afraid to take a stand...",
                    "Venom - Knock, Knock let the devil in...",
                    "Phenomenal - IM PHENOMENAL..."
                ]
            }
        }
        
        expect(actual).to.be.deep.equal(expected);
    });
});

