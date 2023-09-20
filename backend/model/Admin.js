const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

// create admin Schema
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Admin have to have username"],
    unique: [true, "username have to be unique"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "the email must have @(.gmail,.hotmail,etc)"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "provide password"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    validate: {
      validator: function (element) {
        return element == this.password;
      },
      message: "passwords not similar",
    },
  },
});
// I want to hash password here the best
// place to do that here in the model so I will use pre hook and save event
// save event happen before saving in the prop that I want to save it in the database
AdminSchema.pre("save", async function (next) {
  // I want to re-hash the password just when the password updated or add new one
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

// I want to create an instance method this method will be available on all document in certain collection
AdminSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
