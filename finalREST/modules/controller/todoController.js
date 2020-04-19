'use strict';

const Services=require('../services/todoServices');

/**
 * The list controller
 * @param request
 * @param response
 */
exports.list= (request, response)=>{
    const totalQuery = request.query.total;
    const params = {};
    if(totalQuery) {
        params.total = totalQuery
    };
    const promise = Services.search(params);
    const result = (orders) => {
        response.status(200);
        response.json(orders);
    };
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * The save controller
 * @param request
 * @param response
 */
exports.save = (request, response) => {
    const todo = Object.assign({}, request.body);
    var date=new Date();
    todo.createdDate=date.toLocaleString();
    const result = (savedTodo) => {
        response.status(201);
        response.json(savedTodo);
    };
    const promise = Services.save(todo);

    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Get todo resource by id controller
 * @param request
 * @param response
 */
exports.get = (request, response) => {
    const orderId = request.params.id;
    const result = (order) => {
        response.status(200);
        response.json(order);
    };
    const promise = Services.get(orderId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Update todo resource controller
 * @param request
 * @param response
 */
exports.update = (request, response) => {
    const todoId = request.params.id;
    const updatedTodo= Object.assign({}, request.body);
    var date=new Date();
    updatedTodo.modifiedDate=date.toLocaleString();
    updatedTodo.id =todoId;
    const result = (order) => {
        response.status(200);
        response.json(order);
    };
    const promise = Services.update(updatedTodo);
    updatedTodo.modifiedDate=new Date();
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Delete controller
 * @param request
 * @param response
 */
exports.delete = (request, response) => {
    const todoId = request.params.id;
    const result = () => {
        response.status(200);
        response.json({
            message: "Successfully Deleted."
        });
    };
    const promise = Services.delete(todoId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};


/**
 * catch the error
 * @param response
 * @returns {errorCallback}
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
    return errorCallback;
};
