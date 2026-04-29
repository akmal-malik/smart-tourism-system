import { useState } from "react";

function Data() {
  const [expandedDays, setExpandedDays] = useState({
    day1: true,
    day2: true,
    day3: true,
  });

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const toggleAllDays = () => {
    const allExpanded = Object.values(expandedDays).every(Boolean);
    setExpandedDays({
      day1: !allExpanded,
      day2: !allExpanded,
      day3: !allExpanded,
    });
  };

  const day1Schedule = [
    { time: "08:00", activity: "Arrival in Dolores & meet coordinator" },
    { time: "09:00", activity: "Arrival at Sierra Pitaya" },
    { time: "09:30", activity: "Pitaya farming experience & nature walk" },
    { time: "11:00", activity: "Travel to Farm Ko Resort" },
    { time: "12:00", activity: "Lunch (farm-to-table)" },
    { time: "14:30", activity: "Resort activities (ATV, swimming, relaxation)" },
    { time: "16:30", activity: "Dinner" },
    { time: "18:30", activity: "Social night & overnight stay" },
  ];

  const day2Schedule = [
    { time: "07:00", activity: "Breakfast & check-out" },
    { time: "08:30", activity: "Visit Mt. Banahaw Church" },
    { time: "11:30", activity: "Lunch" },
    { time: "13:00", activity: "Visit Santa Lucia Falls" },
    { time: "15:30", activity: "Travel to Bangkong Kahoy Valley" },
    { time: "16:00", activity: "Arrival & check-in" },
    { time: "17:00", activity: "Nature walk & birdwatching" },
    { time: "18:30", activity: "Dinner" },
    { time: "20:00", activity: "Bonfire & stargazing" },
  ];

  const day3Schedule = [
    { time: "07:00", activity: "Breakfast & check-out" },
    { time: "09:00", activity: "Visit Kubli Fish Farm" },
    { time: "12:00", activity: "Lunch" },
    { time: "14:30", activity: "Souvenir shopping" },
    { time: "16:00", activity: "Departure" },
  ];

  // Helper to render icon backgrounds with emoji
  const IconBox = ({ emoji, bgColor }) => (
    <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center text-2xl`}>
      {emoji}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="text-lg">✨</span>
            <span>Eco-Tourism Initiative</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Tourism Development Dashboard
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bangkong Kahoy Valley — Sustainable Growth, Community Participation, Immersive Experiences
          </p>
        </div>

        {/* Overview Card */}
        <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8 overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-bl-full"></div>
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-xl text-2xl">🌍</div>
              <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The tourism development plan for Bangkong Kahoy Valley focuses on sustainable growth,
              community participation, and immersive visitor experiences through eco-tourism,
              wellness, and digital innovation.
            </p>
          </div>
        </div>

        {/* Key Development Projects */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-xl text-2xl">🎯</div>
              <h2 className="text-2xl font-bold text-gray-800">Key Development Projects</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { emoji: "🌳", title: "RUTA", desc: "Eco-friendly horseback & bicycle transport system", color: "emerald" },
                { emoji: "👁️", title: "GUNITA", desc: "Observatory & heritage tower with stargazing", color: "teal" },
                { emoji: "❤️", title: "HIMLAY", desc: "Wellness retreat with yoga & meditation", color: "rose" },
                { emoji: "⚡", title: "TIKAS", desc: "Therapeutic adventure & emotional growth activities", color: "amber" },
                { emoji: "🌸", title: "ALAGA", desc: "Pollinator garden & aquatic observation", color: "green" },
                { emoji: "🧭", title: "GABAY", desc: "Eco-friendly signage & facility upgrades", color: "blue" },
              ].map((project, i) => (
                <div
                  key={i}
                  className="group relative p-5 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${project.color}-100 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                    {project.emoji}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tourism Activities & Smart System Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Tourism Activities Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-xl text-2xl">⭐</div>
                <h2 className="text-2xl font-bold text-gray-800">Tourism Activities</h2>
              </div>
              <div className="space-y-4">
                {[
                  { emoji: "🍎", title: "LASAP", desc: "Farm-to-table experience", color: "emerald" },
                  { emoji: "⛰️", title: "TANAW", desc: "Horseback & birdwatching", color: "teal" },
                  { emoji: "👥", title: "UGNAY", desc: "Youth tourism training program", color: "cyan" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors">
                    <div className={`p-2 bg-${activity.color}-100 rounded-lg text-xl shrink-0`}>
                      {activity.emoji}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{activity.title}</h3>
                      <p className="text-gray-500 text-sm">{activity.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smart Tourism System Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-indigo-100">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-xl text-2xl">📊</div>
                <h2 className="text-2xl font-bold text-gray-800">Smart Tourism System</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The <span className="font-semibold text-indigo-600">DANTAYAN system</span> digitizes visitor records,
                provides real-time analytics, and enhances the tourism experience through integrated digital
                information services.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Real-time Analytics", "Digital Check-in", "Smart Kiosks", "Visitor Insights"].map((feature) => (
                  <span key={feature} className="px-3 py-1 bg-white/60 backdrop-blur rounded-full text-xs font-medium text-indigo-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Itinerary Section with Documentation */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-8">
          {/* Itinerary Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 sm:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-white text-sm mb-3">
                  <span className="text-base">📅</span>
                  <span>3 Days / 2 Nights</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">DOLO-REST Tour Package</h2>
                <p className="text-emerald-100 mt-1">Complete Farm-to-Mountain Experience</p>
              </div>
              <button
                onClick={toggleAllDays}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white text-sm font-medium transition-all backdrop-blur"
              >
                {Object.values(expandedDays).every(Boolean) ? "▲" : "▼"}
                {Object.values(expandedDays).every(Boolean) ? "Collapse All" : "Expand All"}
              </button>
            </div>
          </div>

          {/* Documentation Section */}
          <div className="border-b border-gray-100 bg-gray-50/50 px-6 sm:px-8 py-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">📖</span>
              <h3 className="font-semibold text-gray-800">Package Documentation</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-lg">📅</div>
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm font-medium text-gray-800">3 Days, 2 Nights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-lg">🍽️</div>
                <div>
                  <p className="text-xs text-gray-500">Meals Included</p>
                  <p className="text-sm font-medium text-gray-800">2 Breakfast, 3 Lunch, 2 Dinner</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-lg">🏕️</div>
                <div>
                  <p className="text-xs text-gray-500">Accommodation</p>
                  <p className="text-sm font-medium text-gray-800">Farm Ko Resort, Bangkong Kahoy Valley</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-lg">👥</div>
                <div>
                  <p className="text-xs text-gray-500">Group Size</p>
                  <p className="text-sm font-medium text-gray-800">2-15 persons</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <span className="text-base">ℹ️</span>
                <p className="text-xs text-gray-500">
                  <span className="font-medium text-gray-700">Inclusions:</span> Guided tours, farm activities, entrance fees, bonfire night, ATV ride (Day 1).
                  <span className="font-medium text-gray-700 ml-2">Exclusions:</span> Personal expenses, travel insurance, optional activities.
                </p>
              </div>
            </div>
          </div>

          {/* Day 1 Itinerary */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleDay("day1")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Day 1 – Farm & Resort Experience</h3>
                  <p className="text-sm text-gray-500">Farm-to-table dining, ATV rides, social night</p>
                </div>
              </div>
              {expandedDays.day1 ? <span className="text-gray-400">▲</span> : <span className="text-gray-400">▼</span>}
            </button>
            {expandedDays.day1 && (
              <div className="px-6 sm:px-8 pb-6">
                <div className="space-y-2">
                  {day1Schedule.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-20 shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                          <span className="text-xs">🕒</span>
                          {item.time}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm">{item.activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                    <span className="text-xs">🍽️</span>
                    Farm-to-table Lunch & Dinner
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    <span className="text-xs">⚡</span>
                    ATV & Swimming
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Day 2 Itinerary */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleDay("day2")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Day 2 – Spiritual & Nature Adventure</h3>
                  <p className="text-sm text-gray-500">Mt. Banahaw Church, waterfalls, stargazing</p>
                </div>
              </div>
              {expandedDays.day2 ? <span className="text-gray-400">▲</span> : <span className="text-gray-400">▼</span>}
            </button>
            {expandedDays.day2 && (
              <div className="px-6 sm:px-8 pb-6">
                <div className="space-y-2">
                  {day2Schedule.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-20 shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm font-mono text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">
                          <span className="text-xs">🕒</span>
                          {item.time}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm">{item.activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                    <span className="text-xs">🔥</span>
                    Bonfire & Stargazing
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                    <span className="text-xs">🐦</span>
                    Birdwatching
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Day 3 Itinerary */}
          <div className="">
            <button
              onClick={() => toggleDay("day3")}
              className="w-full flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center font-bold text-cyan-700">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Day 3 – Farm & Culinary Experience</h3>
                  <p className="text-sm text-gray-500">Fish farm visit, local shopping, departure</p>
                </div>
              </div>
              {expandedDays.day3 ? <span className="text-gray-400">▲</span> : <span className="text-gray-400">▼</span>}
            </button>
            {expandedDays.day3 && (
              <div className="px-6 sm:px-8 pb-6">
                <div className="space-y-2">
                  {day3Schedule.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-20 shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm font-mono text-cyan-600 bg-cyan-50 px-2 py-1 rounded-lg">
                          <span className="text-xs">🕒</span>
                          {item.time}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm">{item.activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">
                    <span className="text-xs">🍎</span>
                    Farm-fresh Lunch
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full">
                    <span className="text-xs">📷</span>
                    Souvenir Shopping
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Itinerary Footer Notes */}
          <div className="bg-gray-50 px-6 sm:px-8 py-4 rounded-b-2xl border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><span className="text-sm">🚌</span> Private transport included</span>
                <span className="flex items-center gap-1"><span className="text-sm">🧭</span> Local guide provided</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <span className="text-sm">⬇️</span> Download PDF
                </button>
                <button className="flex items-center gap-1 px-3 py-1 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <span className="text-sm">📤</span> Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-gray-400 mt-8">
          <p>© 2026 Bangkong Kahoy Valley Tourism Council | Sustainable Eco-Tourism Initiative</p>
        </div>
      </div>
    </div>
  );
}

export default Data;