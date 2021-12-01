import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { mainComponentAction } from '../../store';

export function PageLoader() {

    const dispatch = useDispatch();
    
    const { mains } = useSelector(state => state.uiState);
    const { pageLoader } = mains;

    useEffect(() => {

        if (!pageLoader) {

            dispatch(mainComponentAction.push('pageLoader'));
        }
    }, [])

    return (
        <div className={'loaderOverlay'}>
            <div className={'pageLoader'}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}