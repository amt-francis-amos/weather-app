import React from "react";
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSnow, CloudFog, CloudLightning } from "lucide-react";

export const getWeatherIcon = (main) => {
  const iconMap = {
    Clear: Sun,
    Clouds: Cloud,
    Rain: CloudRain,
    Drizzle: CloudDrizzle,
    Thunderstorm: CloudLightning,
    Snow: CloudSnow,
    Mist: CloudFog,
    Smoke: CloudFog,
    Haze: CloudFog,
    Dust: CloudFog,
    Fog: CloudFog,
  };
  
  const IconComponent = iconMap[main] || Sun;
  return React.createElement(IconComponent, { className: "w-full h-full" });
};