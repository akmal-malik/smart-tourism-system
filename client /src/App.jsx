import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tourism from "./pages/Tourism";
import Booking from "./pages/Booking";
import Data from "./pages/Data";
import Request from "./pages/Request";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/data" element={<Data />} />
        <Route path="/request" element={<Request />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;