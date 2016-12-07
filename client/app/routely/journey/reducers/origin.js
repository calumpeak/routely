'use strict';

import _ from 'lodash';

const initialState = {
    originValue: ''
};

const originReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_ORIGIN_VALUE':
            return _.assign({}, state, {
                originValue: action.originValue
            });
        default:
            return state;
    }
};

export default originReducer;
