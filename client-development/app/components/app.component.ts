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
    upload: Picture = {
        url: '',
        description: '',
        author: '@test_user',
        thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
    };
    @ViewChild('picModal')
    modal: ModalComponent;

    open() {
        this.modal.open();
    }
    close() {
        this.modal.close();
    }
    addPicture() {
        this.pictures.push(this.upload);
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
        this.close();
    }


}