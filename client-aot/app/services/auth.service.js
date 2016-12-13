import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
export var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.fetch = function () {
        /*
         * Calls out to /auth/user to retrieve user object
         */
        return this.http.get('/auth/user')
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.extractData = function (res) {
        return res.json();
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
    ];
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map