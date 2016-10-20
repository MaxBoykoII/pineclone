import { Component, ViewChild, OnInit } from '@angular/core';
import * as _ from 'lodash';

/*
 * Import picture service, the picture interface, and the update interface
 */
import { PictureService } from '../services/picture.service';
import { Picture } from '../interfaces/picture';
import { Update } from '../interfaces/update';

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
        this._pictureService.addPicture(this.upload).subscribe(picture => {
            this.pictures.push(picture)
            console.log('created picture is ', picture);
        });
        this.upload = {
            url: '',
            description: '',
            author: '@test_user',
            thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
        };
        this.close();
    }
    updatePicture(update: Update): void {
        this._pictureService.updatePicture(update).subscribe(updatedPicture => {
            const oldPicture = this.pictures.find(picture => picture._id === updatedPicture._id);
            const index = _.indexOf(this.pictures, oldPicture);
            this.pictures.splice(index, 1, updatedPicture);
        });
    }
    ngOnInit(): void {

        this._pictureService.getPictures().subscribe(pictures => {
            if (!_.isEqual(this.pictures, pictures)) {
                this.pictures = pictures
            }
        });
    }
}