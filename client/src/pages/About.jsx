function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Bangkong Kahoy Valley
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover a peaceful eco-tourism destination surrounded by nature, culture, and sustainability.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* INTRO */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Our Destination
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Bangkong Kahoy Valley, located in Dolores, Quezon, is a unique eco-tourism destination known for its iconic bamboo forest,
            cool climate, and serene environment. It offers visitors a chance to reconnect with nature while enjoying sustainable tourism experiences.
          </p>
        </section>

        {/* FEATURES */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Visit Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-semibold text-xl mb-2 text-green-700">Nature & Relaxation</h3>
              <p className="text-gray-600">
                Enjoy fresh air, bamboo landscapes, and peaceful surroundings away from city life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">🏞️</div>
              <h3 className="font-semibold text-xl mb-2 text-blue-700">Scenic Views</h3>
              <p className="text-gray-600">
                Experience breathtaking views of mountains, forests, and natural attractions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="font-semibold text-xl mb-2 text-gray-700">Sustainable Tourism</h3>
              <p className="text-gray-600">
                Support eco-friendly practices and responsible tourism initiatives.
              </p>
            </div>

          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h3>
            <p className="text-gray-600">
              To promote sustainable tourism while preserving the natural beauty and cultural heritage of Bangkong Kahoy Valley.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading eco-tourism destination in the Philippines, offering meaningful and memorable experiences to every visitor.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Ready to Explore?
          </h2>
          <p className="text-gray-600 mb-6">
            Book your visit now and experience the beauty of Bangkong Kahoy Valley.
          </p>
          <a
            href="/booking"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Book Now
          </a>
        </section>

      </div>
    </div>
  );
}

export default About;