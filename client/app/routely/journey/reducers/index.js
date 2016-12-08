'use strict';

import { combineReducers } from 'redux';
import destination from './destination';
import origin from './origin';
import route from './route';

export default combineReducers({
    destination,
    origin,
    route
});
