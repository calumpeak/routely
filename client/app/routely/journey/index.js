'use strict';

import React, { Component } from 'react';
import { Card, CardMedia } from 'material-ui/Card';
import Origin from './origin';
import Destination from './destination';
import RaisedButton from 'material-ui/RaisedButton';

const cardStyle = {
    width: '300px',
    margin: '20px',
    position: 'absolute',
    maxHeight: 'Calc(100vh - 75)',
    top: 65,
    padding: 10
};

const buttonStyle = {
    marginTop: 10
};

class Journey extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Card style = {cardStyle}>
                <CardMedia>
                    <Origin />
                    <Destination />
                    <RaisedButton label="Route!" primary={true} style = {buttonStyle}/>
                </CardMedia>
            </Card>
        );
    }
}

export default Journey;
