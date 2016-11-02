import { Pipe, PipeTransform } from '@angular/core';

import { Picture } from '../interfaces/picture';

/*
 * Sorts pictures based on author, likes, or creation date
 * Usage:
 * pictures | choice: value
 */

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(pictures: Picture[], choice: string) {

        // create a clone of pictures so that the original is untouched
        const copy = pictures.slice();
        switch (choice) {
            case 'author':
                copy.sort((pic1, pic2) => {
                    const author1 = pic1.author.toUpperCase();
                    const author2 = pic2.author.toUpperCase();
                    return (author1 < author2) ? -1 : (author1 > author2) ? 1 : 0;
                });
                break;
            case 'likes':
                copy.sort((pic1, pic2) => {
                    return pic2.likedBy.length - pic1.likedBy.length;
                });
                break;
        }
        return copy;
    }
}