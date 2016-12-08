'use strict';
import { bulkCreate } from 'utils/actions';

const actionList = [
    {
        name: 'updateRoute',
        args: ['UPDATE_ROUTE', 'origin', 'destination', 'waypoints']
    }
];

export default bulkCreate(actionList);
