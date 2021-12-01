import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { pokedexAction } from '../../../store';


export function TypeFilterItem({ item, index }) {

    const { name, icon } = item;

    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    
    function handleClick() {
        setState(!state);
        dispatch(pokedexAction.toggleTypeFilter({ name, index, state: !state })); 
    }

    return (
        <div>
            <img src={icon} className={'filterItem' + (state ? ' clicked' : '')} onClick={handleClick}/>
        </div>
    )
}


TypeFilterItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}