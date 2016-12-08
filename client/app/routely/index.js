'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './map';
import Journey from './journey';

class Routely extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className = 'wrapper'>
                <Journey />
                <Map route = {this.props.route}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.journey.route
});

export default connect(
    mapStateToProps
)(Routely);
