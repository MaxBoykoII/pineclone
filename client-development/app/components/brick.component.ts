import { Component, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';

/*
 * import picture and user interfaces
 */
import { Update } from '../interfaces/update';
import { User } from '../interfaces/user';

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
    @Input() id: string;
    @Input() url: string;
    @Input() description: string;
    @Input() author: string;
    @Input() thumbnail: string;
    @Input() likedBy: string[];
    @Input() user: User;
    @Output() put: EventEmitter < Update > = new EventEmitter < Update > ();
    @Output() like: EventEmitter < Update > = new EventEmitter < Update > ();
    @Output() remove: EventEmitter < string > = new EventEmitter < string > ();
    update: Update;
    constructor() {}
    @ViewChild('editModal')
    modal: ModalComponent;

    @ViewChild('viewer')
    viewer: ModalComponent;

    open(): void {
        this.modal.open();
    }
    close(): void {
        this.modal.close();
    }
    onUpdate(): void {
        this.put.emit(this.update);
        this.close();
    }
    onLike(): void {
        this.like.emit({
            id: this.id
        });
    }
    onRemove(): void {
        this.remove.emit(this.id);
        this.close();
    }
    ngOnInit(): void {
        this.update = {
            id: this.id,
            url: this.url,
            description: this.description
        };
    }
}