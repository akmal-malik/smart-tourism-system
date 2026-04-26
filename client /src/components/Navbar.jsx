import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-3">
          
          {/* Logo Section - Clickable */}
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

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link 
              to="/" 
              className="text-white hover:text-amber-200 transition-colors duration-200 font-medium px-2 py-1"
            >
              Home
            </Link>
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