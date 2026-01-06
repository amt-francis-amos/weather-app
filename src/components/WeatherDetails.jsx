import React from "react";
import { Droplets, Wind, Gauge, Eye } from "lucide-react";

const WeatherDetails = ({ weather }) => (
  <div className="grid grid-cols-2 gap-2 sm:gap-3">
    <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center">
      <div className="flex justify-center mb-1">
        <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      <p className="text-gray-600 text-xs mb-0.5">Humidity</p>
      <p className="text-base sm:text-xl font-bold text-gray-800">
        {weather.main.humidity}%
      </p>
    </div>
    <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center">
      <div className="flex justify-center mb-1">
        <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      <p className="text-gray-600 text-xs mb-0.5">Wind Speed</p>
      <p className="text-base sm:text-xl font-bold text-gray-800">
        {weather.wind.speed} m/s
      </p>
    </div>
    <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center">
      <div className="flex justify-center mb-1">
        <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      <p className="text-gray-600 text-xs mb-0.5">Pressure</p>
      <p className="text-base sm:text-xl font-bold text-gray-800">
        {weather.main.pressure} hPa
      </p>
    </div>
    <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-center">
      <div className="flex justify-center mb-1">
        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      </div>
      <p className="text-gray-600 text-xs mb-0.5">Visibility</p>
      <p className="text-base sm:text-xl font-bold text-gray-800">
        {(weather.visibility / 1000).toFixed(1)} km
      </p>
    </div>
  </div>
);

export default WeatherDetails;