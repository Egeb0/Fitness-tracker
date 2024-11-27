export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
        Welcome to Your Fitness Tracker!
      </h1>
      <p className="text-lg text-gray-800 mb-6">
        Track your workouts, meals, and progress—all in one place.
      </p>
      <div className="text-center">
        <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 shadow-lg transition mx-2">
          Get Started
        </button>
        <button className="px-6 py-3 bg-gray-200 text-purple-700 rounded-lg hover:bg-gray-300 shadow-lg transition mx-2">
          Login
        </button>
      </div>
    </div>
  );
}
