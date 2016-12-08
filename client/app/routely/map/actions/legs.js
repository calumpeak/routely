'use strict';

import { bulkCreate } from 'utils/actions';

const actionList = [
    {
        name: 'updateLegs',
        args: ['UPDATE_LEGS', 'legs']
    }
];

export default bulkCreate(actionList);
