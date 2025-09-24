import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { CheckCircle, XCircle } from "lucide-react";

export const VerifyEmailPage = () => {
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("Verifying your email...");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      const token = new URLSearchParams(location.search).get("token");
      if (!token) {
        setStatus("error");
        setMessage("Verification token not found.");
        return;
      }
      try {
        const res = await api.get(`/auth/verify-email?token=${token}`);
        setStatus("success");
        setMessage(res.data.message);
        setTimeout(() => navigate("/"), 3000); // Redirect to login after 3 seconds
      } catch (err) {
        setStatus("error");
        setMessage(err.response?.data?.message || "Email verification failed.");
      }
    };
    verify();
  }, [location, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 text-center bg-gray-800 rounded-2xl shadow-2xl">
        {status === "verifying" && (
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-6"></div>
        )}
        {status === "success" && (
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        )}
        {status === "error" && (
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
        )}
        <h2 className="text-3xl font-extrabold mb-4 capitalize">{status}</h2>
        <p className="text-gray-400">{message}</p>
        {status === "success" && (
          <p className="text-sm text-gray-500 mt-4">Redirecting to login...</p>
        )}
      </div>
    </div>
  );
};
