import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
export var BrickComponent = (function () {
    function BrickComponent() {
        this.put = new EventEmitter();
        this.like = new EventEmitter();
        this.remove = new EventEmitter();
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
        this.like.emit({
            id: this.id
        });
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
    BrickComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brick',
                    templateUrl: './templates/brick.component.html',
                    styleUrls: ['./css/brick.component.css']
                },] },
    ];
    /** @nocollapse */
    BrickComponent.ctorParameters = [];
    BrickComponent.propDecorators = {
        'id': [{ type: Input },],
        'url': [{ type: Input },],
        'description': [{ type: Input },],
        'author': [{ type: Input },],
        'thumbnail': [{ type: Input },],
        'likedBy': [{ type: Input },],
        'user': [{ type: Input },],
        'put': [{ type: Output },],
        'like': [{ type: Output },],
        'remove': [{ type: Output },],
        'modal': [{ type: ViewChild, args: ['editModal',] },],
        'viewer': [{ type: ViewChild, args: ['viewer',] },],
    };
    return BrickComponent;
}());
//# sourceMappingURL=brick.component.js.map