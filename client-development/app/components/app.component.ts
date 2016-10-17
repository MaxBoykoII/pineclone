import { Component, ViewChild, OnInit } from '@angular/core';

/*
 * Import picture service and the picture interface
 */
import { PictureService } from '../services/picture.service';
import { Picture } from '../interfaces/picture';

/*
 * Import third-party modal component
 */
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'app',
    templateUrl: './templates/app.component.html',
    styleUrls: ['./css/app.component.css']
})

export class AppComponent implements OnInit {
    pictures: Picture[] = [];
    upload: Picture = {
        url: '',
        description: '',
        author: '@test_user',
        thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
    };
    constructor(private _pictureService: PictureService) {}
    @ViewChild('picModal')
    modal: ModalComponent;

    open() {
        this.modal.open();
    }
    close() {
        this.modal.close();
    }
    addPicture() {
        this._pictureService.addPicture(this.upload).subscribe(pictures => this.pictures = pictures);
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
        this.close();
    }
    ngOnInit(): void {

        this._pictureService.getPictures().subscribe(pictures => this.pictures = pictures);
    }
}