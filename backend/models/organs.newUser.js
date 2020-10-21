const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create another collection
const User = new Schema(
  {
    fullName: { type: String },
    dateOfBirth: { type: Date },
    email: { type: String },
    password: { type: String },
    ssn: { type: String },
    adress: { type: String },
    contactNo: { type: String }
  },
  { collection: 'users' },
  { timestamps: true, useUnifiedTopology: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("users", User);