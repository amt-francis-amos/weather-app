import React from "react";
import { ThermometerSun } from "lucide-react";
import { getWeatherIcon } from "../utils/weatherIcons";
import WeatherDetails from "./WeatherDetails";

const WeatherCard = ({ weather }) => (
  <div className="space-y-3 sm:space-y-4">
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 capitalize">
        {weather.weather[0].description}
      </p>
    </div>

    <div className="flex justify-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-blue-500">
        {getWeatherIcon(weather.weather[0].main)}
      </div>
    </div>

    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-1">
        {Math.round(weather.main.temp)}°C
      </div>
      <div className="flex items-center justify-center gap-1.5 text-gray-600">
        <ThermometerSun className="w-4 h-4" />
        <p className="text-xs sm:text-sm">
          Feels like {Math.round(weather.main.feels_like)}°C
        </p>
      </div>
    </div>

    <WeatherDetails weather={weather} />

    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 pt-3 border-t border-gray-200">
      <div className="text-center">
        <p className="mb-0.5">Min</p>
        <p className="font-semibold text-gray-800 text-sm">
          {Math.round(weather.main.temp_min)}°C
        </p>
      </div>
      <div className="text-center">
        <p className="mb-0.5">Current</p>
        <p className="font-semibold text-gray-800 text-sm">
          {Math.round(weather.main.temp)}°C
        </p>
      </div>
      <div className="text-center">
        <p className="mb-0.5">Max</p>
        <p className="font-semibold text-gray-800 text-sm">
          {Math.round(weather.main.temp_max)}°C
        </p>
      </div>
    </div>
  </div>
);

export default WeatherCard;