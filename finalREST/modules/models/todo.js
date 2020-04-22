'use strict';

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const username=require('../username');
//create the schema
let ActivitySchema=new Schema({
    title:{
        type: String,
        required:"Type is missing"
    },
    description:{
        type: String,
    },
    StartTime:{
        type: String,
    },
    EndTime:{
        type: String,
    },
    location: {
        type: String,
    },
    createdDate: {
        type: String
    },
    modifiedDate: {
        type: String
    },
    username:{
        type: String
    },
    Date:{
        type: String,
    }
}, {
    versionKey: false
});


//generate the id
ActivitySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ActivitySchema.set('toJSON', {
    virtuals: true
});
console.log("in the todo:"+username.getUsername());
//module.exports = mongoose.model('activities', ActivitySchema);
module.exports=mongoose.model('activities', ActivitySchema);
