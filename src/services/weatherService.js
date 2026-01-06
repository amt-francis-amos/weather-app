import axios from "axios";

const API_KEY = "787f414598feb984a0fa37fa51d8d019";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric"
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "City not found");
  }
};