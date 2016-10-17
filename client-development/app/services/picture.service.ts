import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Picture } from '../interfaces/picture';
import { Observable }     from 'rxjs/Observable';

import { mockData } from '../mocks/pictures';

@Injectable()

export class PictureService {
    private apiURL = '/api';

    constructor(private http: Http) {}

    getPictures(): Observable < Picture[] > {
        return this.http.get(this.apiURL)
            .map(this.extractData)
    }
    private extractData(res: Response) {
        return res.json();
    }
}