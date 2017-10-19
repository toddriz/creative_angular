import { Component } from '@angular/core';

import { RockInfoComponent } from './rock-info/rock-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RockService } from './rock.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'We Will Rock You';
    firstName: string = '';
    lastName: string = '';
    firstNameMineral: object;
    lastNameMineral: object;
    currentMineral: object = null;

    constructor(private rockService: RockService) { }

    isTriggered(event) {
        this.firstNameMineral = this.rockService.getRandomMineral(this.firstName[0]);
        this.lastNameMineral = this.rockService.getRandomMineral(this.lastName[0]);
    }

}
