'use strict';

const mongoose=require('mongoose'), Todo=mongoose.model('activities');

/**
 * function to search objects
 * @param params
 * @returns {Promise}
 */
exports.search= (params)=> {
    const promise=Todo.find(params).exec();
    return promise;
};

/**
 * Save a todo object
 * @param todo
 * @returns {Promise}
 */
exports.save= (todo)=>{
    const newTodo=new Todo(todo);
    return newTodo.save();
};

/**
 * find a todo resource by id
 * @param id
 * @returns {Promise|RegExpExecArray|*}
 */
exports.get= (id) =>{
    const todoPromise=Todo.findById(id).exec();
    return todoPromise;
};

/**
 * Update an object
 * @param updated
 * @returns {Promise|RegExpExecArray|*}
 */
exports.update= (updated)=>{
    const updatedPromise=Todo.findByIdAndUpdate(updated.id, updated).exec();

    return updatedPromise;
};


/**
 * Delete an object
 * @param id
 * @returns {Promise|RegExpExecArray|*}
 */
exports.delete= (id) =>{
    const delPromise=Todo.findByIdAndRemove(id).exec();
    return delPromise;
};