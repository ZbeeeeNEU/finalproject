'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 */
let userSchema = new Schema({
    userName: {
        type: String
    },
    nickName: {
        type: String
    },
    password: {
        type: String
    }
},
{
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('user', userSchema);