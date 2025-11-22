import React from 'react';
import { 
  Thermometer, IndianRupee, Users, MessageSquare, 
  FileCheck, GraduationCap, Calculator, TrendingUp 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const quickStats = [
    { label: 'Today\'s High', value: '32°C', icon: Thermometer, color: 'bg-orange-100 text-orange-800' },
    { label: 'Wheat Price', value: '₹2,150/qtl', icon: IndianRupee, color: 'bg-green-100 text-green-800' },
    { label: 'Active Buyers', value: '156', icon: Users, color: 'bg-blue-100 text-blue-800' },
    { label: 'New Messages', value: '12', icon: MessageSquare, color: 'bg-purple-100 text-purple-800' },
  ];

  const recentActivities = [
    { text: 'New government subsidy scheme announced for organic farming', time: '2h ago' },
    { text: 'Market price for tomatoes increased by 8%', time: '4h ago' },
    { text: 'Weather alert: Light rainfall expected tomorrow', time: '6h ago' },
    { text: 'New buyer inquiry for 50 quintals of rice', time: '1d ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Good Morning, Farmer!</h2>
          <p className="text-gray-600">Here's what's happening on your farm today</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weather Widget */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Today's Weather</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">28°C</p>
              <p className="text-blue-100">Partly Cloudy</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">Humidity: 65%</p>
              <p className="text-sm text-blue-100">Wind: 12 km/h</p>
            </div>
          </div>
        </div>

        {/* Market Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Trends</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rice</span>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">₹3,200</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Wheat</span>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">₹2,150</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Tomato</span>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">₹45</span>
                <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Calculator className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Calculate EMI</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Ask Expert</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <GraduationCap className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Learn New</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-gray-800">{activity.text}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;