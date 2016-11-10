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
var AuthorPipe = (function () {
    function AuthorPipe() {
    }
    AuthorPipe.prototype.transform = function (pictures, choice, author) {
        var copy = pictures.slice();
        switch (choice) {
            case 'mine':
                copy = copy.filter(function (picture) { return picture.author === author; });
                break;
            case 'not mine':
                copy = copy.filter(function (picture) { return picture.author !== author; });
                break;
        }
        return copy;
    };
    AuthorPipe = __decorate([
        core_1.Pipe({
            name: 'whose',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], AuthorPipe);
    return AuthorPipe;
}());
exports.AuthorPipe = AuthorPipe;
