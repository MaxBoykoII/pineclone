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
            console.log('updates:', updatedProperties);
            var updated = _.assign(picture, updatedProperties);
            console.log('updated picture', updated);
        }
        updated.save(err => {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.sendStatus(204);
            }
        });
    });
};

var apiController = {
    getPictures,
    addPicture,
    updatePicture
};

module.exports = apiController;
