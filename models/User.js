const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {timestamps: true})

// user model
const User = mongoose.model("user", UserSchema)

// export model
module.exports = User