import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
    addPicture(picture: Picture): Observable < Picture > {
        const body = JSON.stringify(picture);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({
            headers
        });

        return this.http.post(this.apiURL, body, options)
            .map(this.extractData)
    }
    private extractData(res: Response) {
        return res.json();
    }
}