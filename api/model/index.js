var mongoose = require('mongoose');
var {Schema, model} = mongoose
var TaskSchema = new Schema ({
    name: String,
})
module.exports = model("Task", TaskSchema)