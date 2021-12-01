import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, ResponsivePokemonGrid, PageLoader } from './main';

export function MainComponent({ name }) {
    return (
        <> 
            {{
                'navbar': <Navbar />,
                'pageLoader': <PageLoader />,
                'responsivePokemonGrid': <ResponsivePokemonGrid />,
            }[name]}
        </> 
    )
}

MainComponent.propTypes = {
    name: PropTypes.string.isRequired
}