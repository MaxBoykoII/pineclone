import { Component } from '@angular/core';

/*
 * Import mock data
 */
import { mockData } from '../mocks/pictures';

@Component({
    selector: 'app',
    templateUrl: './templates/app.component.html'
})

export class AppComponent {
    pictures = mockData;
}