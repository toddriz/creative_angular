import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { minerals } from './minerals';

@Injectable()
export class RockService {

    constructor() { }

    public getRandomMineral(letter: string) {
        return _.sample(minerals[letter.toLowerCase()]);
    }

}
