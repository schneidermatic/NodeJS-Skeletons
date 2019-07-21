var mongoose = require('mongoose');

function database() {
  var db = Object.create(database.methods);
  db.init();
  return db;
}

database.methods = {
  init: function() {
    this.mongoose = mongoose;
    this.mongo_hostname = process.env.npm_package_config_mongo_hostname;
    this.mongo_index = "myapp";
    this.mongo_options = {
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
    this.mongo_uri = "mongodb://admin:changeme@" + this.mongo_hostname + ":27017/" + this.mongo_index;
    this.connect();
  },

  connect: function() {
    this.mongoose.connect(this.mongo_uri, this.mongo_options);
    this.db = this.mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
  }
}

module.exports = database()