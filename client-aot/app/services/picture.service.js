import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
// import { mockData } from '../mocks/pictures';
export var PictureService = (function () {
    function PictureService(http) {
        this.http = http;
        this.apiURL = '/api';
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
    }
    PictureService.prototype.getPictures = function () {
        var _this = this;
        return Observable.interval(2000).switchMap(function () {
            return _this.http.get(_this.apiURL)
                .map(_this.extractData)
                .catch(_this.handleError);
        });
    };
    PictureService.prototype.addPicture = function (picture) {
        var body = JSON.stringify(picture);
        var options = new RequestOptions({
            headers: this.headers
        });
        return this.http.post(this.apiURL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PictureService.prototype.updatePicture = function (update) {
        var url = this.apiURL + "/" + update.id;
        var body = JSON.stringify(update);
        var options = new RequestOptions({
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
        return Observable.throw(errMsg);
    };
    PictureService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PictureService.ctorParameters = [
        { type: Http, },
    ];
    return PictureService;
}());
//# sourceMappingURL=picture.service.js.map