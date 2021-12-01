import React from 'react';
import PropTypes from 'prop-types';

import { ActiveSearchFilters } from './partial';
import { SmallGrid, MediumGrid, LargeGrid } from './partial/grid';

export function PartialComponent({ name }) {
    return (
        <>
            {{
                'activeSearchFilters': <ActiveSearchFilters />,
                'smallGrid': <SmallGrid />,
                'mediumGrid': <MediumGrid />,
                'largeGrid': <LargeGrid />,
            }[name]}
        </> 
    )
}

PartialComponent.propTypes = {
    name: PropTypes.string.isRequired
}