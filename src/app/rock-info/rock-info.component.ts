import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rock-info',
    templateUrl: './rock-info.component.html',
    styles: ['./rock-info.component.less']
})
export class RockInfoComponent implements OnInit {
    @Input() firstNameMineral: object;
    @Input() lastNameMineral: object;

    constructor() { }

    ngOnInit() { }

    test() {
        console.log(this.firstNameMineral);
    }
}
