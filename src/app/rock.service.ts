import { Injectable } from '@angular/core';

@Injectable()
export class RockService {

    constructor() { }

    let minerals = {
        'a': [
            {name: 'ACANTHITE', sciName: '(Silver Sulfide)'},
            {name: 'ACTINOLITE', sciName: '(Calcium Magnesium Iron Silicate Hydroxide)'}
            {name: 'ADAMITE', sciName: '(Zinc Arsenate Hydroxide)'}
            {name: 'AEGIRINE', sciName: '(Sodium Iron Silicate)'}
            {name: 'AESCHYNITE', sciName: '(Yttrium Calcium Iron Thorium Titanium Niobium Oxide Hydroxide)'}
            {name: 'AGATE', sciName: '(variety of Quartz - Silicon Oxide)'}
            {name: 'AJOITE', sciName: '(Hydrated Potassium Sodium Copper Aluminum Silicate Hydroxide)'}
            {name: 'ALBITE', sciName: '(Sodium Aluminum Silicate)'}
            {name: 'ALEXANDRITE', sciName: '(variety of Chrysoberyl- Beryllium Aluminum Oxide)'}
            {name: 'ALLANITE', sciName: '(Calcium Cerium Lanthanum Yttrium Aluminum Iron Silicate Hydroxide)'}
            {name: 'ALLUVIAL', sciName: '(a type of unconsolidated sediments)'}
            {name: 'ALMANDINE', sciName: '(Iron Aluminum Silicate)'}
            {name: 'ALTAITE', sciName: '(Lead Telluride)'}
            {name: 'ALUMINUM', sciName: '(Al)'}
            {name: 'ALUNITE', sciName: '(Potassium Aluminum Sulfate Hydroxide)'}
            {name: 'AMBER', sciName: '(Succinite: fossilized tree resin)'}
            {name: 'AMBLYGONITE', sciName: '(Lithium Sodium Aluminum Phosphate Fluoride Hydroxide)'}
            {name: 'AMETHYST', sciName: '(variety of Quartz- Silicon Oxide)'}
            {name: 'ANALCIME', sciName: '(Hydrated Sodium Aluminum Silicate)'}
            {name: 'ANAPAITE', sciName: '(Hydrated Calcium Iron Phosphate)'}
            {name: 'ANATASE', sciName: '(Titanium Oxide)'}
            {name: 'ANDALUSITE', sciName: '(Aluminum Silicate)'}
            {name: 'ANDERSONITE', sciName: '(Hydrated Sodium Calcium Uranyl Carbonate)'}
            {name: 'ANDESINE', sciName: '(Sodium Calcium Aluminum Silicate)'}
            {name: 'ANDESITE', sciName: '(an extrusive igneous rock)'}
            {name: 'ANDRADITE', sciName: '(Calcium Iron Silicate)'}
            {name: 'ANGELITE', sciName: '(trade name for Anhydrite)'}
            {name: 'ANGLESITE', sciName: '(Lead Sulfate)'}
            {name: 'ANHYDRITE', sciName: '(Calcium Sulfate)'}
            {name: 'ANKERITE', sciName: '(Calcium Iron Carbonate)'}
            {name: 'ANNABERGITE', sciName: '(Hydrated Nickel Arsenate)'}
            {name: 'ANORTHITE', sciName: '(Calcium Aluminum Silicate)'}
            {name: 'ANORTHOSITE', sciName: '(a plutonic igneous rock)'}
            {name: 'ANTHOPHYLLITE', sciName: '(Magnesium Iron Silicate Hydroxide)'}
            {name: 'ANTIMONY', sciName: '(Sb)'}
            {name: 'ANTLERITE', sciName: '(Copper Sulfate Hydroxide)'}
            {name: 'APATITE', sciName: '(Calcium (Fluoro, Chloro, Hydroxyl) Phosphate)'}
            {name: 'APOPHYLLITE', sciName: '(Hydrated Potassium Calcium Silicate Hydroxide Flouride)'}
            {name: 'AQUAMARINE', sciName: '(variety of Beryl, Berylium Aluminum Silicate)'}
            {name: 'ARAGONITE', sciName: '(Calcium Carbonate)'}
            {name: 'ARFVEDSONITE', sciName: '(Sodium Iron Magnesium Silicate Hydroxide)'}
            {name: 'ARGENTITE', sciName: '(Silver Sulfide)'}
            {name: 'ARGYRODITE', sciName: '(Silver Germanium Sulfide)'}
            {name: 'ARSENIC', sciName: '(As)'}
            {name: 'ARSENOPYRITE', sciName: '(Iron Arsenide Sulfide)'}
            {name: 'ARSENTSUMEBITE', sciName: '(Lead Copper Arsenate Sulfate)'}
            {name: 'ARTHURITE', sciName: '(Hydrated Copper Iron Arsenate Phosphate Sulfate)'}
            {name: 'ARTINITE', sciName: '(Hydrated Magnesium Carbonate Hydroxide)'}
            {name: 'ASTEROIDS', sciName: '(primordial stony or metallic rocks in space)'}
            {name: 'ASTROPHYLLITE', sciName: '(Potassium Iron Titanium Silicate Hydroxide)'}
            {name: 'ATACAMITE', sciName: '(Copper Chloride Hydroxide)'}
            {name: 'AUGELITE', sciName: '(Aluminum Phosphate Hydroxide)'}
            {name: 'AUGITE', sciName: '(Calcium Sodium Magnesium Aluminum Iron Titanium Silicate)'}
            {name: 'AURICHALCITE', sciName: '(Zinc Copper Carbonate Hydroxide)'}
            {name: 'AUSTINITE', sciName: '(Calcium Zinc Arsenate Hydroxide)'}
            {name: 'AUTUNITE', sciName: '(Hydrated Calcium Uranyl Phosphate)'}
            {name: 'AXINITE', sciName: '(Calcium Iron Magnesium Manganese Aluminum Boro-Silicate Hydroxide)'}
            {name: 'AZURITE', sciName: '(Copper Carbonate Hydroxide)'}
        ],
        'b': [

        ],
        'c': [

        ],
        'd': [

        ],
        'e': [

        ],
        'f': [

        ],
        'g': [

        ],
        'h': [],
        'i': [],
        'j': [],
        'k': [],
        'l': [],
        'm': [],
        'n': [],
        'o': [],
        'p': [],
        'q': [],
        'r': [],
        's': [],
        't': [],
        'u': [],
        'v': [],
        'w': [],
        'x': [],
        'y': [],
        'z': []
    };

    public getRandomMineral(letter:string){
        //return a random mineral, given a letter.
    }

}
