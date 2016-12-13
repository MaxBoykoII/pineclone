import { Pipe } from '@angular/core';
/*
 * Sorts pictures based on author, likes, or creation date
 * Usage:
 * pictures | choice: value
 */
export var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (pictures, choice) {
        // create a clone of pictures so that the original is untouched
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
    SortPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sort',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    SortPipe.ctorParameters = [];
    return SortPipe;
}());
//# sourceMappingURL=sort.pipe.js.map