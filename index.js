const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const bookingRoutes = require("./routes/bookingRoutes");
const requestRoutes = require("./routes/requestRoutes");
const adminAuthRoutes = require("./routes/adminAuth");

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Routes
app.use("/api", bookingRoutes);
app.use("/api", requestRoutes);
app.use("/api/admin", adminAuthRoutes);

// TEST ROOT
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ✅ ADD THIS (VERY IMPORTANT)
app.get("/api/stats", async (req, res) => {
  res.json({
    totalBookings: 0,
    totalVisitors: 0
  });
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Port fix
const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});