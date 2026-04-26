import { useState } from "react";

function Request() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5003/api/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Request Data</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2" />
        
        <select name="requestType" onChange={handleChange} className="w-full border p-2">
          <option value="">Select Request Type</option>
          <option value="Visitor Data">Visitor Data</option>
          <option value="Revenue Data">Revenue Data</option>
        </select>

        <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-2" />

        <button className="bg-blue-600 text-white px-4 py-2">
          Submit Request
        </button>

      </form>
    </div>
  );
}

export default Request;