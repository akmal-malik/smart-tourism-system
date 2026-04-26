import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      
      {/* HERO SECTION */}
      <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-white text-center">
        
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Tourism Portal
        </h1>

        <p className="text-xl mb-6">
          Explore Bangkong Kahoy Valley
        </p>

        <div className="flex gap-4">
          <Link to="/booking" className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700">
            Book Now
          </Link>

          <Link to="/data" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            View Data
          </Link>

          <Link to="/request" className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900">
            Request Data
          </Link>
        </div>

      </div>

      {/* INFO SECTION */}
      <div className="py-16 px-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          What You Can Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Book Your Visit</h3>
            <p>Reserve your stay and enjoy nature at Bangkong Kahoy Valley.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">View Tourism Data</h3>
            <p>Access visitor statistics and tourism insights instantly.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">Request Information</h3>
            <p>Submit data requests and track their status easily.</p>
          </div>

        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Bangkong Kahoy Valley
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-600">
          Bangkong Kahoy Valley is a unique eco-tourism destination known for its bamboo forests,
          peaceful environment, and natural beauty. This platform helps visitors book their stay,
          explore tourism data, and access important information easily.
        </p>
      </div>

    </div>
  );
}

export default Home;