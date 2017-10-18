import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'We Will Rock You';
    currentPage: string;

    constructor () {
        this.currentPage = 'user-info';
    }



}
