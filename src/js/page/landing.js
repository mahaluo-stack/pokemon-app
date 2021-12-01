import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainComponent } from '../component/mainComponent';
import { pageAction } from '../store';

export function Landing() {

    const dispatch = useDispatch();

    const { pageState } = useSelector(state => state.appState);
    const { pageLoad } = pageState;

    useEffect(() => {

        dispatch(pageAction.mount('/landing'));
    }, [])

    return (
        <div>

            {pageLoad ?
                <MainComponent name={'pageLoader'} />
                :
                <p>page under construction</p>
            }

        </div>
    )
}

