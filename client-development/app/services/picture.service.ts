import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Picture } from '../interfaces/picture';
import { Observable }     from 'rxjs/Rx';

// import { mockData } from '../mocks/pictures';

@Injectable()

export class PictureService {
    private apiURL = '/api';

    constructor(private http: Http) {}

    getPictures(): Observable < Picture[] > {
        return Observable.interval(2000).switchMap(() =>
            this.http.get(this.apiURL)
            .map(this.extractData)
            .catch(this.handleError));
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
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        return res.json();
    }
    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}