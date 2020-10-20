const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    Name: {type: String},
    Surname: {type: String},
    Gender: {type: String},
    DateOfBirth: {type: Date},
    Username: {type: String},
    Password: {type: String},
    createdDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model("User", schema);
