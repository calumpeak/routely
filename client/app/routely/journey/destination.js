'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import actions from './actions/destination';

const MAX_DESTINATIONS = 4;

const buttonStyle = {
    marginTop: 10
};

const iconStyle = {
    position: 'absolute',
    right: -10,
    opacity: 0.5
};

/**
 * Responsible for handling destination fields
 *
 * @class Destination
 */
class Destination extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { destination } = this.props;
        const { updateDestinationValue, addDestination, removeDestination } = this.props.actions;

        return (
            <div>
                {destination.map((obj, index) =>
                    <div key = {obj.id}>
                        <TextField
                            hintText = 'Destination'
                            onChange = {(event) => updateDestinationValue(event.target.value, obj.id)}
                            value = {obj.location}
                            fullWidth = {true}
                        />
                        {index ?
                            <IconButton
                                onClick = {() => removeDestination(obj.id)}
                                style = {iconStyle}
                            >
                                <CloseIcon />
                            </IconButton>
                            :null
                        }
                    </div>
                )}
                <RaisedButton
                    label = 'Add Destination'
                    secondary = {true}
                    style = {buttonStyle}
                    onClick = {addDestination}
                    fullWidth = {true}
                    disabled = {destination.length >= MAX_DESTINATIONS}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    destination: state.journey.destination
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Destination);
