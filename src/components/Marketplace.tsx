import React, { useState } from 'react';
import { Search, Plus, Phone, Mail, MapPin, Star } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  const listings = [
    {
      id: 1,
      type: 'sell',
      crop: 'Rice',
      variety: 'Basmati',
      quantity: 100,
      price: 3200,
      unit: 'quintal',
      seller: 'Rajesh Kumar',
      location: 'Pune, Maharashtra',
      rating: 4.8,
      phone: '+91 98765 43210',
      email: 'rajesh@example.com',
      description: 'Premium quality Basmati rice, harvested this season. Organic farming methods used.',
      image: 'https://images.pexels.com/photos/33239/wheat-field-wheat-cereals-grain.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      type: 'buy',
      crop: 'Wheat',
      variety: 'Durum',
      quantity: 50,
      price: 2300,
      unit: 'quintal',
      buyer: 'Sunita Patel',
      location: 'Mumbai, Maharashtra',
      rating: 4.6,
      phone: '+91 98123 45678',
      email: 'sunita@example.com',
      description: 'Looking for high-quality durum wheat for flour mill. Immediate purchase.',
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      type: 'sell',
      crop: 'Tomato',
      variety: 'Hybrid',
      quantity: 20,
      price: 45,
      unit: 'kg',
      seller: 'Amit Singh',
      location: 'Nashik, Maharashtra',
      rating: 4.9,
      phone: '+91 99876 54321',
      email: 'amit@example.com',
      description: 'Fresh hybrid tomatoes, perfect for restaurants and retailers.',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      type: 'buy',
      crop: 'Onion',
      variety: 'Red',
      quantity: 30,
      price: 35,
      unit: 'kg',
      buyer: 'Priya Sharma',
      location: 'Aurangabad, Maharashtra',
      rating: 4.7,
      phone: '+91 97654 32109',
      email: 'priya@example.com',
      description: 'Bulk purchase required for export business. Quality is priority.',
      image: 'https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const filteredListings = listings.filter(listing => 
    activeTab === 'buy' ? listing.type === 'sell' : listing.type === 'buy'
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Direct Marketplace</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Create Listing</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('buy')}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'buy' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Buy from Farmers
          </button>
          <button
            onClick={() => setActiveTab('sell')}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'sell' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Sell to Buyers
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search crops, varieties, or locations..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
          <option>All Crops</option>
          <option>Rice</option>
          <option>Wheat</option>
          <option>Tomato</option>
          <option>Onion</option>
        </select>
        <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
          <option>All Locations</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Nashik</option>
          <option>Aurangabad</option>
        </select>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={listing.image} 
              alt={listing.crop}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{listing.crop}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  listing.type === 'sell' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {listing.type === 'sell' ? 'For Sale' : 'Wanted'}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">Variety: {listing.variety}</p>
              <p className="text-sm text-gray-600 mb-3">Quantity: {listing.quantity} {listing.unit}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold text-green-600">₹{listing.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">per {listing.unit}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">
                    {listing.type === 'sell' ? listing.seller : listing.buyer}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{listing.location}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{listing.description}</p>
              
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Listing Form (simplified) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Listing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
            <option>Select Crop</option>
            <option>Rice</option>
            <option>Wheat</option>
            <option>Tomato</option>
            <option>Onion</option>
          </select>
          <input 
            type="number" 
            placeholder="Quantity"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <input 
            type="number" 
            placeholder="Price per unit"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button className="w-full mt-4 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Create Full Listing
        </button>
      </div>
    </div>
  );
};

export default Marketplace;