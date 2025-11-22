import React from 'react';
import { Cloud, Sun, CloudRain, Droplets, Wind, Eye, Thermometer } from 'lucide-react';

const Weather: React.FC = () => {
  const forecast = [
    { day: 'Today', high: 32, low: 24, condition: 'Partly Cloudy', icon: Cloud },
    { day: 'Tomorrow', high: 29, low: 22, condition: 'Rainy', icon: CloudRain },
    { day: 'Wednesday', high: 35, low: 26, condition: 'Sunny', icon: Sun },
    { day: 'Thursday', high: 33, low: 25, condition: 'Partly Cloudy', icon: Cloud },
    { day: 'Friday', high: 31, low: 23, condition: 'Rainy', icon: CloudRain },
  ];

  const weatherDetails = [
    { label: 'Humidity', value: '65%', icon: Droplets },
    { label: 'Wind Speed', value: '12 km/h', icon: Wind },
    { label: 'Visibility', value: '10 km', icon: Eye },
    { label: 'UV Index', value: '6 (High)', icon: Sun },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Weather Forecast</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Refresh
        </button>
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Current Weather</h3>
            <p className="text-blue-100">Mumbai, Maharashtra</p>
          </div>
          <Cloud className="h-16 w-16 text-blue-200" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-5xl font-bold mb-2">28°C</p>
            <p className="text-xl text-blue-100">Partly Cloudy</p>
            <p className="text-blue-200 mt-2">Feels like 31°C</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {weatherDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div key={index} className="bg-blue-400 bg-opacity-30 rounded-lg p-3">
                  <Icon className="h-5 w-5 text-blue-200 mb-2" />
                  <p className="text-sm text-blue-100">{detail.label}</p>
                  <p className="font-semibold">{detail.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">5-Day Forecast</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => {
            const Icon = day.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <p className="font-semibold text-gray-900 mb-2">{day.day}</p>
                <Icon className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                <p className="text-sm text-gray-600 mb-2">{day.condition}</p>
                <div className="flex justify-center space-x-2">
                  <span className="font-bold text-gray-900">{day.high}°</span>
                  <span className="text-gray-500">{day.low}°</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Farming Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Farming Recommendations</h3>
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Droplets className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-green-800">Irrigation Needed</h4>
                <p className="text-green-700">Low humidity levels detected. Consider watering your crops today.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <CloudRain className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800">Rain Expected Tomorrow</h4>
                <p className="text-yellow-700">Postpone fertilizer application as rain is expected tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;