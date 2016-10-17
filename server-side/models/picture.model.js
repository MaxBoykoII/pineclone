var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureModel = new Schema({
    url: {
        type: String
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    thumbnail: {
        type: String
    },
    likedBy: {
        type: [String],
        'default': []
    }
});

module.exports = mongoose.model('Picture', pictureModel, 'pictures');