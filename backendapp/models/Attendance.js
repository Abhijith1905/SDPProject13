const mongoose = require("mongoose");
const Student = require("./Student");

const attendanceSchema = new mongoose.Schema({
  studentid: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  isPresent: {
    type: Boolean,
    required: true,
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema, "Attendance");

module.exports = Attendance;
