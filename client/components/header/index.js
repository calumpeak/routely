'use strict';

import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    position: 'fixed',
    top: 0,
    opacity: 0.7
};

const Header = ({ title }) => (
    <AppBar
        style = {style}
        title = {title}
        showMenuIconButton = {false}
        zDepth = {0}
    />
);

export default Header;
