
var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    userid: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
});

var user = mongoose.model("User", userSchema);

module.exports = user;