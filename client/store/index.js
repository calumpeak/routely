'use strict';

import { createStore, combineReducers } from 'redux';
import journey from 'routely/journey/reducers';
import map from 'routely/map/reducers';

const store = createStore(combineReducers({
    journey,
    map
}));

window.s = () => console.log(store.getState());

export default store;
