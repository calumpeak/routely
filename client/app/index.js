'use strict';

// Base Style
import 'styles/app.css';

// Core
import React from 'react';
import store from 'store';
import Header from 'components/header';
import Routely from './routely';


// providers
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Lets theme it and scrap the default color scheme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';

const theme = getMuiTheme({
    palette: {
        primary1Color: colors.teal700,
        primary2Color: colors.teal500,
        primary3Color: colors.teal100,
        accent1Color: colors.blueGrey600,
        accent2Color: colors.blueGrey500,
        accent3Color: colors.blueGrey400
    }
});

const Application = () => (
    <Provider store = {store}>
        <MuiThemeProvider muiTheme = {theme}>
            <div>
                <Header title = 'Routely'/>
                <div id = "container">
                    <Routely />
                </div>
            </div>
        </MuiThemeProvider>
    </Provider>
);

export default Application;
