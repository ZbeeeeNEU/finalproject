'use strict';

const Controller =require('../controller/todoController');

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
};

