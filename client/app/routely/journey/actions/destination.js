'use strict';

import { bulkCreate } from 'utils/actions';

const actionList = [
    {
        name: 'addDestination',
        args: ['ADD_DESTINATION']
    },
    {
        name: 'removeDestination',
        args: ['REMOVE_DESTINATION', 'id']
    },
    {
        name: 'updateDestinationValue',
        args: ['UPDATE_DESTINATION_VALUE', 'locationValue', 'id']
    }
];

export default bulkCreate(actionList);
