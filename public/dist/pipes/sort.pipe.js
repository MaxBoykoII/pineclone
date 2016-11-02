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
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (pictures, choice) {
        var copy = pictures.slice();
        switch (choice) {
            case 'author':
                copy.sort(function (pic1, pic2) {
                    var author1 = pic1.author.toUpperCase();
                    var author2 = pic2.author.toUpperCase();
                    return (author1 < author2) ? -1 : (author1 > author2) ? 1 : 0;
                });
                break;
            case 'likes':
                copy.sort(function (pic1, pic2) {
                    return pic2.likedBy.length - pic1.likedBy.length;
                });
                break;
        }
        return copy;
    };
    SortPipe = __decorate([
        core_1.Pipe({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
exports.SortPipe = SortPipe;
