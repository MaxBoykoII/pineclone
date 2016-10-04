import { Component, Input } from '@angular/core';

@Component({
    selector: 'brick',
    templateUrl: './templates/brick.component.html',
    styleUrls: ['./css/brick.component.css']
})

export class BrickComponent {
    @Input() url: string;
    @Input() description: string;
}