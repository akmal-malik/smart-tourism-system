const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// POST request
router.post("/request", async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();

    res.status(201).json({ message: "Request submitted" });
  } catch (error) {
    res.status(500).json({ error: "Error saving request" });
  }
});

// GET all requests
router.get("/requests", async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Error fetching requests" });
  }
});

module.exports = router;