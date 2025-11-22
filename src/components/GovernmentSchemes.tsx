import React, { useState } from 'react';
import { Search, ExternalLink, Calendar, MapPin, IndianRupee, FileText } from 'lucide-react';

const GovernmentSchemes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const schemes = [
    {
      id: 1,
      title: 'PM-KISAN Samman Nidhi',
      category: 'Financial Support',
      description: 'Direct income support of ₹6,000 per year to small and marginal farmers.',
      benefits: '₹2,000 per installment (3 times a year)',
      eligibility: 'Small and marginal farmers with cultivable land up to 2 hectares',
      applicationDeadline: '2024-03-31',
      status: 'Active',
      documents: ['Aadhaar Card', 'Land Records', 'Bank Details'],
      link: '#'
    },
    {
      id: 2,
      title: 'Pradhan Mantri Fasal Bima Yojana',
      category: 'Insurance',
      description: 'Crop insurance scheme providing financial support to farmers in case of crop failure.',
      benefits: 'Up to ₹2 lakh coverage per farmer',
      eligibility: 'All farmers including sharecroppers and tenant farmers',
      applicationDeadline: '2024-04-15',
      status: 'Active',
      documents: ['Aadhaar Card', 'Land Records', 'Sowing Certificate'],
      link: '#'
    },
    {
      id: 3,
      title: 'Soil Health Card Scheme',
      category: 'Agricultural Support',
      description: 'Free soil testing and recommendations for optimal nutrient management.',
      benefits: 'Free soil testing and nutrient recommendations',
      eligibility: 'All farmers',
      applicationDeadline: 'Ongoing',
      status: 'Active',
      documents: ['Aadhaar Card', 'Land Records'],
      link: '#'
    },
    {
      id: 4,
      title: 'National Agriculture Market (e-NAM)',
      category: 'Market Support',
      description: 'Online trading platform for agricultural commodities.',
      benefits: 'Better price discovery and transparent auctions',
      eligibility: 'Registered farmers and traders',
      applicationDeadline: 'Ongoing',
      status: 'Active',
      documents: ['Aadhaar Card', 'Bank Details', 'Mobile Number'],
      link: '#'
    },
    {
      id: 5,
      title: 'Kisan Credit Card',
      category: 'Financial Support',
      description: 'Easy access to credit for farmers at subsidized interest rates.',
      benefits: 'Credit up to ₹3 lakh at 7% interest rate',
      eligibility: 'Farmers with land ownership or valid land documents',
      applicationDeadline: 'Ongoing',
      status: 'Active',
      documents: ['Aadhaar Card', 'Land Records', 'Income Certificate'],
      link: '#'
    },
    {
      id: 6,
      title: 'Organic Farming Promotion',
      category: 'Agricultural Support',
      description: 'Financial assistance for adoption of organic farming practices.',
      benefits: '₹50,000 per hectare for 3 years',
      eligibility: 'Farmers willing to convert to organic farming',
      applicationDeadline: '2024-05-30',
      status: 'New',
      documents: ['Aadhaar Card', 'Land Records', 'Organic Certification'],
      link: '#'
    }
  ];

  const categories = ['all', 'Financial Support', 'Insurance', 'Agricultural Support', 'Market Support'];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Government Schemes</h2>
          <p className="text-gray-600">Latest subsidies, insurance, and support programs</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Apply for Scheme
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search schemes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Active Schemes</h3>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Total Beneficiaries</h3>
          <p className="text-3xl font-bold">2.1M</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Amount Disbursed</h3>
          <p className="text-3xl font-bold">₹5.2K Cr</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">New This Month</h3>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => (
          <div key={scheme.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{scheme.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    scheme.status === 'New' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {scheme.status}
                  </span>
                </div>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  {scheme.category}
                </span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">{scheme.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <IndianRupee className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600">Benefits: {scheme.benefits}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Deadline: {scheme.applicationDeadline}</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Eligibility:</h4>
              <p className="text-sm text-gray-600">{scheme.eligibility}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Required Documents:</h4>
              <div className="flex flex-wrap gap-2">
                {scheme.documents.map((doc, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Applications</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div>
              <h4 className="font-medium text-yellow-800">PM-KISAN Application</h4>
              <p className="text-sm text-yellow-600">Application ID: PKS2024001234</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Under Review</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div>
              <h4 className="font-medium text-green-800">Soil Health Card</h4>
              <p className="text-sm text-green-600">Application ID: SHC2024005678</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Approved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;