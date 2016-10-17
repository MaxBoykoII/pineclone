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
        this.pictures.push(this.upload);
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
        this.close();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.pictures = this._pictureService.getPictures();
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
