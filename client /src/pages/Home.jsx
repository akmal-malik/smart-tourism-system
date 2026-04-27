import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Home() {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // State for quick booking form
  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    guests: "2",
  });

  // State for newsletter
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  // State for contact form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");

  // --- Stats counter states ---
  const [visitorsCount, setVisitorsCount] = useState(0);
  const [ecoCabinsCount, setEcoCabinsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [trailsCount, setTrailsCount] = useState(0);

  // Refs for Intersection Observer and intervals
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);
  const intervalsRef = useRef([]);

  // FAQ data
  const faqs = [
    {
      question: "What is the best time to visit Bangkong Kahoy Valley?",
      answer:
        "The best time to visit is during the dry season from November to May. The weather is pleasant, and the bamboo forests are at their most beautiful.",
    },
    {
      question: "How do I get to Bayan NG Dolores?",
      answer:
        "Bayan NG Dolores is located in Dolores, Quezon. You can take a bus from Manila to Dolores (approximately 3-4 hours), then take a tricycle to the valley entrance.",
    },
    {
      question: "Are pets allowed in the resort?",
      answer:
        "Yes, well-behaved pets are allowed in designated areas. Please inform us in advance so we can prepare pet-friendly accommodations.",
    },
  ];

  // Packages data
  const packages = [
    {
      name: "Eco Cabin Stay",
      duration: "2 Days / 1 Night",
      price: "₱3,500",
      features: ["Private bamboo cabin", "Breakfast included", "Guided nature walk", "Bonfire access"],
    },
    {
      name: "Adventure Package",
      duration: "3 Days / 2 Nights",
      price: "₱6,800",
      features: ["Deluxe cottage", "All meals included", "River trekking", "Bamboo rafting", "Night safari"],
    },
    {
      name: "Family Getaway",
      duration: "3 Days / 2 Nights",
      price: "₱9,500",
      features: ["Family-sized villa", "Kids' activities", "BBQ dinner", "Swimming pool access", "Picnic area"],
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Manila",
      text: "An unforgettable experience! The bamboo forest is magical, and the staff were incredibly welcoming. Perfect escape from the city.",
      rating: 5,
    },
    {
      name: "James Wilson",
      location: "Cebu",
      text: "Stayed for 3 nights and loved every moment. The eco-friendly facilities and peaceful atmosphere make this a hidden gem.",
      rating: 5,
    },
  ];

  // Handle quick booking
  const handleQuickBooking = (e) => {
    e.preventDefault();
    alert(`Booking request submitted for ${bookingForm.guests} guests on ${bookingForm.checkIn}. Our team will contact you shortly.`);
  };

  // Handle newsletter submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus("Subscribed successfully!");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus(""), 3000);
    }
  };

  // Handle contact form submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactStatus("Message sent! We'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setContactStatus(""), 3000);
    }
  };

  // --- Counter animation logic ---
  const startCounters = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Helper to clear all intervals on completion or unmount
    const clearAllIntervals = () => {
      intervalsRef.current.forEach(interval => clearInterval(interval));
      intervalsRef.current = [];
    };

    // 1. Visitors: 0 -> 10000 (step 150, interval 12ms) => ~0.8 sec
    const visitorsInterval = setInterval(() => {
      setVisitorsCount(prev => {
        const next = prev + 150;
        if (next >= 10000) {
          clearInterval(visitorsInterval);
          return 10000;
        }
        return next;
      });
    }, 12);
    intervalsRef.current.push(visitorsInterval);

    // 2. Eco Cabins: 0 -> 50 (step 1, interval 20ms) => ~1 sec
    const cabinsInterval = setInterval(() => {
      setEcoCabinsCount(prev => {
        const next = prev + 1;
        if (next >= 50) {
          clearInterval(cabinsInterval);
          return 50;
        }
        return next;
      });
    }, 20);
    intervalsRef.current.push(cabinsInterval);

    // 3. Rating: 0 -> 4.9 (step 0.1, interval 35ms) => slower for decimal
    const ratingInterval = setInterval(() => {
      setRatingCount(prev => {
        const next = parseFloat((prev + 0.1).toFixed(1));
        if (next >= 4.9) {
          clearInterval(ratingInterval);
          return 4.9;
        }
        return next;
      });
    }, 35);
    intervalsRef.current.push(ratingInterval);

    // 4. Trails: 0 -> 15 (step 1, interval 45ms) => slowest for smallest number
    const trailsInterval = setInterval(() => {
      setTrailsCount(prev => {
        const next = prev + 1;
        if (next >= 15) {
          clearInterval(trailsInterval);
          return 15;
        }
        return next;
      });
    }, 45);
    intervalsRef.current.push(trailsInterval);
  };

  // Intersection Observer to trigger counters when stats section is visible
  useEffect(() => {
    const currentStatsRef = statsRef.current;
    if (!currentStatsRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
            observer.disconnect(); // Run only once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    observer.observe(currentStatsRef);

    return () => {
      observer.disconnect();
      // Clear any intervals if component unmounts before counters finish
      intervalsRef.current.forEach(interval => clearInterval(interval));
    };
  }, []);

  // SVG Icons
  const NatureIcon = () => (
    <svg className="w-10 h-10 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4M12 16v4M8 8h8M8 16h8" />
    </svg>
  );

  const DataIcon = () => (
    <svg className="w-10 h-10 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const RequestIcon = () => (
    <svg className="w-10 h-10 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <div
        id="overview"
        className="relative bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center h-[85vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-medium tracking-wide">Eco-Tourism Destination</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
            Welcome to Tourism Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow text-gray-100">
            Explore Bangkong Kahoy – Your gateway to nature and peace.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Book Now
            </Link>

            <Link
              to="/data"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              View Data
            </Link>

            <Link
              to="/request"
              className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request Data
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

      {/* FEATURES / INFO SECTION */}
      <div id="attractions" className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">What We Offer</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Your Complete Tourism Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 hover:border-green-200">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <NatureIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-green-700">Book Your Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                Reserve your stay and enjoy the breathtaking bamboo forests and serene environment at Bangkong Kahoy
                Valley.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-green-600 text-sm font-medium">Limited slots available →</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 hover:border-blue-200">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <DataIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">View Tourism Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Access real-time visitor statistics, peak season trends, and other key tourism insights instantly.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 text-sm font-medium">Live analytics →</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100 hover:border-gray-300">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <RequestIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-700">Request Information</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit data requests, ask questions, and track their status easily through our portal.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gray-600 text-sm font-medium">24/7 Support →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION - ANIMATED COUNTERS */}
      <div ref={statsRef} className="bg-gradient-to-r from-green-700 to-green-800 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <div className="text-4xl font-bold">
              {visitorsCount >= 1000 ? `${Math.floor(visitorsCount / 1000)}K+` : visitorsCount}
            </div>
            <div className="text-green-100">Happy Visitors</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">{Math.floor(ecoCabinsCount)}+</div>
            <div className="text-green-100">Eco Cabins</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">{ratingCount.toFixed(1)}</div>
            <div className="text-green-100">Rating Average</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">{Math.floor(trailsCount)}+</div>
            <div className="text-green-100">Nature Trails</div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Bayan NG Dolores</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Bayan NG Dolores is a unique eco-tourism destination known for its lush bamboo forests, peaceful
            environment, and natural beauty. This platform helps visitors book their stay, explore tourism data, and
            access important information easily – all in one place.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-green-50 px-6 py-3 rounded-full">
              <span className="text-green-700 font-medium">♻️ Eco-Certified</span>
            </div>
            <div className="bg-green-50 px-6 py-3 rounded-full">
              <span className="text-green-700 font-medium">🌿 Sustainable Tourism</span>
            </div>
            <div className="bg-green-50 px-6 py-3 rounded-full">
              <span className="text-green-700 font-medium">🏆 Award Winning</span>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/tourism"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all duration-300 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* POPULAR PACKAGES SECTION */}
      <div className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Stay Packages</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Popular Experiences</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-green-800 font-bold">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{pkg.name}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <ClockIcon />
                    <span>{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
<Link
  to="/booking"
  state={{ selectedPackage: pkg.name }}
  className="block text-center w-full bg-gray-100 hover:bg-green-600 text-gray-700 hover:text-white py-2 rounded-lg"
>
  Book Package
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div id="gallery" className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Visual Journey</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
              "https://images.unsplash.com/photo-1441974231531-c622288dbd9f",
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer"
              >
                <img
                  src={`${img}?w=400&h=300&fit=crop`}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Guest Reviews</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">What Our Visitors Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QUICK RESOURCES: AVAILABILITY + WEATHER + MAP */}
      <div className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Booking Widget */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Check Availability</h3>
              <form onSubmit={handleQuickBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                  <input
                    type="date"
                    value={bookingForm.checkIn}
                    onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all font-medium"
                >
                  Check Rates
                </button>
              </form>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Current Weather</h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-800 mb-2">24°C</div>
                <div className="text-gray-600 mb-2">Partly Cloudy</div>
                <div className="text-sm text-gray-500">Humidity: 78% | Wind: 12 km/h</div>
                <div className="mt-4 text-green-600 text-sm">Best time for outdoor activities</div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
              <div className="bg-gray-300 h-32 rounded-lg mb-3 flex items-center justify-center text-gray-500 text-sm">
                Map Preview Area
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <LocationIcon />
                  <span>Dolores, Quezon, Philippines</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon />
                  <span>Open Daily: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Dolores+Quezon"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-green-600 text-sm font-medium hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Help Center</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
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
            Subscribe to our newsletter for exclusive offers and travel tips.
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

      {/* CONTACT SECTION */}
      <div id="contact" className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold tracking-wide uppercase">Get In Touch</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <LocationIcon />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">Dolores, Quezon<br />Philippines 4300</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <PhoneIcon />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+63 900 000 0000<br />+63 912 345 6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <EmailIcon />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">tourism@bkv.com<br />support@bangkongkahoy.com</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all"
                >
                  Send Message
                </button>
                {contactStatus && <div className="text-green-600 text-sm text-center">{contactStatus}</div>}
              </form>
            </div>
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

export default Home;