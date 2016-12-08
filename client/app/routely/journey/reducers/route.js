'use strict';

import _ from 'lodash';

const initialState = {
    origin: '',
    destination: '',
    waypoints: [],
    travelMode: 'DRIVING'
};

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ROUTE':
            return _.assign({}, state, {
                origin: action.origin,
                destination: action.destination,
                waypoints: action.waypoints,
                optimizeWaypoints: true,
                travelMode: 'DRIVING'
            });
        default:
            return state;
    }
};

export default routeReducer;
