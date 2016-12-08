'use strict';

import React, { Component } from 'react';
import DirectionsMap from 'components/maps/directionMap';

const DirectionsService = new google.maps.DirectionsService();

/**
 * Map Class
 * Handles Map rendering and Direction input
 *
 * @class Map
 */
class Map extends Component {
    constructor (props) {
        super(props);

        /**
         * Default State to London
         */
        this.state = {
            location: {
                lat:  51.5074,
                lng:  0.1278
            },
            directions: null
        };

        this.updateLocation = this.updateLocation.bind(this);
    }

    componentDidMount () {
        const { route } = this.props;
        // TODO check if geolocation available as doesn't work on insecure connections
        // Chrome appears to be fine on localhost but not on safari for example
        window.navigator.geolocation.getCurrentPosition(this.updateLocation);

        if (route.origin && route.destination) {
            DirectionsService.route(route, (directions, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.updateDirections(directions);
                } else {
                    // TODO: User Notification
                    console.log('Something Went Wrong!!!');
                }
            });
        }
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

    updateDirections (directions) {
        this.setState({
            directions
        });
    }

    render () {
        return (
            <DirectionsMap
                containerElement = {<div style={{ height: `100%` }} />}
                mapElement = {<div style={{ height: `100%` }} />}
                {...this.state}
            />
        );
    }
}

export default Map;
