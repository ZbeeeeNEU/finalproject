const username=require("./modules/username");
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection


//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//Enabling CORS
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

exports.getApp=()=>{
    return this.app;
};
mongoose.connect('mongodb://localhost:27017/finalProject', {});
mongoose.Promise = global.Promise;
console.log("This is :"+username.getUsername());
const initApp = require('./modules/app');
initApp(app);// launch the app
app.listen(port);
console.log('Google Calendar RESTful API server started on: ' + port);