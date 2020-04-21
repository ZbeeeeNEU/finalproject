'use strict';

const Controller =require('../controller/todoController');
const username=require('../username');
/**
 * Route attributes
 * @param app
 */
module.exports= (app) =>{
  // app.route('/activities')
  //     .get(Controller.list)
  //     .post(Controller.save);
  //
  // app.route('/activities/:id')
  //     .get(Controller.get)
  //     .put(Controller.update)
  //     .delete(Controller.delete);

    app.route('/'+username.getUsername())
        .get(Controller.list)
        .post(Controller.save);

    app.route('/'+username.getUsername()+'/:id')
        .get(Controller.get)
        .put(Controller.update)
        .delete(Controller.delete);
};

