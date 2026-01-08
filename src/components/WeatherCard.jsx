import React from "react";
import { ThermometerSun } from "lucide-react";
import { getWeatherIcon } from "../utils/weatherIcons";
import WeatherDetails from "./WeatherDetails";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.weather || !weather.weather[0] || !weather.main || !weather.sys) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="text-center">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-0.5">
          {weather.name}, {weather.sys?.country || ""}
        </h2>
        <p className="text-xs text-gray-600 capitalize">
          {weather.weather[0]?.description || ""}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500">
          {getWeatherIcon(weather.weather[0]?.main || "Clear")}
        </div>
      </div>

      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-0.5">
          {Math.round(weather.main?.temp || 0)}°C
        </div>
        <div className="flex items-center justify-center gap-1 text-gray-600">
          <ThermometerSun className="w-3.5 h-3.5" />
          <p className="text-xs">
            Feels like {Math.round(weather.main?.feels_like || 0)}°C
          </p>
        </div>
      </div>

      <WeatherDetails weather={weather} />

      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 pt-2 border-t border-gray-200">
        <div className="text-center">
          <p className="mb-0.5">Min</p>
          <p className="font-semibold text-gray-800 text-sm">
            {Math.round(weather.main?.temp_min || 0)}°C
          </p>
        </div>
        <div className="text-center">
          <p className="mb-0.5">Current</p>
          <p className="font-semibold text-gray-800 text-sm">
            {Math.round(weather.main?.temp || 0)}°C
          </p>
        </div>
        <div className="text-center">
          <p className="mb-0.5">Max</p>
          <p className="font-semibold text-gray-800 text-sm">
            {Math.round(weather.main?.temp_max || 0)}°C
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;