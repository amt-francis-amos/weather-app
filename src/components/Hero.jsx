import React, { useState } from "react";
import SearchBar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 md:p-7">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
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
              <div className="text-center text-gray-500 py-6 sm:py-8">
                <div className="flex justify-center mb-3">
                  <Cloud className="w-14 h-14 sm:w-16 sm:h-16 text-gray-400" />
                </div>
                <p className="text-sm sm:text-base px-4">
                  Enter a city to get weather information
                </p>
              </div>
            )}
          </div>

          <p className="text-center text-white/80 mt-3 sm:mt-4 text-xs sm:text-sm">
            Powered by OpenWeatherMap API
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
