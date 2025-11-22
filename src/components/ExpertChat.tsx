import React, { useState } from 'react';
import { Send, Paperclip, Phone, Video, Star } from 'lucide-react';

const ExpertChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [selectedExpert, setSelectedExpert] = useState(0);

  const experts = [
    {
      id: 1,
      name: 'Dr. Suresh Patel',
      specialty: 'Crop Disease Management',
      rating: 4.9,
      experience: '15 years',
      online: true,
      avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Prof. Anita Sharma',
      specialty: 'Soil Health & Nutrition',
      rating: 4.8,
      experience: '12 years',
      online: true,
      avatar: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      specialty: 'Organic Farming',
      rating: 4.7,
      experience: '10 years',
      online: false,
      avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'expert',
      content: 'Hello! I\'m Dr. Suresh Patel. How can I help you with your farming questions today?',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'user',
      content: 'Hi Doctor, I\'m seeing some yellow spots on my tomato leaves. What could be the cause?',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'expert',
      content: 'Yellow spots on tomato leaves could indicate several issues. Can you tell me more about the pattern? Are they circular spots or irregular? Also, have you noticed any changes in weather recently?',
      time: '10:35 AM'
    },
    {
      id: 4,
      sender: 'user',
      content: 'The spots are mostly circular and there\'s been high humidity lately.',
      time: '10:37 AM'
    },
    {
      id: 5,
      sender: 'expert',
      content: 'This sounds like early blight, which is common in humid conditions. I recommend applying copper-based fungicide and improving air circulation around plants. Would you like specific product recommendations?',
      time: '10:40 AM'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Expert Chat</h2>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          New Consultation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        {/* Experts List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Available Experts</h3>
            <div className="space-y-3">
              {experts.map((expert, index) => (
                <div
                  key={expert.id}
                  onClick={() => setSelectedExpert(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedExpert === index ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        expert.online ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{expert.name}</p>
                      <p className="text-xs text-gray-500 truncate">{expert.specialty}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">{expert.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={experts[selectedExpert].avatar}
                    alt={experts[selectedExpert].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{experts[selectedExpert].name}</h3>
                    <p className="text-sm text-gray-500">{experts[selectedExpert].specialty}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Video className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="px-6 py-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your farming question..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            'Pest control for tomatoes',
            'Best fertilizer for rice',
            'Organic farming tips',
            'Soil testing guidance'
          ].map((question, index) => (
            <button
              key={index}
              className="p-3 bg-gray-50 rounded-lg text-left hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm text-gray-700">{question}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertChat;