'use strict';

import { createStore, combineReducers } from 'redux';
import journey from 'routely/journey/reducers';

const store = createStore(combineReducers({
    journey
}));

window.s = () => console.log(store.getState());

export default store;
