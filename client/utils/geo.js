'use strict';

/**
 * Gets a users current location if it's allowed
 *
 * @method currentPosition
 * @param {Callback} callback
 */
const currentPosition = (callback) => {
    if (!navigator.geolocation) {
        return;
    }

    // Crude attempt to catch protocol errors when user isn't https
    // Though its not likely to throw an error, instead the browser will block
    try {
        navigator.geolocation.getCurrentPosition(callback);
    } catch (e) {
        return;
    }
};

/**
 * Makes a call to googles DirectionService with a route object
 * As async, passes directions back in callback
 *
 * @method directions
 * @param {Object} route see https://developers.google.com/maps/documentation/javascript/directions
 * @param {Callback} callback
 */
const directions = (route, callback) => {
    // TODO: We should probably check that google global has loaded
    const DirectionsService = new google.maps.DirectionsService();

    if (!route.origin && !route.destination) {
        return;
    }

    DirectionsService.route(route, (directions, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            callback(null, directions);
        } else {
            callback({ error: status });
        }
    });
};


export {
    currentPosition,
    directions
};
