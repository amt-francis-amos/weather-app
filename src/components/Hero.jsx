import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";
import { fetchWeatherData } from "../services/weatherService";
import { Cloud } from "lucide-react";

const Hero = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
    <div className="w-full max-w-sm">
  <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-3">
    <h1 className="text-lg font-bold text-gray-800 mb-2 text-center">
      Weather App
    </h1>

    <SearchBar
      city={city}
      setCity={setCity}
      onSearch={handleSearch}
      loading={loading}
    />

    {error && <ErrorMessage message={error} />}

    {weather && !error && <WeatherCard weather={weather} />}

    {!weather && !error && !loading && (
      <div className="text-center text-gray-500 py-3">
        <div className="flex justify-center mb-1.5">
          <Cloud className="w-10 h-10 text-gray-400" />
        </div>
        <p className="text-xs px-4">
          Enter a city to get weather information
        </p>
      </div>
    )}
  </div>

  <p className="text-center text-white/80 mt-2 text-xs">
    Powered by OpenWeatherMap API
  </p>
</div>
    </div>
  );
};

export default Hero;