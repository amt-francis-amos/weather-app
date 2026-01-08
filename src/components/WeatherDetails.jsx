import React from "react";
import { Droplets, Wind, Gauge } from "lucide-react";

const WeatherDetails = ({ weather }) => {
  if (!weather || !weather.main) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 pt-2 border-t border-gray-200">
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <Droplets className="w-3.5 h-3.5" />
          <p className="font-semibold text-gray-800">Humidity</p>
        </div>
        <p className="text-sm">{weather.main?.humidity || 0}%</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <Wind className="w-3.5 h-3.5" />
          <p className="font-semibold text-gray-800">Wind</p>
        </div>
        <p className="text-sm">{weather.wind?.speed || 0} m/s</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <Gauge className="w-3.5 h-3.5" />
          <p className="font-semibold text-gray-800">Pressure</p>
        </div>
        <p className="text-sm">{weather.main?.pressure || 0} hPa</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
