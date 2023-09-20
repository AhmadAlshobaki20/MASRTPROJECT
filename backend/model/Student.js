// import mongoose
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
// create user Schema
const StudentSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "user must have user name🤦‍♂️"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "user must have user email📧"],
  },
  password: {
    type: String,
    required: [true, "provide password"],
    minlength: 8,
    select: false,
  },
  ConfirmPassword: {
    type: String,
    validate: {
      validator: function (element) {
        return element == this.password;
      },
      message: "passwords not similar",
    },
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  // teacher: [mongoose.Schema.ObjectId],
  // Subjects: [mongoose.Schema.ObjectId],
});

// I want to hash password here the best place to do that
// place to do that here in the model so I will use pre hook and save event
// save event happen before saving in the prop that I want to save it in the database
StudentSchema.pre("save", async function (next) {
  // I want to re-hash the password just when the password updated or add new one
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

// I want to create an instance method this method will be available on all document in certain collection
StudentSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Students = mongoose.model("Students", StudentSchema);

module.exports = Students;
