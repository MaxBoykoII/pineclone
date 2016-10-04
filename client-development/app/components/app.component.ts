import { Component } from '@angular/core';

/*
 * Import mock data and the picture interface
 */
import { mockData } from '../mocks/pictures';
import { Picture } from '../interfaces/picture';

@Component({
    selector: 'app',
    templateUrl: './templates/app.component.html',
    styleUrls: ['./css/app.component.css']
})

export class AppComponent {
    pictures: Picture[] = mockData;
}