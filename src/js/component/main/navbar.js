import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { pageAction, mainComponentAction } from '../../store';

export function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { mains } = useSelector(state => state.uiState);
    const { navbar } = mains;

    const { windowState } = useSelector(state => state.appState);
    const { device } = windowState;

    const [state, setState] = useState({
        hamburger: {
            active: false,
            open: false,
        },
    })

    useEffect(() => {

        if (!navbar) {

            dispatch(mainComponentAction.push('navbar'));
        }

        if (device == 'small' || device == 'tiny') {

            setState({
                ...state,
                hamburger: {
                    ...state.hamburger,
                    active: true,
                }
            });
        }
        else {

            setState({
                ...state,
                hamburger: {
                    ...state.hamburger,
                    active: false,
                }
            });
        }

    }, [device])

    function handleClick(item) {

        dispatch(pageAction.setPageLoad(true));

        setState({
            ...state,
            hamburger: {
                ...state.hamburger,
                open: false
            }
        });

        dispatch(pageAction.mount('/'+item));
        navigate('/' + item);
    }

    function handleHamburgerClick() {
        setState({
            ...state,
            hamburger: {
                ...state.hamburger,
                open: !state.hamburger.open,
            }
        });
    }

    function handleNavBarClick() {
        if (state.hamburger.open) {
            setState({
                ...state,
                hamburger: {
                    ...state.hamburger,
                    open: false,
                }
            })
        }
    }

    return (
        <>
            <div className={'navbar'} onClick={handleNavBarClick}>

                <p className={'navText'} style={{ marginLeft: '30px' }} onClick={() => handleClick('home')}> pokeys </p>

                {!state.hamburger.active || state.hamburger.open ?
                    <div className={'navbar__navlinks'}>
                        <p className={'navText'} onClick={() => handleClick('all')}> all </p>
                        <p className={'navText'} onClick={() => handleClick('raids')}> raids </p>
                        <p className={'navText'} onClick={() => handleClick('pvp')}> pvp </p>
                        <p className={'navText'} onClick={() => handleClick('account')}> account </p>
                    </div>
                    :
                    null
                }

                {state.hamburger.active ?
                    <div className={'hamburgerCircle'} onClick={handleHamburgerClick}>
                        {state.hamburger.open ?
                            <div className={'hamburgerArrow'}></div>
                            :
                            <>
                                <div className={'hamburgerStripe'}></div>
                                <div className={'hamburgerStripe'}></div>
                                <div className={'hamburgerStripe'}></div>
                            </>
                        }
                    </div>
                    :
                    null
                }
            </div>

            <div style={{ height: '1px', width: '100vw' }} className={'rainbow moveSlow'}></div>
        </>
    )
}
