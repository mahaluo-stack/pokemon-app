import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { partialComponentAction, pokemonGridAction } from '../../../store';
import { SmallPokemonCard } from '../item/smallPokemonCard';
import { type, chargeMove } from '../../../util';

export function SmallGrid() {

    const dispatch = useDispatch();

    const { mains } = useSelector(state => state.uiState);
    const { smallGrid } = mains;

    const { windowState } = useSelector(state => state.appState);
    const { device } = windowState;

    const { pokemonJSONState } = useSelector(state => state.dataState);
    const { pokemonArray, loading } = pokemonJSONState;

    const { pokemonGridState } = useSelector(state => state.uiState);
    const { nameFilters, searchFilters } = pokemonGridState;

    const [state, setState] = useState({
        open: null,
        searchbar: ''
    });

    useEffect(() => {
        if (!smallGrid) {

            dispatch(partialComponentAction.push('smallGrid'));
        }
    }, []);

    function handleSubmit(e) {

        e.preventDefault();

        if (type[state.searchbar]) {
            dispatch(pokemonGridAction.addSearchFilter(type[state.searchbar]));
        }
        else if (chargeMove[state.searchbar]) {
            dispatch(pokemonGridAction.addSearchFilter(chargeMove[state.searchbar]));
        }
        else if (fastMove[state.searchbar]) {
            dispatch(pokemonGridAction.addSearchFilter(fastMove[state.searchbar]));
        }
        else {
            dispatch(pokemonGridAction.addSearchFilter(fastMove[state.searchbar]));
        }
    
        setState({
            ...state,
            searchbar: ''
        });
    };

    function handleChange(e) {

        setState({
            ...state,
            searchbar: e.value
        });
    };

    function handleRemoveFilter(item) {

        dispatch(pokemonGridAction.removeSearchFilter(item));
    };

    function nameFilter(name) {
        let string = name;

        if (string.includes('shadow')) {
            string = 'shadow';
        }
        else if (string.includes('mega') && !string.includes('meganium') && !string.includes('yanmega')) {
            string = 'mega';
        }

        return nameFilters[string] || nameFilters[string] == false ? false : true;
    };

    return (
        <>
            <div style={{ gridArea: 'searchbar' }}>
                <form onSubmit={() => handleSubmit(event)}>
                    <input
                        style={{ width: '100%' }}
                        type={'search'}
                        name={'searchFilter'}
                        placeholder={'filter.. '}
                        value={state.searchbar}
                        onChange={() => handleChange(event.target)}
                    />
                </form>
            </div>

            <div style={{ gridArea: 'searchList' }}>
                {searchFilters && Object.values(searchFilters).map((item, index) => {
                    return (
                        <div key={index} style={{ height: '20px', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', backgroundColor: index % 2 == 0 ? 'rgba(243, 239, 245, 0.1)' : 'transparent' }}>
                            <p>{item}</p>

                            <div style={{ height: '20px', width: '20px', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className={'deleteIconCircle'} onClick={() => handleRemoveFilter(item)}>
                                    <div className={'deleteIconCross'}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div style={{ gridArea: 'pokemonList' }}>
                {pokemonArray && Object.values(pokemonArray).map((item, index) => {
                    return nameFilter(item.name) ?
                        (
                            <div key={index} style={{ height: '200px', marginBottom: '40px' }}>
                                <SmallPokemonCard pokemon={item} />
                            </div>
                        )
                        :
                        null
                })}
            </div>
        </>
    )
}