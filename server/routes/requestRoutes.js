const express = require("express");
const router = express.Router();
const Request = require("../models/Request");
const auth = require("../middleware/auth"); // ✅ FIX

const nodemailer = require("nodemailer");

// ================= CREATE REQUEST =================
router.post("/request", async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();

    res.status(201).json({ message: "Request submitted" });
  } catch (error) {
    res.status(500).json({ error: "Error saving request" });
  }
});


// ================= SEND REPLY EMAIL =================
router.post("/reply", auth, async (req, res) => {
  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_email@gmail.com",       // ⚠️ replace
        pass: "your_app_password"           // ⚠️ app password only
      }
    });

    await transporter.sendMail({
      from: "your_email@gmail.com",
      to: email,
      subject: "Response to your request",
      text: message
    });

    res.json({ message: "Reply sent successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed" });
  }
});


// ================= GET ALL REQUESTS =================
router.get("/requests", async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Error fetching requests" });
  }
});

module.exports = router;