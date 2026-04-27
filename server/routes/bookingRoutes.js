const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

const auth = require("../middleware/auth"); // ✅ ADD THIS


// ================= CREATE BOOKING (PUBLIC) =================
router.post("/book", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      date,
      guests,
      package: selectedPackage,
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


router.delete("/bookings/:id", auth, async (req, res) => {
  try {
    console.log("DELETE HIT:", req.params.id); // 🔥 DEBUG

    const deleted = await Booking.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Delete failed" });
  }
});

router.put("/bookings/:id", auth, async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});



// ================= GET ALL BOOKINGS (PROTECTED) =================
router.get("/bookings", auth, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});


// ================= GET STATS (PROTECTED) =================
router.get("/stats", auth, async (req, res) => {
  try {
    const bookings = await Booking.find();

    const totalBookings = bookings.length;

    const totalVisitors = bookings.reduce(
      (sum, b) => sum + Number(b.guests || 0),
      0
    );

    const packageStats = {};
    bookings.forEach((b) => {
      if (b.package) {
        packageStats[b.package] = (packageStats[b.package] || 0) + 1;
      }
    });

    res.json({
      totalBookings,
      totalVisitors,
      packageStats,
    });

  } catch (error) {
    res.status(500).json({ error: "Error fetching stats" });
  }
});

module.exports = router;