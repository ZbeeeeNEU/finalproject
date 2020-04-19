'use strict';

const orderRoute = require('./todoRoute');

module.exports = (app) => {
    orderRoute(app);
};