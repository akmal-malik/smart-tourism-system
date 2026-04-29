function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519817650390-64a93db51149",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Gallery
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explore the beauty of Bangkong Kahoy Valley through stunning visuals.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Photo Collection
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Gallery;