"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-400 to-indigo-300 p-6">
      <h1 className="text-6xl font-extrabold text-purple-700 mb-6 drop-shadow-lg animate-fadeIn">
        Welcome to Your Fitness Tracker!
      </h1>
      <p className="text-xl text-indigo-600 italic font-medium mb-8 max-w-2xl text-center leading-relaxed">
        Track your <span className="font-bold text-purple-900">workouts</span>,{" "}
        <span className="font-bold text-purple-900">meals</span>, and{" "}
        <span className="font-bold text-purple-900">progress</span>—all in one
        place. Your fitness journey starts here!
      </p>
      <div className="flex gap-4">
        <button
          className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
          onClick={() => router.push("/get-started")}
        >
          Get Started
        </button>
        <button
          className="px-8 py-3 bg-gray-100 text-purple-700 rounded-lg hover:bg-gray-200 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </div>
  );
}
