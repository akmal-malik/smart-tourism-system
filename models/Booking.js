const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    date: String,
    guests: Number,
    package: String,
    specialRequests: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);