import { Injectable } from '@angular/core';

import { Picture } from '../interfaces/picture';
import { mockData } from '../mocks/pictures';

@Injectable()

export class PictureService {
    getPictures(): Picture[] {
        return mockData;
    }
}