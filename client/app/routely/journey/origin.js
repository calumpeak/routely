'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocationAutoComplete from 'components/auto-complete/location';
import actions from './actions/origin';

/**
 * Journey Origin Field
 *
 * @class Origin
 */
class Origin extends Component {
    constructor (props) {
        super(props);

        this.onOriginChange = this.onOriginChange.bind(this);
    }

    /**
     * Handles the origin fields value changes
     * Passes new values to state/store
     *
     * @for Origin
     * @method onOriginChange
     * @param {Object} event synthetic event
     */
    onOriginChange (value) {
        const { updateOriginValue } = this.props.actions;

        updateOriginValue(value);
    }

    render () {
        const { originValue } = this.props.origin;

        return (
            <LocationAutoComplete
                fullWidth = {true}
                hintText = 'Origin'
                onChange = {this.onOriginChange}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    origin: state.journey.origin
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Origin);
