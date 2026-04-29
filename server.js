const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");
const requestRoutes = require("./routes/requestRoutes");
const adminAuthRoutes = require("./routes/adminAuth");

// ✅ FIRST: middleware
app.use(cors());
app.use(express.json());

// ✅ THEN: routes
app.use("/api", bookingRoutes);
app.use("/api", requestRoutes);
app.use("/api/admin", adminAuthRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

mongoose.connect("mongodb+srv://akmalmalik6899_db_user:H62CoJOu1ug3vY3q@tourism-website.odl1blr.mongodb.net/?appName=Tourism-Website")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.listen(5003, () => {
  console.log("Server running on port 5003");
});