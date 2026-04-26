import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5003/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error booking");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Your Visit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="number"
            name="guests"
            placeholder="Guests"
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg"
          >
            Book Now
          </button>

        </form>

      </div>

    </div>
  );
}

export default Booking;