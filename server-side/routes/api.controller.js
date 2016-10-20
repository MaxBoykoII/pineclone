var Picture = require('../models/picture.model');
var _ = require('lodash');

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

var updatePicture = (req, res) => {
    var id = req.params.id;
    var updatedProperties = req.body;
    Picture.findById(id, (err, picture) => {
        if (err) {
            res.sendStatus(500);
        }
        else if (!picture) {
            res.sendStatus(404);
        }
        else {
            var updated = _.assign(picture, updatedProperties);
        }
        updated.save(err => {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.status(200).json(updated);
            }
        });
    });
};

var removePicture = (req, res) => {
    var id = req.params.id;
    Picture.findByIdAndRemove(id, (err, picture) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            res.status(200).json(picture);
        }
    });
};

var apiController = {
    getPictures,
    addPicture,
    updatePicture,
    removePicture
};

module.exports = apiController;
