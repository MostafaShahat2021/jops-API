const { required } = require("joi");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide name"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please Provide Email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide Valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Provide Password"],
      minlength: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);