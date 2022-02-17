//Getting mongoose Schema
const mongoose = require('mongoose')
const { Schema } = mongoose;

//Defining Schema
const dataSchema = new Schema({
    uidata:{
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        maxlength: 20,
        minlength: 1
    },
},{timestamps: true})

module.exports = mongoose.model("Data", dataSchema);