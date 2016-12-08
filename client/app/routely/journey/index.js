'use strict';

import React, { Component } from 'react';
import { Card, CardMedia } from 'material-ui/Card';
import Origin from './origin';
import Destination from './destination';
import Route from './route';
import Legs from './legs';

const cardStyle = {
    width: '300px',
    margin: '20px',
    position: 'absolute',
    maxHeight: '85vh',
    overflow: 'auto',
    top: 65,
    padding: 10
};

/**
 * Responsible for rendering out the journey logic card
 * TODO: Put in drawer for mobile
 *
 * @class Journey
 */
class Journey extends Component {
    render () {
        return (
            <Card style = {cardStyle}>
                <CardMedia>
                    <Origin />
                    <Destination />
                    <Route />
                    <Legs />
                </CardMedia>
            </Card>
        );
    }
}

export default Journey;
