"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _ = require('lodash');
var picture_service_1 = require('../services/picture.service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var AppComponent = (function () {
    function AppComponent(_pictureService) {
        this._pictureService = _pictureService;
        this.pictures = [];
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
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
            console.log('created picture is ', picture);
        });
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
        this.close();
    };
    AppComponent.prototype.updatePicture = function (update) {
        var _this = this;
        this._pictureService.updatePicture(update).subscribe(function (updatedPicture) {
            var oldPicture = _this.pictures.find(function (picture) { return picture._id === updatedPicture._id; });
            var index = _.indexOf(_this.pictures, oldPicture);
            _this.pictures.splice(index, 1, updatedPicture);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pictureService.getPictures().subscribe(function (pictures) {
            if (!_.isEqual(_this.pictures, pictures)) {
                _this.pictures = pictures;
            }
        });
    };
    __decorate([
        core_1.ViewChild('picModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], AppComponent.prototype, "modal", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './templates/app.component.html',
            styleUrls: ['./css/app.component.css']
        }), 
        __metadata('design:paramtypes', [picture_service_1.PictureService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
