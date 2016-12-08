'use strict';

import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import _ from 'lodash';

import 'styles/map.css';

const DirectionsMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom = {15}
        center = {props.location}
    >
        {props.directions
            ? <DirectionsRenderer {...props} />
            : null
        }
    </GoogleMap>
));

DirectionsMap.propTypes = {
    location: PropTypes.object,
    directions: PropTypes.object
};

export default DirectionsMap;
