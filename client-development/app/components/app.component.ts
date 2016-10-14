import { Component, ViewChild } from '@angular/core';

/*
 * Import mock data and the picture interface
 */
import { mockData } from '../mocks/pictures';
import { Picture } from '../interfaces/picture';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'app',
    templateUrl: './templates/app.component.html',
    styleUrls: ['./css/app.component.css']
})

export class AppComponent {
    pictures: Picture[] = mockData;
    @ViewChild('picModal')
    modal: ModalComponent;

    open() {
        this.modal.open();
    }

}