import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-900 text-white p-4 flex justify-between items-center border-4 border-red-500">
      
      <h1 className="text-2xl font-bold">
        Tourism Portal
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/tourism" className="hover:text-gray-300">Tourism</Link>
        <Link to="/booking" className="hover:text-gray-300">Booking</Link>
        <Link to="/data" className="hover:text-gray-300">Data</Link>
        <Link to="/request" className="hover:text-gray-300">Request</Link>
      </div>

    </div>
  );
}

export default Navbar;