var expect = require('expect.js');
var Picture = require('../models/picture.model');

describe('picture model', () => {
    var picture;
    var data = {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Hanoi_railroad_tracks.jpg',
        description: 'Hanoi railroad',
        author: '@thanhacun',
        thumbnail: 'https://pbs.twimg.com/profile_images/744886125529956353/wC7QEgVD_normal.jpg'
    };
    before(() => {
        picture = new Picture(data);
    });
    describe('Given a valid url, description, author, thumbnail, it makes a picture', () => {
        
        it('with the given url', () => {
            expect(picture.url).to.be(data.url);
        });
        
        it('with the given description', () => {
            expect(picture.description).to.be(data.description);
        });
        
        it('with the given thumbnail', () => {
            expect(picture.thumbnail).to.be(data.thumbnail);
        });
        
        it('with an empty array of likes', () => {
            expect(picture.likedBy).to.be.empty();
        });
    });
});