import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tourism from "./pages/Tourism";
import Booking from "./pages/Booking";
import Data from "./pages/Data";
import Request from "./pages/Request";

// 🔥 NEW ADMIN SYSTEM
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// OTHER PAGES
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* MAIN ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/data" element={<Data />} />
        <Route path="/request" element={<Request />} />

        {/* 🔐 ADMIN */}
        <Route path="/admin" element={<AdminAuth />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* HOME SUB ROUTES */}
        <Route path="/home/about" element={<About />} />
        <Route path="/home/attractions" element={<Attractions />} />
        <Route path="/home/gallery" element={<Gallery />} />
        <Route path="/home/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;