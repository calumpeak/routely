'use strict';

import { combineReducers } from 'redux';
import destination from './destination';
import origin from './origin';

export default combineReducers({
    destination,
    origin
});
