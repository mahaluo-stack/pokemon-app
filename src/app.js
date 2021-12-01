import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainComponent } from './js/component/mainComponent';
import * as Page from './js/page';
import { windowAction } from './js/store';
import { PrivateRoute, useWindowDimension } from './js/util';

export default function App() {

    const dispatch = useDispatch(); 

    const { height, width } = useWindowDimension();

    const { windowState } = useSelector(state => state.appState);
    const { device } = windowState;

    useEffect(() => {

        dispatch(windowAction.setDevice({ height, width }));
    }, [width]);

    return (
        <>
            {device && device !== null ?
                <BrowserRouter>

                    <MainComponent name={'navbar'} />

                    <Routes>

                        <Route path='/' element={<Page.Landing />} />
                        <Route path='/landing' element={<Page.Landing />} />
                        <Route path='/home' element={<Page.Home />} />
                        <Route path='/all' element={<Page.All />} />
                        <Route path='/pvp' element={<Page.Pvp />} />
                        <Route path='/raids' element={<Page.Raids />} />
                        <Route path='/account' element={<Page.Account />} />

                        <Route
                            path="/accountDetails"
                            element={
                                <PrivateRoute>
                                    <Page.AccountDetails />
                                </PrivateRoute>
                            }
                        />

                    </Routes>
                </BrowserRouter>
                :
                <p>failed to establish device window width, it may not be supported.</p>
            }
        </>
    )
}

