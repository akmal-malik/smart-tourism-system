import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔐 Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const url = isLogin
      ? "http://localhost:5003/api/admin/login"
      : "http://localhost:5003/api/admin/signup";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      if (isLogin) {
        // ✅ STORE JWT TOKEN
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        alert("Account created successfully! Please login.");
        setIsLogin(true);
      }

    } catch (err) {
      console.error("Auth error:", err);
      alert("Server error. Check backend.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Admin Login" : "Admin Sign Up"}
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading
            ? "Processing..."
            : isLogin
            ? "Login"
            : "Sign Up"}
        </button>

        <p
          className="mt-4 text-sm text-center text-blue-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </form>

    </div>
  );
}

export default AdminAuth;