import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tourism from "./pages/Tourism";
import Booking from "./pages/Booking";
import Data from "./pages/Data";
import Request from "./pages/Request";
import Admin from "./pages/Admin";

// NEW PAGES (create these)
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
        <Route path="/admin" element={<Admin />} />

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