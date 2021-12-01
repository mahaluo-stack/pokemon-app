import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import PropTypes from 'prop-types';
import { VariationItem } from './variationItem';
import { getResource } from '../../../util/getPokemonResource';

export function SmallPokemonCard({ pokemon }) {

    const { name, types, img, variations, bestMoves } = pokemon;
    const ref = useRef();
    const [inViewRef, inView] = useInView();

    const [state, setState] = useState({
        bestFast: bestMoves.fastMove,
        bestCharge: bestMoves.chargeMove,
        variations: variations
    });

    const setRefs = useCallback((node) => {
        ref.current = node;
        inViewRef(node);
    }, [inViewRef]);

    useEffect(() => {
        handleVariations();
    }, []);

    function handleVariations() {
        let omitShadow = false;
        let shadowIndex;

        state.variations.forEach((variation, index) => {
            if (variation == 'shadow') {
                shadowIndex = index;
            }
            if (variation == 'shinyShadow') {
                omitShadow = true;
            }
        });

        if (omitShadow) {
            setState({
                ...state,
                variations: state.variations.filter(function (item) { return item !== 'shadow' })
            })
        }
        variations.sort();
        variations.reverse();
    };

    return (
        <div className={'pokemonCardContainer'} ref={setRefs}>

            <div className={'pokemonCard'}>

                {inView ?
                    <>
                        <div className={'pokemonCardHeader'}>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ marginLeft: '16px' }}>{name}</p>

                                <div className={'pokemonCardVariationRow'}>
                                    <VariationIcon />
                                </div>
                            </div>

                            <div className={'pokemonCardHeaderImageContainer'}>
                                <img src={getResource('pokemonImg', img[0])} className={'pokemonImage'} />
                            </div>
                        </div>

                        <div className={'pokemonCardBody'}>

                            <div className={'pokemonCardTypeRow'}>
                                {types && types.map((item, index) => {
                                    return (
                                        <img key={index} src={getResource('typeImg', item)} width={'25px'} height={'25px'} style={{ padding: '2px' }} />
                                    )
                                })}
                            </div>

                            <p style={{ margin: '0px', marginLeft: '16px' }}>{state.bestFast}</p>
                            <p style={{ margin: '0px', marginLeft: '16px' }}>{state.bestCharge}</p>

                        </div>

                        <div className={'pokemonCardFooter'}>
                            <p> moveset: highest dps </p>
                        </div>
                    </>
                    :
                    <div style={{ height: '30px', width: '30px' }}>
                        {/* <ComponentLoader /> */}
                    </div>
                }
            </div>

        </div>
    );


    function VariationIcon() {

        if (state.variations) {
            return (
                state.variations.map((variation, index) => {
                    switch (variation) {
                        case 'shiny':
                        case 'shadow':
                        case 'shinyShadow':
                        case 'mega':
                        case 'gender':
                            return (<div key={index} style={{ marginBottom: 'auto', marginTop: 'auto', marginLeft: '5px' }}><VariationItem name={variation} /></div>);
                        case 'shinyMega':
                        case 'shinyCostume':
                        case 'costume':
                        default:
                            return null;
                    }
                })
            )
        }
        else {
            return null;
        }
    };
}


SmallPokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
}