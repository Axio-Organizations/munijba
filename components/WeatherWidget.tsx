'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, Thermometer, Wind, Droplets } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  humidity: number;
  windSpeed: number;
  location: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 22,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    location: 'Juan Bautista Alberdi'
  });

  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simular cambios de clima cada 10 segundos para demo
    const weatherTimer = setInterval(() => {
      const conditions: ('sunny' | 'cloudy' | 'rainy')[] = ['sunny', 'cloudy', 'rainy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      setWeather(prev => ({
        ...prev,
        temperature: Math.floor(Math.random() * 10) + 18, // 18-28°C
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
      }));
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  if (!mounted || !currentTime) {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="animate-pulse">
          <div className="h-4 bg-white bg-opacity-20 rounded mb-2"></div>
          <div className="h-8 bg-white bg-opacity-20 rounded mb-4"></div>
          <div className="h-4 bg-white bg-opacity-20 rounded"></div>
        </div>
      </div>
    );
  }

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getConditionText = () => {
    switch (weather.condition) {
      case 'sunny':
        return 'Soleado';
      case 'cloudy':
        return 'Nublado';
      case 'rainy':
        return 'Lluvioso';
      default:
        return 'Soleado';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{weather.location}</h3>
          <p className="text-sm opacity-90">
            {currentTime.toLocaleDateString('es-AR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p className="text-xs opacity-75">
            {currentTime.toLocaleTimeString('es-AR')}
          </p>
        </div>
        <motion.div
          animate={{ rotate: weather.condition === 'sunny' ? 360 : 0 }}
          transition={{ duration: 2, repeat: weather.condition === 'sunny' ? Infinity : 0, ease: "linear" }}
        >
          {getWeatherIcon()}
        </motion.div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Thermometer className="w-5 h-5 mr-2" />
          <span className="text-3xl font-bold">{weather.temperature}°C</span>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{getConditionText()}</p>
          <p className="text-xs opacity-75">Sensación térmica {weather.temperature + 2}°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Droplets className="w-4 h-4 mr-2 text-blue-300" />
          <span>Humedad: {weather.humidity}%</span>
        </motion.div>
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Wind className="w-4 h-4 mr-2 text-gray-300" />
          <span>Viento: {weather.windSpeed} km/h</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
