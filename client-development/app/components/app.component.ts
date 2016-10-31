import { Component, ViewChild, OnInit } from '@angular/core';
import * as _ from 'lodash';


/*
 * Import picture service, the picture interface, and the update interface
 */
import { PictureService } from '../services/picture.service';
import { Picture } from '../interfaces/picture';
import { Update } from '../interfaces/update';

/*
 * Import User interface and Auth Service
 */
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

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
    user: User = null;
    author: string = '@test_user';
    upload: Picture = {
        url: '',
        description: '',
        author: '@test_user',
        thumbnail: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png'
    };
    constructor(private _pictureService: PictureService, private _authService: AuthService) {}
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
        });
        this.upload.url = '';
        this.upload.description = '';
        this.close();
    }
    updatePicture(update: Update): void {
        this._pictureService.updatePicture(update).subscribe(updatedPicture => {
            const oldPicture = this.pictures.find(picture => picture._id === updatedPicture._id);
            const index = _.indexOf(this.pictures, oldPicture);
            this.pictures.splice(index, 1, updatedPicture);
        });
    }
    toggleLikes(update: Update): void {
        const id = update.id;
        const picture = this.pictures.find(pic => pic._id === id);
        let likedBy = picture.likedBy;
        const index = _.indexOf(picture.likedBy, this.user.username);
        (index === -1) ? likedBy.push(this.user.username): _.pull(likedBy, this.user.username);

        this.updatePicture({
            id,
            likedBy
        });
    }
    removePicture(id: string): void {
        this._pictureService.removePicture(id).subscribe(removedPicture => {
            _.pull(this.pictures, removedPicture);
        })
    }
    ngOnInit(): void {
        this._pictureService.getPictures().subscribe(pictures => {
            if (!_.isEqual(this.pictures, pictures)) {
                this.pictures = pictures;
            }
        });
        this._authService.fetch().subscribe(user => {
            this.user = user
            this.upload.author = user.username;
            this.upload.thumbnail = user.image;
        });
    }
}