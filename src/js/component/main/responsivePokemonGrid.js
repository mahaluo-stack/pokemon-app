import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pokemonJSONAction, mainComponentAction } from '../../store';
import { PartialComponent } from '../partialComponent';

export function ResponsivePokemonGrid() {

    const dispatch = useDispatch();

    const { pokemonJSONState } = useSelector(state => state.dataState);
    const { pokemonArray, loading } = pokemonJSONState;

    const { windowState } = useSelector(state => state.appState);
    const { device } = windowState;

    const { mains } = useSelector(state => state.uiState);
    const { responsivePokemonGrid } = mains;

    useEffect(() => {

        if (!pokemonArray) {    
    
            dispatch(pokemonJSONAction.loadJSON());
        }

        if (!responsivePokemonGrid) {

            dispatch(mainComponentAction.push('responsivePokemonGrid'));
        }
        
        if (pokemonArray && responsivePokemonGrid) {
    
            dispatch(mainComponentAction.toggle({ type: 'mainComponentLoading', name: 'responsivePokemonGrid', value: loading }));
        }

    }, [loading]);

    return (
        <>
            {loading ? 
                <div className={'componentLoader'}></div>
                :
                <div className={'responsivePokemonGridContainer'}>
                    {{
                        'tiny': <PartialComponent name={'smallGrid'} />,
                        'small': <PartialComponent name={'smallGrid'} />,
                        'medium': <PartialComponent name={'mediumGrid'} />,
                        'large': <PartialComponent name={'largeGrid'} />,
                        'desktop': <PartialComponent name={'largeGrid'} />,
                    }[device]}
                </div>
            }
        </>
    )
}

