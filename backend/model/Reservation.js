const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  studentName: String,
  createAt: {
    type: String,
  },
  status: String, // This can be 'pending', 'accepted', or 'rejected'
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher", // Reference to the Teacher model
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student", // Reference to the Teacher model
  },
  phone: {
    type: Number,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
