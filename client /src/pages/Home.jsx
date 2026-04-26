import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-sans">
      
      {/* HERO SECTION */}
      <div id="overview" className="relative bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center h-[85vh] flex items-center justify-center">
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to Tourism Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow">
            Explore Bangkong Kahoy Valley – Your gateway to nature and peace.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/booking" 
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Book Now
            </Link>

            <Link 
              to="/data" 
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              View Data
            </Link>

            <Link 
              to="/request" 
              className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request Data
            </Link>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div id="attractions" className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What You Can Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-semibold mb-3 text-green-700">Book Your Visit</h3>
              <p className="text-gray-600">
                Reserve your stay and enjoy the breathtaking bamboo forests and serene environment at Bangkong Kahoy Valley.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">View Tourism Data</h3>
              <p className="text-gray-600">
                Access real-time visitor statistics, peak season trends, and other key tourism insights instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-700">Request Information</h3>
              <p className="text-gray-600">
                Submit data requests, ask questions, and track their status easily through our portal.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            About Bangkong Kahoy Valley
          </h2>

          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Bangkong Kahoy Valley is a unique eco-tourism destination known for its lush bamboo forests,
            peaceful environment, and natural beauty. This platform helps visitors book their stay,
            explore tourism data, and access important information easily – all in one place.
          </p>

          <div className="mt-10">
            <Link 
              to="/tourism" 
              className="inline-block bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-6 py-2 rounded-full font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div id="gallery" className="py-20 px-6 md:px-10 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Gallery
        </h2>

        <p className="text-gray-600">
          Beautiful snapshots of Bangkong Kahoy Valley (you can expand this later)
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="py-20 px-6 md:px-10 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Contact Us
        </h2>

        <p className="text-gray-600">
          📍 Dolores, Quezon <br />
          📞 +63 900 000 0000 <br />
          📧 tourism@bkv.com
        </p>
      </div>

    </div>
  );
}

export default Home;