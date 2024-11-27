"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the LoginPage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
        Welcome to Your Fitness Tracker!
      </h1>
      <p className="text-lg text-indigo-600 italic font-medium mb-6">
        Track your <span className="text-indigo-800 font-bold">workouts</span>,{" "}
        <span className="text-indigo-800 font-bold">meals</span>, and{" "}
        <span className="text-indigo-800 font-bold">progress</span>—all in one
        place.
      </p>
      <div className="text-center">
        <button
          className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 shadow-lg transition mx-2"
          onClick={() => router.push("/get-started")} // Example route for "Get Started"
        >
          Get Started
        </button>
        <button
          className="px-6 py-3 bg-gray-200 text-purple-700 rounded-lg hover:bg-gray-300 shadow-lg transition mx-2"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}
