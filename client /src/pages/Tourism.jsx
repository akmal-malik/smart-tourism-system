function Tourism() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold">
          Bangkong Kahoy Valley
        </h1>
      </div>

      {/* INTRO */}
      <div className="p-10 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700">
          Discover the beauty of nature with bamboo forests, peaceful landscapes,
          and a relaxing eco-tourism experience.
        </p>
      </div>

      {/* ATTRACTIONS */}
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Attractions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff" className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Bamboo Forest</h3>
              <p className="text-gray-600">Walk through peaceful bamboo pathways.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">View Deck</h3>
              <p className="text-gray-600">Enjoy scenic mountain views.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1493244040629-496f6d136cc3" className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Nature Walk</h3>
              <p className="text-gray-600">Relax with fresh air and greenery.</p>
            </div>
          </div>

        </div>
      </div>

      {/* GALLERY */}
      <div className="p-10 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" className="rounded-lg" />
          <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" className="rounded-lg" />
          <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e" className="rounded-lg" />
        </div>
      </div>

      {/* INFO */}
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Visitor Information
        </h2>

        <p className="text-gray-700">
          📍 Location: Dolores, Quezon <br />
          ⏰ Opening Hours: 8:00 AM - 6:00 PM <br />
          💰 Entry Fee: ₱100
        </p>
      </div>

    </div>
  );
}

export default Tourism;