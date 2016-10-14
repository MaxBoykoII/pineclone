import {
    Component,
    Input
}
from '@angular/core';

@Component({
    selector: 'brick',
    templateUrl: './templates/brick.component.html',
    styleUrls: ['./css/brick.component.css']
})

export class BrickComponent {
    @Input() url: string;
    @Input() description: string;
    @Input() author: string;
    @Input() thumbnail: string;
    defaultSrc: string = 'https://cdn.hyperdev.com/us-east-1%3A60e6615e-7d9e-47ac-903b-3b4b47372e42%2Fplaceholder.png'
}