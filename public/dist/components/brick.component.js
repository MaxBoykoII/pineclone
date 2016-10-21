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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var BrickComponent = (function () {
    function BrickComponent() {
        this.put = new core_1.EventEmitter();
        this.like = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
    }
    BrickComponent.prototype.open = function () {
        this.modal.open();
    };
    BrickComponent.prototype.close = function () {
        this.modal.close();
    };
    BrickComponent.prototype.onUpdate = function () {
        this.put.emit(this.update);
        this.close();
    };
    BrickComponent.prototype.onLike = function () {
        this.like.emit({ id: this.id });
    };
    BrickComponent.prototype.onRemove = function () {
        this.remove.emit(this.id);
        this.close();
    };
    BrickComponent.prototype.ngOnInit = function () {
        this.update = {
            id: this.id,
            url: this.url,
            description: this.description
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BrickComponent.prototype, "id", void 0);
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BrickComponent.prototype, "likedBy", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BrickComponent.prototype, "put", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BrickComponent.prototype, "like", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BrickComponent.prototype, "remove", void 0);
    __decorate([
        core_1.ViewChild('editModal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], BrickComponent.prototype, "modal", void 0);
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
