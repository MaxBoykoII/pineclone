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
    if (req.user) {
        var picture = new Picture(req.body);
        picture.save();
        res.status(201).json(picture);
    }
    else {
        res.sendStatus(401);
    }
};

var updatePicture = (req, res) => {
    if (req.user) {
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
    }
    else {
        res.sendStatus(401);
    }
};

var removePicture = (req, res) => {
    if (req.user) {
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
    }
    else {
        res.sendStatus(401);
    }
};

var apiController = {
    getPictures,
    addPicture,
    updatePicture,
    removePicture
};

module.exports = apiController;
