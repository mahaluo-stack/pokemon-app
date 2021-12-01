import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



export function ActiveSearchFilters() {

    const { pokemonGridState } = useSelector(state => state.uiState);
    const { searchFilters } = pokemonGridState;
    const dispatch = useDispatch(); 

    useEffect(() => {

        console.log('searchfilters:', searchFilters);
    }, [pokemonGridState.searchFilters])

    return (
        <>
            {searchFilters && Object.values(searchFilters).map((filter, index) => {
                return (
                    <p key={index} style={{ padding: '0', margin: '0 auto',  wordWrap: 'break-word' }}>{filter}</p>
                )
            })}
        </>
    )
}

