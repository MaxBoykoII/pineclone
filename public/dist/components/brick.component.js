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
var BrickComponent = (function () {
    function BrickComponent() {
        this.defaultSrc = 'https://cdn.hyperdev.com/us-east-1%3A60e6615e-7d9e-47ac-903b-3b4b47372e42%2Fplaceholder.png';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BrickComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BrickComponent.prototype, "description", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BrickComponent.prototype, "author", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BrickComponent.prototype, "thumbnail", void 0);
    BrickComponent = __decorate([
        core_1.Component({
            selector: 'brick',
            templateUrl: './templates/brick.component.html',
            styleUrls: ['./css/brick.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BrickComponent);
    return BrickComponent;
}());
exports.BrickComponent = BrickComponent;
