import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
 * Import User interface
 */
import { User } from '../interfaces/user';

@Injectable()

export class AuthService {
    constructor(private http: Http) {}
    fetch(): Observable < User > {
        /* 
         * Calls out to /auth/user to retrieve user object 
         */
        return this.http.get('/auth/user')
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