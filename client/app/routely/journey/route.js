'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import actions from './actions/route';
import _ from 'lodash';

const buttonStyle = {
    marginTop: 10
};

/**
 * The Route Button
 *
 * @class Route
 */
class Route extends Component {
    constructor (props) {
        super(props);

        this.onRouteClick = this.onRouteClick.bind(this);
    }

    /**
     * On click, we need to build the route object that google's
     * DirectionService expects, we push this to the store for
     * Mapping component to pick up and process
     *
     * @for Route
     * @method onRouteClick
     */
    onRouteClick () {
        const { origin, destination } = this.props;
        const { updateRoute } = this.props.actions;
        // Because the objects are still by reference in the array, we don't get
        // a pure copy
        const destCopy = destination.reduce((newArray, obj) => {
            newArray.push(_.assign({}, obj));
            return newArray;
        }, []);
        const finalDestination = destCopy.pop().location; // Everybody scream
        // Google doesn't like it when you send values it doesn't expect
        const waypoints = destCopy.map((data) => {
            delete data.id;
            return data;
        });

        // We take the last destination as the final destination,
        // Any others get added as waypoints in the journey
        updateRoute(origin.originValue, finalDestination, waypoints);
    }

    /**
     * Checks whether the user is allowed to click
     * Runs through values needed and validates
     *
     * @for Route
     * @method clickAllowed
     * @param {Object} origin
     * @param {Array} destination
     */
    clickAllowed (origin, destination) {
        const originValue = !!origin.originValue;
        const destinationValues = !_.some(destination, (obj) => {
            return obj.location.length === 0;
        });

        return originValue && destinationValues;
    }

    render () {
        const { origin, destination } = this.props;

        return (
            <RaisedButton
                label='Route!'
                primary={true}
                style = {buttonStyle}
                fullWidth = {true}
                onClick = {this.onRouteClick}
                disabled = {!this.clickAllowed(origin, destination)}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    origin: state.journey.origin,
    destination: state.journey.destination
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Route);
