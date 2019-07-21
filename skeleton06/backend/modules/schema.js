
var mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    time: { type: Date, required: true }
});

var todo = mongoose.model("Todo", todoSchema);

module.exports = todo;