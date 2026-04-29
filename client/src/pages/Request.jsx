import { useState } from "react";
import { Link } from "react-router-dom";

function Request() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "",
    message: "",
    preferredContact: "email",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedRequestId, setSubmittedRequestId] = useState(null);

  // Request types with descriptions
  const requestTypes = [
    { value: "visitor_stats", label: "Visitor Statistics", description: "Monthly/Yearly visitor counts, peak seasons" },
    { value: "revenue_data", label: "Revenue Data", description: "Earnings, package popularity, trends" },
    { value: "demographics", label: "Visitor Demographics", description: "Age groups, origin, visit patterns" },
    { value: "feedback_summary", label: "Feedback Summary", description: "Aggregated visitor reviews and ratings" },
    { value: "custom_report", label: "Custom Report", description: "Tailored data analysis request" },
  ];

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.requestType) newErrors.requestType = "Please select a request type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");
    setSubmittedRequestId(null);

    try {
      const res = await fetch("http://localhost:5003/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage(data.message || "Request submitted successfully! We'll process it within 2-3 business days.");
        // Generate a mock request ID for tracking
        const mockId = "REQ-" + Math.random().toString(36).substring(2, 10).toUpperCase();
        setSubmittedRequestId(mockId);
        // Reset form
        setFormData({
          name: "",
          email: "",
          requestType: "",
          message: "",
          preferredContact: "email",
        });
        setTimeout(() => {
          setSuccessMessage("");
          setSubmittedRequestId(null);
        }, 6000);
      } else {
        alert(data.message || "Request failed. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Icons
  const UserIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const EnvelopeIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const DocumentIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const ChatIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center p-6 font-sans">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left side - Request Form */}
        <div className="p-8 md:p-10">
          <div className="mb-6">
            <Link to="/" className="text-green-600 hover:text-green-700 text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">Request Information</h2>
          <p className="text-gray-500 mb-6">Submit a data request or ask a question</p>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {successMessage}
              {submittedRequestId && (
                <div className="mt-2 text-xs font-mono bg-green-100 inline-block px-2 py-1 rounded">
                  Reference ID: {submittedRequestId}
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Request Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Request Type</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DocumentIcon />
                </div>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 border ${errors.requestType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white`}
                >
                  <option value="">Select request type</option>
                  {requestTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              {formData.requestType && !errors.requestType && (
                <p className="text-gray-500 text-xs mt-1">
                  {requestTypes.find(t => t.value === formData.requestType)?.description}
                </p>
              )}
              {errors.requestType && <p className="text-red-500 text-xs mt-1">{errors.requestType}</p>}
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleChange}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-700">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleChange}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-700">Phone</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message / Details</label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <ChatIcon />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Please provide specific details about your request..."
                  className={`w-full pl-10 pr-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none`}
                ></textarea>
              </div>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              <p className="text-gray-400 text-xs mt-1 text-right">
                {formData.message.length}/500 characters
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-lg'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        </div>

        {/* Right side - Info & Status Tracking Preview */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">How Requests Work</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <span className="text-sm font-bold">1</span>
                </div>
                <span>Submit your request with details</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <span className="text-sm font-bold">2</span>
                </div>
                <span>We verify and process (2-3 business days)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <span className="text-sm font-bold">3</span>
                </div>
                <span>You receive the data via your preferred contact</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/20">
              <h4 className="font-semibold mb-3">Status Tracking Preview</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Submitted</span>
                  <div className="w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Under Review</span>
                  <div className="w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Processing</span>
                  <div className="w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Completed</span>
                  <div className="w-24 h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-blue-100 mt-3">
                You'll receive updates via your chosen contact method.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <h4 className="font-semibold mb-2">Need urgent assistance?</h4>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <PhoneIcon />
              <span>+63 900 000 0000</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100 mt-1">
              <EnvelopeIcon />
              <span>data@bkv.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;