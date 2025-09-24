import React, { useState } from "react";
import api from "../../api/axios";

export const LoginPage = ({ setAuthPage, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", formData);
      onLoginSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Welcome Back to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            DevPath
          </span>
        </h2>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4">
            <input
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email address"
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => setAuthPage("signup")}
            className="font-medium text-purple-400 hover:text-purple-300"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
