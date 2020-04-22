'use strict';
/**
 * Exports the resoures
 * @param app
 */
module.exports = (app) => {
    const models = require('./models/todo');
    const appModles=require('../app/models/user');

    const routes = require('./routes/index');
    routes(app);
};