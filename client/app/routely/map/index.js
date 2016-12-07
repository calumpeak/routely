'use strict';

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import 'styles/map.css';

const DirectionsMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom = {15}
        center = {props.location}
    />
));

/**
 * Map Class
 * Handles Mapping and Direction input
 *
 * @class Map
 */
class Map extends Component {
    constructor () {
        super();

        this.state = {
            location: {
                lat:  51.5074,
                lng:  0.1278
            }
        };

        this.updateLocation = this.updateLocation.bind(this);
    }

    componentDidMount () {
        // TODO check if geolocatio available as doesn't work on insecure connections
        // Chrome appears to be fine on localhost but not on safari for example
        window.navigator.geolocation.getCurrentPosition(this.updateLocation);
    }

    /**
     * Updates the location state when given a position object
     *
     * @for Map
     * @method updateLocation
     * @param {Object} pos
     * @param {Object} pos.coords
     */
    updateLocation (pos) {
        const { latitude: lat, longitude: lng } = pos.coords;

        this.setState({
            location: { lat, lng }
        });
    }

    render () {
        const { location } = this.state;
        return (
            <DirectionsMap
                containerElement = {<div style={{ height: `100%` }} />}
                mapElement = {<div style={{ height: `100%` }} />}
                location = {location}
            />
        );
    }
}

export default Map;
