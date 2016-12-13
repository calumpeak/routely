'use strict';

import React, { Component } from 'react';
import deepEqual from 'deep-equal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DirectionsMap from 'components/maps/directionMap';
import { currentPosition, directions } from 'utils/geo';
import actions from './actions/legs';

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
         * Default State to London Area
         * No other modules need to know about this so lets store it in local state
         */
        this.state = {
            location: {
                lat:  51.51969,
                lng:  -0.09786
            },
            directions: null
        };

        this.updateLocation = this.updateLocation.bind(this);
    }

    componentDidMount () {
        const { route } = this.props;

        // Attempt to focus the map on the user
        currentPosition(this.updateLocation);
    }

    componentDidUpdate (prevProps) {
        const { route } = this.props;
        const { updateLegs } = this.props.actions;

        // We don't want to create an inf loop here
        // So lets check the values we get in props are different
        if (!deepEqual(this.props, prevProps)) {
            // Handle route directions
            directions(route, (error, directions) => {
                if (error) {
                    // TODO
                    return console.log(error);
                }

                updateLegs(directions.routes[0].legs);
                this.updateDirections(directions);
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

    /**
     * Updates the current directions
     *
     * @for Map
     * @method updateDirections
     * @param {Object} directions
     */
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

const mapStateToProps = (state) => ({
    route: state.journey.route
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
