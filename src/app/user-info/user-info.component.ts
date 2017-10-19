import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    doSomething(form: NgForm) {
        let firstName = form.value['firstName'];
        let lastName = form.value['lastName'];
    }

}
