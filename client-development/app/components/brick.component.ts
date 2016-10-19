import { Component, Input, ViewChild, OnInit } from '@angular/core';

/*
 * import picture interface
 */
import { Update } from '../interfaces/update';

/*
 * Import third-party modal component
 */
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'brick',
    templateUrl: './templates/brick.component.html',
    styleUrls: ['./css/brick.component.css']
})

export class BrickComponent implements OnInit {
    @Input() url: string;
    @Input() description: string;
    @Input() author: string;
    @Input() thumbnail: string;
    update: Update;
    constructor() {}
    @ViewChild('editModal')
    modal: ModalComponent;

    open(): void {
        this.modal.open();
    }
    close(): void {
        this.modal.close();
    }
    ngOnInit(): void {
        this.update = {
            url: this.url,
            description: this.description
        };
    }
}