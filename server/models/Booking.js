const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  date: String,
  guests: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);