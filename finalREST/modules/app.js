'use strict';
/**
 * Exports the resoures
 * @param app
 */
module.exports = (app) => {
    const models = require('./models/todo');
    const routes = require('./routes/index');
    routes(app);
};