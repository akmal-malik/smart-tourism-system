import { Link } from "react-router-dom";
import { useState } from "react";

function Tourism() {
  // State for gallery lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // State for newsletter
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  // Gallery images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Bamboo Forest Pathway",
    },
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      title: "Scenic View Deck",
    },
    {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Nature Trail",
    },
    {
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      title: "Sunset Over Valley",
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c622288dbd9f",
      title: "Lush Greenery",
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Mountain View",
    },
  ];

  // Attractions data
  const attractions = [
    {
      name: "Bamboo Forest",
      description:
        "Walk through peaceful bamboo pathways and experience the soothing rustle of leaves. A perfect spot for meditation and nature photography.",
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      duration: "30-45 min",
      difficulty: "Easy",
    },
    {
      name: "View Deck",
      description:
        "Enjoy breathtaking panoramic views of the surrounding mountains and valleys. Ideal for sunrise and sunset watching.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      duration: "15-20 min",
      difficulty: "Easy",
    },
    {
      name: "Nature Walk",
      description:
        "Relax with fresh air and greenery along marked trails. Discover local flora and fauna with guided options available.",
      image:
        "https://images.unsplash.com/photo-1493244040629-496f6d136cc3",
      duration: "1-2 hours",
      difficulty: "Moderate",
    },
    {
      name: "River Trekking",
      description:
        "Follow the crystal-clear river through the valley. Perfect for adventure seekers who love water crossings and rocky paths.",
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
      duration: "2-3 hours",
      difficulty: "Challenging",
    },
    {
      name: "Bamboo Rafting",
      description:
        "Float gently on traditional bamboo rafts. A unique way to experience the river's calm beauty.",
      image:
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d",
      duration: "1 hour",
      difficulty: "Easy",
    },
    {
      name: "Camping Grounds",
      description:
        "Spend a night under the stars in designated camping areas. Bonfire and basic facilities available.",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      duration: "Overnight",
      difficulty: "Moderate",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is the best time to visit Bangkong Kahoy Valley?",
      answer:
        "The best time to visit is during the dry season from November to May. The weather is pleasant, and trails are easily accessible.",
    },
    {
      question: "Are there guided tours available?",
      answer:
        "Yes, guided tours are available for groups of 5 or more. Please book at least 3 days in advance through our booking portal.",
    },
    {
      question: "Is the valley wheelchair accessible?",
      answer:
        "Some areas like the View Deck and main pathways are wheelchair accessible. However, the nature walks and river trekking involve uneven terrain.",
    },
    {
      question: "Can I bring my own food and drinks?",
      answer:
        "Yes, you may bring your own picnic. Designated picnic areas are available. We also have a small cafeteria on site.",
    },
  ];

  // Handle newsletter submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus("Subscribed successfully!");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus(""), 3000);
    }
  };

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigate gallery
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Icons
  const DurationIcon = () => (
    <svg className="w-4 h-4 inline-block mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const DifficultyIcon = () => (
    <svg className="w-4 h-4 inline-block mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const TicketIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <div className="relative bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-medium tracking-wide">Eco-Tourism Destination</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Bangkong Kahoy Valley
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Experience the magic of bamboo forests, breathtaking views, and nature at its finest.
          </p>
          <div className="mt-8">
            <Link
              to="/booking"
              className="inline-block bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Book Your Visit
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-green-600 font-semibold tracking-wide uppercase">Welcome to Paradise</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Discover Nature's Masterpiece</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-600 mt-8 leading-relaxed">
            Discover the beauty of nature with bamboo forests, peaceful landscapes, and a relaxing eco-tourism experience.
            Bangkong Kahoy Valley offers a perfect escape from the city, where you can reconnect with nature and create unforgettable memories.
          </p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <div className="text-4xl font-bold">50+</div>
            <div className="text-green-100">Hectares of Forest</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">6+</div>
            <div className="text-green-100">Attractions</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">4.9</div>
            <div className="text-green-100">Visitor Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">10K+</div>
            <div className="text-green-100">Annual Visitors</div>
          </div>
        </div>
      </div>

      {/* ATTRACTIONS SECTION */}
      <div className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Explore</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Top Attractions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From serene bamboo forests to thrilling river treks, there's something for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`${attraction.image}?w=400&h=300&fit=crop`}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{attraction.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <DurationIcon />
                      <span>{attraction.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <DifficultyIcon />
                      <span>{attraction.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VISITOR INFORMATION CARDS */}
      <div className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Plan Your Trip</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Visitor Information</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LocationIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Dolores, Quezon, Philippines</p>
              <p className="text-sm text-gray-500 mt-2">Approx. 3-4 hours from Manila</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Opening Hours</h3>
              <p className="text-gray-600">Daily: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-500 mt-2">Last entry at 4:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TicketIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Entry Fee</h3>
              <p className="text-gray-600">Adult: ₱100 | Student: ₱80</p>
              <p className="text-sm text-gray-500 mt-2">Children under 7: Free</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/booking"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl"
            >
              Book Your Tickets Now
            </Link>
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Visual Journey</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={`${image.url}?w=500&h=400&fit=crop`}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <button
                className="absolute left-4 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                ‹
              </button>
              <button
                className="absolute right-4 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                ›
              </button>
              <div
                className="max-w-5xl max-h-[80vh] p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`${galleryImages[currentImageIndex].url}?w=1200&h=800&fit=crop`}
                  alt={galleryImages[currentImageIndex].title}
                  className="rounded-lg shadow-2xl max-h-[80vh] w-auto mx-auto"
                />
                <p className="text-white text-center mt-4">{galleryImages[currentImageIndex].title}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Help Center</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="py-20 px-6 md:px-10 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-green-100 mb-8">
            Subscribe to our newsletter for exclusive offers, event updates, and travel tips.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Subscribe
            </button>
          </form>
          {newsletterStatus && (
            <div className="mt-4 text-green-100 text-sm">{newsletterStatus}</div>
          )}
        </div>
      </div>

      {/* MAP AND CONTACT CTA */}
      <div className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need More Information?</h2>
          <p className="text-gray-600 mb-8">
            Our team is ready to assist you with any questions about your visit, group bookings, or special requests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </Link>
            <Link
              to="/request"
              className="bg-gray-100 border-2 border-gray-300 text-gray-700 hover:bg-gray-200 transition-all duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Request Data
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <p>&copy; 2025 Bangkong Kahoy Valley Tourism Portal. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Tourism;