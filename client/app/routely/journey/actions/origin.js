'use strict';

import { bulkCreate } from 'utils/actions';

const actionList = [
    {
        name: 'updateOriginValue',
        args: ['UPDATE_ORIGIN_VALUE', 'originValue']
    }
];

export default bulkCreate(actionList);
