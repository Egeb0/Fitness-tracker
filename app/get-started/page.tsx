"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Check if date of birth is provided
    if (!form.dateOfBirth) {
      setError("Please provide your date of birth.");
      return;
    }

    // Check if gender is selected
    if (!form.gender) {
      setError("Please select your gender.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          dateOfBirth: form.dateOfBirth,
          gender: form.gender,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Registration failed");
        return;
      }

      // Redirect on success
      router.push("/get-started");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message); // Log the error message
      } else {
        console.error("Unknown error occurred");
      }
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-400 to-indigo-300 p-6">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-8 drop-shadow-lg">
        Create Your Account
      </h1>
      <p className="text-lg text-indigo-600 italic mb-10">
        Join us to track your progress and reach your fitness goals!
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-12 rounded-lg shadow-xl max-w-2xl w-full space-y-8"
      >
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-purple-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-purple-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-purple-700 mb-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="text-pink-500 focus:ring-pink-400"
              />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="text-pink-500 focus:ring-pink-400"
              />
              <span className="text-gray-700">Female</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
                className="text-pink-500 focus:ring-pink-400"
              />
              <span className="text-gray-700">Other</span>
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-purple-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Create a password"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-purple-700 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            placeholder="Re-enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 shadow-lg transition-transform transform hover:scale-105 text-lg"
        >
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-pink-600 font-medium cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}
