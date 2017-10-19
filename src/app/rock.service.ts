import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { minerals } from './minerals';

@Injectable()
export class RockService {
    private minerals: object;

    constructor() {
        this.minerals = minerals;
    }
    
    public getRandomMineral(letter: string) {
        return _.sample(this.minerals[letter]);
    }

}
