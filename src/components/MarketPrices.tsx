import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Search, Filter, MapPin } from 'lucide-react';

const MarketPrices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMandi, setSelectedMandi] = useState('all');

  const marketData = [
    { crop: 'Rice', price: 3200, change: 5.2, unit: 'quintal', mandi: 'Mumbai APMC', lastUpdated: '2 hours ago' },
    { crop: 'Wheat', price: 2150, change: 2.1, unit: 'quintal', mandi: 'Pune APMC', lastUpdated: '1 hour ago' },
    { crop: 'Tomato', price: 45, change: -8.3, unit: 'kg', mandi: 'Nashik APMC', lastUpdated: '30 min ago' },
    { crop: 'Onion', price: 35, change: 12.5, unit: 'kg', mandi: 'Mumbai APMC', lastUpdated: '45 min ago' },
    { crop: 'Potato', price: 28, change: -3.2, unit: 'kg', mandi: 'Pune APMC', lastUpdated: '1 hour ago' },
    { crop: 'Sugarcane', price: 380, change: 1.8, unit: 'quintal', mandi: 'Kolhapur APMC', lastUpdated: '3 hours ago' },
    { crop: 'Cotton', price: 6500, change: 7.4, unit: 'quintal', mandi: 'Aurangabad APMC', lastUpdated: '2 hours ago' },
    { crop: 'Soybean', price: 4800, change: -2.1, unit: 'quintal', mandi: 'Nagpur APMC', lastUpdated: '1 hour ago' },
  ];

  const mandis = ['all', 'Mumbai APMC', 'Pune APMC', 'Nashik APMC', 'Kolhapur APMC', 'Aurangabad APMC', 'Nagpur APMC'];

  const filteredData = marketData.filter(item => {
    const matchesSearch = item.crop.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMandi = selectedMandi === 'all' || item.mandi === selectedMandi;
    return matchesSearch && matchesMandi;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Market Prices</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedMandi}
            onChange={(e) => setSelectedMandi(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {mandis.map(mandi => (
              <option key={mandi} value={mandi}>
                {mandi === 'all' ? 'All Mandis' : mandi}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Price Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Highest Gainer</h3>
          <p className="text-2xl font-bold">Onion</p>
          <p className="text-green-100">+12.5% today</p>
        </div>
        
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Biggest Drop</h3>
          <p className="text-2xl font-bold">Tomato</p>
          <p className="text-red-100">-8.3% today</p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Most Traded</h3>
          <p className="text-2xl font-bold">Rice</p>
          <p className="text-blue-100">₹3,200/quintal</p>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Live Market Prices</h3>
          <p className="text-sm text-gray-600">Real-time prices from major APMCs</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mandi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{item.crop}</div>
                    <div className="text-sm text-gray-500">per {item.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-gray-900">₹{item.price.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center space-x-1 ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="font-medium">{Math.abs(item.change)}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{item.mandi}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Top Performing Crops</h4>
            <div className="space-y-2">
              {marketData.filter(item => item.change > 0).slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-medium">{item.crop}</span>
                  <span className="text-green-600 font-semibold">+{item.change}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Declining Prices</h4>
            <div className="space-y-2">
              {marketData.filter(item => item.change < 0).slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-red-800 font-medium">{item.crop}</span>
                  <span className="text-red-600 font-semibold">{item.change}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;