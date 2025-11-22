import React, { useState } from 'react';
import { Play, BookOpen, Clock, Users, Star, Filter } from 'lucide-react';

const Learning: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles'>('videos');

  const videos = [
    {
      id: 1,
      title: 'Modern Rice Cultivation Techniques',
      duration: '15:30',
      views: '12.5K',
      rating: 4.8,
      instructor: 'Dr. Priya Singh',
      thumbnail: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Learn advanced rice cultivation methods to increase yield and reduce water usage.',
      category: 'Crop Management'
    },
    {
      id: 2,
      title: 'Organic Pest Control Methods',
      duration: '22:45',
      views: '8.3K',
      rating: 4.9,
      instructor: 'Rajesh Kumar',
      thumbnail: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Natural and eco-friendly solutions for pest management in organic farming.',
      category: 'Pest Control'
    },
    {
      id: 3,
      title: 'Soil Health Assessment',
      duration: '18:20',
      views: '15.7K',
      rating: 4.7,
      instructor: 'Prof. Anita Sharma',
      thumbnail: 'https://images.pexels.com/photos/4503212/pexels-photo-4503212.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Understanding soil composition and how to improve soil health naturally.',
      category: 'Soil Management'
    },
    {
      id: 4,
      title: 'Smart Irrigation Systems',
      duration: '12:15',
      views: '9.8K',
      rating: 4.6,
      instructor: 'Amit Patel',
      thumbnail: 'https://images.pexels.com/photos/4503851/pexels-photo-4503851.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Introduction to automated irrigation and water conservation techniques.',
      category: 'Technology'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Climate-Smart Agriculture: Adapting to Changing Weather',
      readTime: '8 min read',
      author: 'Dr. Meera Joshi',
      publishDate: '2024-01-15',
      excerpt: 'Strategies for adapting farming practices to climate change and extreme weather events.',
      category: 'Climate',
      featured: true
    },
    {
      id: 2,
      title: 'Maximizing Profit with Crop Rotation',
      readTime: '5 min read',
      author: 'Suresh Reddy',
      publishDate: '2024-01-12',
      excerpt: 'How strategic crop rotation can improve soil health and increase farm profitability.',
      category: 'Crop Management',
      featured: false
    },
    {
      id: 3,
      title: 'Government Subsidies: A Complete Guide',
      readTime: '12 min read',
      author: 'Priya Nair',
      publishDate: '2024-01-10',
      excerpt: 'Everything you need to know about available government schemes and how to apply.',
      category: 'Finance',
      featured: true
    },
    {
      id: 4,
      title: 'Integrated Pest Management Strategies',
      readTime: '7 min read',
      author: 'Dr. Kiran Shah',
      publishDate: '2024-01-08',
      excerpt: 'Combining biological, cultural, and chemical methods for effective pest control.',
      category: 'Pest Control',
      featured: false
    }
  ];

  const categories = ['All', 'Crop Management', 'Pest Control', 'Soil Management', 'Technology', 'Finance', 'Climate'];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Learning Center</h2>
          <p className="text-gray-600">Expand your farming knowledge with expert content</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          My Progress
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'videos' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Play className="h-4 w-4" />
            <span>Video Tutorials</span>
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'articles' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Articles</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            {category}
          </button>
        ))}
        <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
          <Filter className="h-4 w-4" />
          <span>More Filters</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'videos' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-colors">
                    <Play className="h-6 w-6 text-gray-900 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mb-2">
                  {video.category}
                </span>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>by {video.instructor}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{video.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{video.views} views</span>
                  </div>
                  <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Featured Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {articles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <span className="inline-block px-3 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full mb-3">
                  Featured
                </span>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-blue-100 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-blue-100">
                    <span>by {article.author}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Regular Articles */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Latest Articles</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {articles.filter(article => !article.featured).map((article) => (
                <div key={article.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.publishDate}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h4>
                      <p className="text-gray-600 mb-3">{article.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {article.author}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Progress Tracking */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Learning Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Play className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Videos Watched</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600">Articles Read</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">5.2</p>
            <p className="text-sm text-gray-600">Hours Learned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;