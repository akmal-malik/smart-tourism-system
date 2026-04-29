import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // NEW STATES
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null); // ✅ NEW

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin");
      return;
    }

    Promise.all([
      fetch("http://localhost:5003/api/bookings", {
        headers: { Authorization: token }
      }).then(res => res.json()),

      fetch("http://localhost:5003/api/requests", {
        headers: { Authorization: token }
      }).then(res => res.json())
    ])
      .then(([bookingData, requestData]) => {
        setBookings(bookingData);
        setRequests(requestData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Dashboard error:", err);
        setLoading(false);
      });
  }, [navigate]);

  // 🔥 DELETE BOOKING
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:5003/api/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token
      }
    });

    const data = await res.json();
    console.log("DELETE RESPONSE:", data);

    if (!res.ok) {
      alert("Delete failed");
      return;
    }

    setBookings(bookings.filter(b => b._id !== id));
  };

  // 📩 SEND REPLY
  const handleReply = async () => {
    const token = localStorage.getItem("token");

    await fetch("http://localhost:5003/api/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        email: selectedRequest.email,
        message: replyMessage
      })
    });

    alert("Reply sent!");
    setSelectedRequest(null);
    setReplyMessage("");
  };

  if (loading) {
    return <div className="p-10 text-xl font-semibold">Loading dashboard...</div>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      {/* LOGOUT */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/admin");
        }}
        className="mb-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      {/* BOOKINGS */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Bookings</h2>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Guests</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length > 0 ? (
                bookings.map((b) => (
                  <tr
                    key={b._id}
                    className="border-b cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedBooking(b)} // ✅ CLICK
                  >
                    <td className="p-3">{b.name}</td>
                    <td className="p-3">{b.date}</td>
                    <td className="p-3">{b.guests}</td>
                    <td className="p-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ prevent modal open
                          handleDelete(b._id);
                        }}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-5">
                    No bookings yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* REQUESTS */}
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
                requests.map((r) => (
                  <tr
                    key={r._id}
                    onClick={() => setSelectedRequest(r)}
                    className="border-b cursor-pointer hover:bg-gray-100"
                  >
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

      {/* 🔥 BOOKING MODAL */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">

            <h2 className="text-xl font-bold mb-2">
              {selectedBooking.name}
            </h2>

            <p><strong>Email:</strong> {selectedBooking.email}</p>
            <p><strong>Phone:</strong> {selectedBooking.phone}</p>
            <p><strong>Date:</strong> {selectedBooking.date}</p>
            <p><strong>Guests:</strong> {selectedBooking.guests}</p>
            <p><strong>Package:</strong> {selectedBooking.package}</p>

            <p className="mt-3">
              <strong>Special Requests:</strong><br />
              {selectedBooking.specialRequests || "None"}
            </p>

            <button
              onClick={() => setSelectedBooking(null)}
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* REQUEST MODAL */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-96">

            <h2 className="text-xl font-bold mb-2">{selectedRequest.name}</h2>
            <p className="mb-2 text-gray-600">{selectedRequest.email}</p>
            <p className="mb-4">{selectedRequest.message}</p>

            <textarea
              placeholder="Write reply..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="w-full border p-2 mb-3"
            />

            <button
              onClick={handleReply}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Send Reply
            </button>

            <button
              onClick={() => setSelectedRequest(null)}
              className="ml-2 text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminDashboard;