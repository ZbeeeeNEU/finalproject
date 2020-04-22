'use strict';

const Controller =require('../controller/todoController');
const userController=require('../../app/controllers/user-controller');
const username=require('../username');
/**
 * Route attributes
 * @param app
 */
module.exports= (app) =>{

    app.route('/activities')
        .get(Controller.list)
        .post(Controller.save);

    app.route('/activities/:id')
        .get(Controller.get)
        .put(Controller.update)
        .delete(Controller.delete);
    app.route('/users')
        .get(userController.list)
        .post(userController.save);

    app.route('/users/:name')
        .get(userController.get)
        .put(userController.update)
        .delete(userController.delete);
};

