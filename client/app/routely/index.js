'use strict';

import React, { Component } from 'react';
import Map from './map';
import Journey from './journey';

class Routely extends Component {
    render () {
        return (
            <div className = 'wrapper'>
                <Journey />
                <Map />
            </div>
        );
    }
}

export default Routely;
