'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import actions from './actions/destination';

const MAX_DESTINATIONS = 4;

const buttonStyle = {
    marginTop: 10
};

class Destination extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { destination } = this.props;
        const { updateDestinationValue, addDestination, removeDestination } = this.props.actions;

        return (
            <div>
                {destination.map((obj) =>
                    <div key = {obj.id}>
                        <TextField
                            hintText = 'Destination'
                            onChange = {(event) => updateDestinationValue(event.target.value, obj.id)}
                            value = {obj.location}
                            fullWidth = {true}
                        />
                    {/*TODO: Delete destination Icon*/}
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

// <IconButton
//     onClick = {() => removeDestination(obj.id)}
//     style = {{}}
// >
//     <DeleteIcon />
// </IconButton>
