'use strict';

const legReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_LEGS':
            return action.legs
        default:
            return state;
    }
};

export default legReducer;
