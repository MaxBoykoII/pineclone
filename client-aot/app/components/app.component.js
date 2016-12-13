import { Component, ViewChild } from '@angular/core';
import * as _ from "lodash";
import { PictureService } from '../services/picture.service';
import { AuthService } from '../services/auth.service';
export var AppComponent = (function () {
    function AppComponent(_pictureService, _authService) {
        this._pictureService = _pictureService;
        this._authService = _authService;
        this.pictures = [];
        this.user = null;
        this.author = null;
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
        this.choice = 'createdOn';
        this.type = 'all';
    }
    AppComponent.prototype.open = function () {
        this.modal.open();
    };
    AppComponent.prototype.close = function () {
        this.modal.close();
    };
    AppComponent.prototype.addPicture = function () {
        var _this = this;
        this._pictureService.addPicture(this.upload).subscribe(function (picture) {
            _this.pictures.push(picture);
        });
        this.upload.url = '';
        this.upload.description = '';
        this.close();
    };
    AppComponent.prototype.updatePicture = function (update) {
        var _this = this;
        this._pictureService.updatePicture(update).subscribe(function (updatedPicture) {
            var oldPicture = _this.pictures.find(function (picture) { return picture._id === updatedPicture._id; });
            var index = _this.pictures.indexOf(oldPicture);
            _this.pictures.splice(index, 1, updatedPicture);
        });
    };
    AppComponent.prototype.toggleLikes = function (update) {
        var id = update.id;
        var picture = this.pictures.find(function (pic) { return pic._id === id; });
        var likedBy = picture.likedBy;
        var index = picture.likedBy.indexOf(this.user.username);
        (index === -1) ? likedBy.push(this.user.username) : _.pull(likedBy, this.user.username);
        this.updatePicture({
            id: id,
            likedBy: likedBy
        });
    };
    AppComponent.prototype.removePicture = function (id) {
        var _this = this;
        this._pictureService.removePicture(id).subscribe(function (removedPicture) {
            _.pull(_this.pictures, removedPicture);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pictureService.getPictures().subscribe(function (pictures) {
            if (!_.isEqual(_this.pictures, pictures)) {
                console.log('got here!');
                _this.pictures = pictures;
            }
        });
        this._authService.fetch().subscribe(function (user) {
            _this.user = user;
            _this.author = user.username;
            _this.upload.author = user.username;
            _this.upload.thumbnail = user.image;
        });
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app',
                    templateUrl: './templates/app.component.html',
                    styleUrls: ['./css/app.component.css']
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: PictureService, },
        { type: AuthService, },
    ];
    AppComponent.propDecorators = {
        'modal': [{ type: ViewChild, args: ['picModal',] },],
    };
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map