import * as pokemonConstant from './pokemonConstant';
import * as pokemonImg from '../../asset/image/pokemonImg';
import * as typeImg from '../../asset/image/typeIcon';

export function getResource(type, name) {
    switch (type) {
        case 'chargeMove':
            return pokemonConstant.chargeMove[name];
 
        case 'eliteMove':
            return pokemonConstant.eliteMove[name];

        case 'fastMove':
            return pokemonConstant.fastMove[name];

        case 'pokemonImg':
            if (name) {
                let string = name.toString();
                string = string.replace('.png', '');
                if (string.includes('♀')) {
                    string = 'nidoranFemale';
                }
                if (string.includes('♂')) {
                    string = 'nidoranMale';
                }
                return pokemonImg[string] || pokemonImg.noImage;
            }
            else return pokemonImg.noImage;
            

        case 'legacyMove':
            return pokemonConstant.legacyMove[name];

        case 'type':
            return pokemonConstant.type[name];

        case 'typeImg': 
            return typeImg[name];

        default:
            console.log('getResource defaulted');
            break;
    }
}