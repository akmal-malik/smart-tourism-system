import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="https://placehold.co/48x48?text=BKV" 
              alt="Bangkong Kahoy Valley Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
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

              {/* DROPDOWN */}
              {open && (
                <div className="absolute left-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
                  
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Overview
                  </Link>

                  <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
                    About Us
                  </a>

                  <a href="#attractions" className="block px-4 py-2 hover:bg-gray-100">
                    Attractions
                  </a>

                  <a href="#gallery" className="block px-4 py-2 hover:bg-gray-100">
                    Gallery
                  </a>

                  <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </a>

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
  );
}

export default Navbar;