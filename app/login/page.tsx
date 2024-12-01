"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const response = await axios.post("/api/login", { email, password });
        if (response.status === 200) {
          router.push("/get-started");
        }
      } catch (error: any) {
        console.error(error);
        setErrorMessage(error.response?.data?.message || "Invalid credentials.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage("Please fill in both email and password.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-400 to-indigo-300 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6 tracking-wide">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className="w-full p-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 inset-y-0 flex items-center justify-center text-gray-500 hover:text-pink-500 focus:outline-none"
              >
                {isPasswordVisible ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className={`w-full py-3 ${isLoading ? "bg-gray-400" : "bg-pink-600"} text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/get-started")}
            className="text-pink-600 hover:underline font-semibold cursor-pointer"
          >
            Get Started
          </span>
        </p>
      </div>
    </div>
  );
}
