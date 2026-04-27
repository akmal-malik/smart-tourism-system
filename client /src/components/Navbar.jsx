import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();

    // 👉 Track clicks for admin trigger
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // 🔥 If 5 clicks → go to admin login
    if (newCount === 5) {
      navigate("/admin");
      setClickCount(0);
      return;
    }

    // 👉 Normal click → show popup
    setShowLogo(true);

    // 👉 Reset counter if user pauses
    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center py-3">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <img 
                src={logo} 
                alt="Dolores Quezon Logo" 
                onClick={handleLogoClick}
                className="w-12 h-12 cursor-pointer rounded-full object-cover border-2 border-white shadow-md hover:scale-110 transition"
              />
              <span className="text-white text-xl font-bold tracking-tight">
                Tourism Portal
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 sm:mt-0 items-center">
              
              {/* HOME DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link 
                  to="/" 
                  className="text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1"
                >
                  Home
                </Link>

                {open && (
                  <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
                    
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                      Overview
                    </Link>

                    <Link to="/home/about" className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </Link>

                    <Link to="/home/attractions" className="block px-4 py-2 hover:bg-gray-100">
                      Attractions
                    </Link>

                    <Link to="/home/gallery" className="block px-4 py-2 hover:bg-gray-100">
                      Gallery
                    </Link>

                    <Link to="/home/contact" className="block px-4 py-2 hover:bg-gray-100">
                      Contact
                    </Link>

                  </div>
                )}
              </div>

              {/* OTHER LINKS */}
              <Link 
                to="/tourism" 
                className="text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1"
              >
                Tourism
              </Link>

              <Link 
                to="/booking" 
                className="text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1"
              >
                Booking
              </Link>

              <Link 
                to="/data" 
                className="text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1"
              >
                Data
              </Link>

              <Link 
                to="/request" 
                className="text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1"
              >
                Request
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* 🔥 LOGO POPUP */}
      {showLogo && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowLogo(false)}
        >
          <img 
            src={logo} 
            alt="Full Logo"
            className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;