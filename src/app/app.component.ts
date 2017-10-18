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

    currentMineral: object;

    constructor (rockService: RockService) {
        this.currentMineral = rockService.getRandomMineral;
    }

}
