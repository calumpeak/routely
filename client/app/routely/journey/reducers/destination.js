'use strict';

import uuid from 'node-uuid';

const destination = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DESTINATION':
            return {
                location: '',
                id: uuid.v4()
            };
        default:
            return state;
    }
};

const initialState = [
    { location: '', id: uuid.v4() }
];

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DESTINATION':
            return [...state, destination(state, action)];
        case 'REMOVE_DESTINATION':
            return state.filter(obj => obj.id !== action.id);
        case 'UPDATE_DESTINATION_VALUE':
            return state.map((obj) => {
                if (obj.id === action.id) {
                    obj.location = action.locationValue
                }

                return obj;
            });
        default:
            return state;
    }
};

export default destinationReducer;
