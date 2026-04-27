const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// CREATE BOOKING
router.post("/book", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      date,
      guests,
      package: selectedPackage, // alias to avoid confusion
      specialRequests,
    } = req.body;

    const newBooking = new Booking({
      name,
      email,
      phone,
      date,
      guests,
      package: selectedPackage,
      specialRequests,
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving booking" });
  }
});


// GET ALL BOOKINGS
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }); // latest first
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});


// GET STATS
router.get("/stats", async (req, res) => {
  try {
    const bookings = await Booking.find();

    const totalBookings = bookings.length;

    const totalVisitors = bookings.reduce(
      (sum, b) => sum + Number(b.guests || 0),
      0
    );

    // OPTIONAL: package breakdown (nice upgrade)
    const packageStats = {};
    bookings.forEach((b) => {
      if (b.package) {
        packageStats[b.package] = (packageStats[b.package] || 0) + 1;
      }
    });

    res.json({
      totalBookings,
      totalVisitors,
      packageStats, // 👈 new useful data
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching stats" });
  }
});

module.exports = router;