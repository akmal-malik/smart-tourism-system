import { useEffect, useState } from "react";

function Data() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalVisitors: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5003/api/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-8">
        Tourism Data Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* BOOKINGS */}
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold mb-2">
            Total Bookings
          </h2>
          <p className="text-4xl font-bold text-blue-600">
            {stats.totalBookings}
          </p>
        </div>

        {/* VISITORS */}
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold mb-2">
            Total Visitors
          </h2>
          <p className="text-4xl font-bold text-green-600">
            {stats.totalVisitors}
          </p>
        </div>

      </div>

      {/* EXTRA SECTION */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">
          About This Data
        </h2>

        <p className="text-gray-600">
          This dashboard shows real-time tourism data collected from bookings.
          It helps improve transparency and reduces the need for manual data requests.
        </p>
      </div>

    </div>
  );
}

export default Data;