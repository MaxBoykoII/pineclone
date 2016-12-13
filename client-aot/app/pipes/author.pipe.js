import { Pipe } from '@angular/core';
/*
 * Sorts between pictures created by author and those created by everyone else.
 * Usage:
 * pictures | whose: type : author
 */
export var AuthorPipe = (function () {
    function AuthorPipe() {
    }
    AuthorPipe.prototype.transform = function (pictures, choice, author) {
        // create a clone of pictures so that the original is untouched
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
    AuthorPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'whose',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    AuthorPipe.ctorParameters = [];
    return AuthorPipe;
}());
//# sourceMappingURL=author.pipe.js.map