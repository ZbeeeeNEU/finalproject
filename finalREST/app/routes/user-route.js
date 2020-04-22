'use strict';

const userController = require('../controllers/user-controller');

module.exports = (app) => {
    app.route('/users')
        .get(userController.list)
        .post(userController.save);

    app.route('/users/:name')
        .get(userController.get)
        .put(userController.update)
        .delete(userController.delete);
};