'use strict';

import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { placeSearch } from 'utils/geo';

const dataSourceConfig = {
    text: 'description',
    value: 'place_id'
};

const menuStyle = {
    fontSize: '8px',
    padding: 0,
    width: 'auto'
};

class LocationAutoComplete extends Component {
    constructor (props) {
        super(props);

        this.state = {
            predictions: []
        };

        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    handleUpdateInput (value) {
        placeSearch(value, (error, predictions) => {
            if (error) {
                // TODO
                return console.log(error);
            }

            this.setState({
                predictions
            });
        });
    }

    render () {
        const { predictions } = this.state;
        const { hintText, fullWidth, onChange } = this.props;

        return (
            <AutoComplete
                hintText = {hintText}
                fullWidth = {fullWidth}
                onNewRequest = {(chosenValue, index) => {
                    console.log(chosenValue);
                    if (typeof chosenValue === 'object') {
                        chosenValue = chosenValue.place_id;
                    }

                    onChange(chosenValue);
                }}
                openOnFocus = {true}
                onUpdateInput = {this.handleUpdateInput}
                dataSource = {predictions}
                dataSourceConfig = {dataSourceConfig}
            />
        );
    }

}

export default LocationAutoComplete;
