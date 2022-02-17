//Getting mongoose Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Defining Schema
const logSchema = new Schema(
  {
    datatype: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EachLog", logSchema);
