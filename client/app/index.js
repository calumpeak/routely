'use strict';

// Base Style
import 'styles/app.css';

// Core
import React, { Component } from 'react';
import Header from 'components/header';
import Travely from './travely';

// providers
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Application extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <Header title = 'Travely'/>
                    <div id = "container">
                        <Travely />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Application;
