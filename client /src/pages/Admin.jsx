import { useEffect, useState } from "react";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch bookings
    fetch("http://localhost:5003/api/bookings")
      .then(res => res.json())
      .then(data => setBookings(data));

    // Fetch requests
    fetch("http://localhost:5003/api/requests")
      .then(res => res.json())
      .then(data => setRequests(data));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* BOOKINGS SECTION */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Bookings</h2>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Guests</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">{b.name}</td>
                  <td className="p-3">{b.date}</td>
                  <td className="p-3">{b.guests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* REQUESTS SECTION */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Data Requests</h2>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Message</th>
              </tr>
            </thead>

            <tbody>
              {requests.length > 0 ? (
                requests.map((r, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{r.name}</td>
                    <td className="p-3">{r.email}</td>
                    <td className="p-3">{r.requestType}</td>
                    <td className="p-3">{r.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-5">
                    No requests yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Admin;