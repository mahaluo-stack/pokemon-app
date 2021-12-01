import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainComponent } from '../component/mainComponent';
import { pageAction } from '../store';

export function All() {

    const dispatch = useDispatch();

    const { pageState } = useSelector(state => state.appState);
    const { pageLoad, pageMount } = pageState;

    useEffect(() => {

        if (!pageMount) {
            dispatch(pageAction.mount('/all'));
        }
    }, []); 
 
 
    return (
        <div className={'allPageContainer'}>

            {pageLoad ?
                <MainComponent name={'pageLoader'} />
                :
                <MainComponent name={'responsivePokemonGrid'} />
            }

        </div>
    )
}


