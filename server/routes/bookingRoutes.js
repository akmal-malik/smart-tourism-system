const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/book", async (req, res) => {
  try {
    const { name, date, guests } = req.body;

    const newBooking = new Booking({ name, date, guests });
    await newBooking.save();

    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    res.status(500).json({ error: "Error saving booking" });
  }
});

router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

router.get("/stats", async (req, res) => {
  try {
    const bookings = await Booking.find();

    const totalBookings = bookings.length;

    const totalVisitors = bookings.reduce(
      (sum, b) => sum + Number(b.guests),
      0
    );

    res.json({
      totalBookings,
      totalVisitors,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching stats" });
  }
});

module.exports = router;