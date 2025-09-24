import React from "react";
import { Mail } from "lucide-react";

export const CheckEmailPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 text-center bg-gray-800 rounded-2xl shadow-2xl">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold mb-4">Check Your Email</h2>
        <p className="text-gray-400">
          We've sent a verification link to your email address. Please click the
          link to activate your account.
        </p>
      </div>
    </div>
  );
};
