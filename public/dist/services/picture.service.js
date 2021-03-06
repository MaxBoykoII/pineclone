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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var PictureService = (function () {
    function PictureService(http) {
        this.http = http;
        this.apiURL = '/api';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    PictureService.prototype.getPictures = function () {
        var _this = this;
        return Rx_1.Observable.interval(2000).switchMap(function () {
            return _this.http.get(_this.apiURL)
                .map(_this.extractData)
                .catch(_this.handleError);
        });
    };
    PictureService.prototype.addPicture = function (picture) {
        var body = JSON.stringify(picture);
        var options = new http_1.RequestOptions({
            headers: this.headers
        });
        return this.http.post(this.apiURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PictureService.prototype.updatePicture = function (update) {
        var url = this.apiURL + "/" + update.id;
        var body = JSON.stringify(update);
        var options = new http_1.RequestOptions({
            headers: this.headers
        });
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PictureService.prototype.removePicture = function (id) {
        var url = this.apiURL + "/" + id;
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PictureService.prototype.extractData = function (res) {
        return res.json();
    };
    PictureService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    PictureService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PictureService);
    return PictureService;
}());
exports.PictureService = PictureService;
