const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  teachers: [mongoose.Schema.Types.ObjectId],
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;