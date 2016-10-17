var Picture = require('../models/picture.model');

var getPictures = (req, res) => {
    Picture.find((err, pictures) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(pictures);
        }
    });
};

var addPicture = (req, res) => {
    var picture = new Picture(req.body);
    picture.save();
    res.status(201).json(picture);
};

var apiController = {
    getPictures: getPictures,
    addPicture: addPicture
};

module.exports = apiController;
