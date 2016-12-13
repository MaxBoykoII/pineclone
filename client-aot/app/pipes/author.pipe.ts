import { Pipe, PipeTransform } from '@angular/core';

import { Picture } from '../interfaces/picture';

/*
 * Sorts between pictures created by author and those created by everyone else.
 * Usage:
 * pictures | whose: type : author
 */
@Pipe({
    name: 'whose',
    pure: false
})
export class AuthorPipe implements PipeTransform {
    transform(pictures: Picture[], choice: string, author: string) {
        // create a clone of pictures so that the original is untouched
        let copy = pictures.slice();
        switch (choice) {
            case 'mine':
                copy = copy.filter(picture => picture.author === author);
                break;
            case 'not mine':
                copy = copy.filter(picture => picture.author !== author);
                break;
        }
        return copy;
    }
}