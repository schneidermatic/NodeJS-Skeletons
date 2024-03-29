var express = require("express");

// Setup express app
var app = express();
var mongo_hostname = process.env.MONGO_HOSTNAME;
console.log("==> " + mongo_hostname)

//Import the mongoose module
var mongoose = require('mongoose');

//Set mongodb connection options
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 20000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

//Set up default mongoose connection
//var uri = "mongodb://admin:changeme@" + mongo_hostname + ":27017/myapp"
var uri = "mongodb://admin:changeme@mongodb:27017/myapp"
mongoose.connect(uri, options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    var kittySchema = new mongoose.Schema({
        name: String
    });

    var Kitten = mongoose.model('Kitten', kittySchema);

    var instance = new Kitten({ name: 'Silence' });

    instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });

    console.log("The kitten's name is '" + instance.name + "'.");
});

module.exports = app;