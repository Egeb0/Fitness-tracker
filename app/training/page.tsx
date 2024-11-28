"use client";  // Mark the file as a Client Component

import React, { useState } from 'react';

export default function TrainingPage() {
  // State variables for heart rate, steps, distance, weight, and height
  const [heartRate, setHeartRate] = useState(75);  
  const [steps, setSteps] = useState(12000);       
  const [distance, setDistance] = useState(8.5);    
  const [weight, setWeight] = useState(70);         // Starting weight (kg)
  const [height, setHeight] = useState(175);        // Starting height (cm)

  // Arrays to store added stats
  const [additionalHeartRates, setAdditionalHeartRates] = useState<number[]>([]);  
  const [additionalSteps, setAdditionalSteps] = useState<number[]>([]);       
  const [additionalDistances, setAdditionalDistances] = useState<number[]>([]);  
  const [additionalWeights, setAdditionalWeights] = useState<number[]>([]);  
  const [additionalHeights, setAdditionalHeights] = useState<number[]>([]);  

  // Functions to increase/decrease heart rate, steps, distance
  const increaseHeartRate = () => setHeartRate(heartRate + 1);
  const decreaseHeartRate = () => setHeartRate(heartRate - 1);

  const increaseSteps = () => setSteps(steps + 100);
  const decreaseSteps = () => setSteps(steps - 100);

  const increaseDistance = () => setDistance(distance + 0.1);
  const decreaseDistance = () => setDistance(distance - 0.1);

  // Functions to handle changes in weight and height (when typed)
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseFloat(e.target.value);
    if (!isNaN(newWeight)) {
      setWeight(newWeight);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(e.target.value, 10);
    if (!isNaN(newHeight)) {
      setHeight(newHeight);
    }
  };

  // Functions to add new items to each stat category
  const addHeartRate = () => setAdditionalHeartRates([...additionalHeartRates, heartRate]);
  const addStep = () => setAdditionalSteps([...additionalSteps, steps]);
  const addDistance = () => setAdditionalDistances([...additionalDistances, distance]);
  const addWeight = () => setAdditionalWeights([...additionalWeights, weight]);  
  const addHeight = () => setAdditionalHeights([...additionalHeights, height]);  

  // Functions to delete items from each stat category
  const deleteHeartRate = (index: number) => {
    const updated = additionalHeartRates.filter((_, i) => i !== index);
    setAdditionalHeartRates(updated);
  };

  const deleteStep = (index: number) => {
    const updated = additionalSteps.filter((_, i) => i !== index);
    setAdditionalSteps(updated);
  };

  const deleteDistance = (index: number) => {
    const updated = additionalDistances.filter((_, i) => i !== index);
    setAdditionalDistances(updated);
  };

  const deleteWeight = (index: number) => {
    const updated = additionalWeights.filter((_, i) => i !== index);
    setAdditionalWeights(updated);
  };

  const deleteHeight = (index: number) => {
    const updated = additionalHeights.filter((_, i) => i !== index);
    setAdditionalHeights(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 p-6 flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-white mb-6">Health & Fitness Tracker</h1>
      
      {/* Flex container for the boxes with 2 boxes per row */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* First Row: Heart Rate & Steps */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 h-full">
          {/* Heart Rate Box */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center h-full">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              Heart Rate: <span className="text-gray-800">{heartRate} bpm</span>
            </h2>
            <div className="flex justify-center space-x-3 mt-3">
              <button
                onClick={increaseHeartRate}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
              >
                Increase
              </button>
              <button
                onClick={decreaseHeartRate}
                className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
              >
                Decrease
              </button>
            </div>
            <button
              onClick={addHeartRate}
              className="bg-yellow-500 text-white px-5 py-2 mt-4 w-full rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out"
            >
              Add Heart Rate Entry
            </button>
            <div className="mt-4 space-y-2 h-40 overflow-y-auto">
              {additionalHeartRates.map((rate, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center h-14">
                  <span>Heart Rate Entry #{index + 1}: {rate} bpm</span>
                  <button
                    onClick={() => deleteHeartRate(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 h-full">
          {/* Steps Box */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center h-full">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              Steps Walked: <span className="text-gray-800">{steps} steps</span>
            </h2>
            <div className="flex justify-center space-x-3 mt-3">
              <button
                onClick={increaseSteps}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
              >
                Increase
              </button>
              <button
                onClick={decreaseSteps}
                className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
              >
                Decrease
              </button>
            </div>
            <button
              onClick={addStep}
              className="bg-yellow-500 text-white px-5 py-2 mt-4 w-full rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out"
            >
              Add Step Entry
            </button>
            <div className="mt-4 space-y-2 h-40 overflow-y-auto">
              {additionalSteps.map((step, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center h-14">
                  <span>Step Entry #{index + 1}: {step} steps</span>
                  <button
                    onClick={() => deleteStep(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row: Distance & Weight */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 h-full">
          {/* Distance Box */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center h-full">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Distance Walked: <span className="text-gray-800">{distance.toFixed(1)} km</span>
            </h2>
            <div className="flex justify-center space-x-3 mt-3">
              <button
                onClick={increaseDistance}
                className="bg-indigo-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
              >
                Increase
              </button>
              <button
                onClick={decreaseDistance}
                className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
              >
                Decrease
              </button>
            </div>
            <button
              onClick={addDistance}
              className="bg-yellow-500 text-white px-5 py-2 mt-4 w-full rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out"
            >
              Add Distance Entry
            </button>
            <div className="mt-4 space-y-2 h-40 overflow-y-auto">
              {additionalDistances.map((dist, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center h-14">
                  <span>Distance Entry #{index + 1}: {dist} km</span>
                  <button
                    onClick={() => deleteDistance(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 h-full">
          {/* Weight Box */}
          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center h-full">
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Weight: <span className="text-gray-800">{weight} kg</span>
            </h2>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              className="w-full text-center text-xl py-2 rounded-md shadow-md mb-4"
            />
            <button
              onClick={addWeight}
              className="bg-yellow-500 text-white px-5 py-2 mt-4 w-full rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out"
            >
              Add Weight Entry
            </button>
            <div className="mt-4 space-y-2 h-40 overflow-y-auto">
              {additionalWeights.map((wt, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center h-14">
                  <span>Weight Entry #{index + 1}: {wt} kg</span>
                  <button
                    onClick={() => deleteWeight(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Height Box */}
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 h-full">
          <div className="bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center h-full">
            <h2 className="text-2xl font-semibold text-purple-600 mb-3">
              Height: <span className="text-gray-800">{height} cm</span>
            </h2>
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              className="w-full text-center text-xl py-2 rounded-md shadow-md mb-4"
            />
            <button
              onClick={addHeight}
              className="bg-yellow-500 text-white px-5 py-2 mt-4 w-full rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out"
            >
              Add Height Entry
            </button>
            <div className="mt-4 space-y-2 h-40 overflow-y-auto">
              {additionalHeights.map((ht, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center h-14">
                  <span>Height Entry #{index + 1}: {ht} cm</span>
                  <button
                    onClick={() => deleteHeight(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 h-full flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-3">
            Are you sure you want to log out?
          </h2>
          <p className="text-gray-600 text-lg">We’ll be waiting for your return! 😊</p>
          <div className="space-x-4 flex justify-center">
            <a
              href="/login"
              className="bg-red-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
            >
              Yes, Log Out
            </a>
            <a
              href="/dashboard"
              className="bg-gray-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-200 ease-in-out"
            >
              No, Stay Logged In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
