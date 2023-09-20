const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const teacherSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "teacher must have name"],
  },
  email: {
    type: "String",
    required: [true, "teacher must have email"],
    lowercase: true,
    unique: true,
  },
  teacherIdentity: {
    type: Number,
    required: [true, "teacher must have identity"],
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
    type: Number,
    required: [true, "teacher must have phone"],
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  approve: {
    type: Boolean,
  },
  img: String,
  // Students: [{ type: mongoose.Schema.ObjectId, ref: "Students" }],
  reservation: [{ type: mongoose.Schema.ObjectId, ref: "Student" }],
  Subjects: [{ type: mongoose.Schema.ObjectId, ref: "" }],
});

// I want to hash password here the best place to do that
// place to do that here in the model so I will use pre hook and save event
// save event happen before saving in the prop that I want to save it in the database
teacherSchema.pre("save", async function (next) {
  // I want to re-hash the password just when the password updated or add new one
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

// I want to create an instance method this method will be available on all document in certain collection
teacherSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Teachers = mongoose.model("Teacher", teacherSchema);

module.exports = Teachers;
