'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './app';

// Needed for user interaction
import reactTapPlugin from 'react-tap-event-plugin';
reactTapPlugin();

render (
    <App />,
    document.getElementById('routely-app')
);
