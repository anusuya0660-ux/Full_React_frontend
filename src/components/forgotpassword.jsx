import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="w-full h-full
    min-h-screen bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email and we’ll send you a reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Send Reset Link
        </button>

        <p className="text-center text-sm mt-6">
          Back to{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
