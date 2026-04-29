function Attractions() {
  const attractions = [
    {
      title: "Bamboo Forest",
      desc: "Walk through the iconic bamboo-lined pathways that create a peaceful and scenic atmosphere.",
      emoji: "🌿",
    },
    {
      title: "Viewing Deck",
      desc: "Enjoy panoramic views of the surrounding mountains and lush greenery.",
      emoji: "🏞️",
    },
    {
      title: "Hanging Bridge",
      desc: "Experience a thrilling walk across a bamboo bridge surrounded by nature.",
      emoji: "🌉",
    },
    {
      title: "Camping Area",
      desc: "Spend a night under the stars with a relaxing and refreshing camping experience.",
      emoji: "🏕️",
    },
    {
      title: "Photo Spots",
      desc: "Capture Instagram-worthy moments with beautiful natural backdrops.",
      emoji: "📸",
    },
    {
      title: "Eco Trails",
      desc: "Explore nature trails and discover the rich biodiversity of the valley.",
      emoji: "🌳",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* HERO */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Attractions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover the must-visit spots inside Bangkong Kahoy Valley.
        </p>
      </div>

      {/* ATTRACTIONS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore the Valley
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Ready to Visit?
        </h2>
        <p className="text-gray-600 mb-6">
          Plan your trip and explore these attractions in person.
        </p>
        <a
          href="/booking"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Book Your Visit
        </a>
      </div>

    </div>
  );
}

export default Attractions;