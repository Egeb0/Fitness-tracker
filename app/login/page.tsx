"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      console.log("Login successful:", { email, password });
      setIsLoggedIn(true); // Set logged-in state
      router.push("/"); // Navigate to HomePage
    } else {
      console.error("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsLoggedIn(false); // Reset logged-in state
    router.push("/login"); // Redirect to LoginPage
  };

  if (isLoggedIn) {
    // If logged in, show the Logout button
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-indigo-400 to-blue-500">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-sm w-full text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            You are logged in!
          </h2>
          <button
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // If not logged in, show the Login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-indigo-400 to-blue-500">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
